import {Component, Input, Output, EventEmitter, ElementRef, AfterContentInit, OnInit} from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;
declare var _: any;
declare var moment: any;
var comp = null;
var page = null;

@Component({
  selector: 'sa-datatable',
  template: `
      <table class="dataTable responsive {{tableClass}}" width="{{width}}">
        <ng-content></ng-content>
      </table>
`,
  styles: [
    require('smartadmin-plugins/datatables/datatables.min.css'),
    `:host >>> table.dataTable[_ngcontent-c1] {
      margin: 0 !important; }`
  ]
})
export class DatatableComponent implements OnInit {
  @Input() public options: any;
  @Input() public filter: any;
  @Input() public detailsFormat: any;
  @Input() public dtTrigger: Subject<any>;

  @Input() public paginationLength: boolean;
  @Input() public columnsHide: boolean;
  @Input() public tableClass: string;
  @Input() public width = '100%';

  @Input() public dateRangeOptions = [];

  @Output() onInit: EventEmitter<any> = new EventEmitter();
  @Output() onPageSelected: EventEmitter<any> = new EventEmitter();

  dtInstance = null;

  constructor(
    private el: ElementRef,
    private blockui: BlockUIService
  ) { }

  ngOnInit() {
    comp = this;
    this.dtTrigger.subscribe(() => {
      if (!this.dtInstance) {
        Promise.all([
          System.import('script-loader!smartadmin-plugins/datatables/datatables.min.js'),
          System.import('script-loader!jszip/dist/jszip.min.js'),
          this.blockui.start('content')
        ]).then(() => {
          this.blockui.stop('content');
          this.render();
        })
      } else {
        this.dtInstance.destroy();
        this.render();
      }
    })
  }

  render() {
    const self = this;

    const element = $(this.el.nativeElement.children[0]);

    let options = this.options || {}
    let toolbar_arr = [];

    if (options.buttons) {
      toolbar_arr.push('B');
    }
    if (this.paginationLength) {
      toolbar_arr.push('l');
    }
    if (this.columnsHide) {
      toolbar_arr.push('C');
    }

    if (options.toolbar) {
      toolbar_arr = _.union(toolbar_arr, options.toolbar);
    }

    const toolbar = toolbar_arr.join('');

    if (typeof options.ajax === 'string') {
      const url = options.ajax;
      options.ajax = {
        url: url,
        // complete: function (xhr) {
        //
        // }
      }
    }

    options = $.extend(options, {
      dom: "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
      "t" +
      "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
      language: {
        search: "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span>_INPUT_",
        searchPlaceholder: "Buscar...",
        lengthMenu: "&nbsp;&nbsp;Mostrar &nbsp;_MENU_",
        info: "Mostrando _START_ de _END_ de _TOTAL_",
        infoFiltered: "(filtrado de _MAX_ registros)",
        paginate: {
          first: "Primero",
          last: "Ultimo",
          next: "Siguiente",
          previous: "Anterior"
        }
      },
      autoWidth: false,
      retrieve: true,
      responsive: true,
      initComplete: (settings, json) => {
        element.parent().find('.input-sm', ).removeClass('input-sm').addClass('input-md');

        // -----------------------------------------------------------
        // capturar el numero de la pagina seleccionada
        // -----------------------------------------------------------
        function onActive(_cur) {
           page = _cur.text();
           comp.onPageSelected.emit(page);
        }

        $(document).on('click', '.paginate_button', function(e){
           e.preventDefault();
           onActive($(this));
        });
        // -----------------------------------------------------------

        // ----------------------------------------------------------------------------
        // selecciona el numero de pagina cuando se hace el back desde el navegador
        // ----------------------------------------------------------------------------
        let hash = window.location.hash;
        if (hash) {
          hash = hash.split('#')[1];
          $('.paginate_button a[data-dt-idx=' + hash + ']').trigger('click');
        }
      }
    });

    $.fn.dataTable.ext.search = [];

    if (!this.dateRangeOptions) {
      this.dateRangeOptions = [];
    }

    if (!(this.dateRangeOptions instanceof Array)) {
      this.dateRangeOptions = [this.dateRangeOptions];
    }

    this.dateRangeOptions.forEach((opt, ix) => {
      if (opt.from && opt.to && opt.column) {
        $.fn.dataTable.ext.search.push(
          function( settings, data, dataIndex ) {
            const val = moment(data[opt.column]);

            if (!val._isValid) {
              return false;
            }

            let from = $(opt.from).val();
            let to = $(opt.to).val();

            const from_l = from.toString().length;
            if (from_l > 0 && from_l !== 10) {
              from = 0;
            }
            const to_l = to.toString().length;
            if (to_l > 0 && to_l !== 10) {
              to = 0;
            }

            const min = moment(from, 'DD/MM/YYYY');
            const max = moment(to, 'DD/MM/YYYY');

            const min_x = min.format('x');
            const max_x = max.add(1, 'days').format('x');
            const val_x = val.format('x');

            if ( ( !min._isValid && !max._isValid ) ||
                 ( !min._isValid && val_x <= max_x ) ||
                 ( min_x <= val_x && !max._isValid ) ||
                 ( min_x <= val_x && val_x <= max_x ) ) {
              return true;
            }

            return false;
          }
        );
      }
    });

    this.dtInstance = element.DataTable(options);

    if (this.filter) {
      // Apply the filter
      element.on('keyup change', 'thead th input[type=text]', function () {
        self.dtInstance
          .column($(this).parent().index() + ':visible')
          .search(this.value)
          .draw();
      });
    }

    if (!toolbar) {
      element.parent().find('.dt-toolbar').append('<div class="text-right"><img src="assets/img/logo.png" alt="Bitel" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
    }

    this.onInit.emit(this.dtInstance);
  }
}
