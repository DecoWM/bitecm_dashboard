webpackJsonp(["mi-agencia.module"],{

/***/ "../../../../../src/app/+agencia/+mi-agencia/mi-agencia-form/mi-agencia-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" *ngIf=\"blockContent | async\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Mi Agencia']\" icon=\"building\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget color=\"darken\">\n          <div class=\"widget-body\">\n            <alert *ngIf=\"statusVisible\" type=\"success\" dismissible=\"true\">\n              <i class=\"fa-fw fa fa-check\"></i>\n              <strong>Completado:</strong> {{statusMessage}}\n            </alert>\n            <form-container\n              (onValidationSuccess)=\"onValidationSuccess($event)\"\n              [validatorOptions]=\"validationOptions\"\n            >\n              <fieldset>\n                <legend>Información de la agencia</legend>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Nombre*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"agencia.nombre\" name=\"nombre\" required class=\"form-control\" type=\"text\"\n                    >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Slogan*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"agencia.slogan\" name=\"slogan\" required class=\"form-control\" type=\"text\"\n                    >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Descripción*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"agencia.desc\" name=\"desc\" required class=\"form-control\" type=\"text\"\n                    >\n                  </div>\n                </div>\n              </fieldset>\n              <fieldset>\n                <legend>Estilos <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"resetStyles()\">Resetear estilos</button></legend>\n                <div class=\"col-md-4\">\n                  <h6>Cabecera</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.fondo\" name=\"cabecera.fondo\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Cabecera > Botón</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.boton.fondo\" name=\"cabecera.boton.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.boton.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.boton.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.boton.texto\" name=\"cabecera.boton.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.boton.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.boton.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Cabecera > Logo</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.logo.fondo\" name=\"cabecera.logo.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.logo.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.logo.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Invertido</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.logo.inverso\" name=\"cabecera.logo.inverso\" class=\"form-control\" class=\"form-control\" type=\"checkbox\" (ngModelChange)=\"onCheckboxChange($event)\"\n                      >\n                    </div>\n                  </div>\n                  <h6>Cabecera > Actividad</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.actividad.boton.fondo\" name=\"cabecera.actividad.boton.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.actividad.boton.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.actividad.boton.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.actividad.boton.texto\" name=\"cabecera.actividad.boton.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.actividad.boton.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.actividad.boton.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Contador</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cabecera.actividad.boton.contador\" name=\"cabecera.actividad.boton.contador\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cabecera.actividad.boton.contador\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cabecera.actividad.boton.contador}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Barra Lateral</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.fondo\" name=\"lateral.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Barra Lateral > Menú > Item</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Normal</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.menu.item.normal.texto\" name=\"lateral.menu.item.normal.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.menu.item.normal.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.menu.item.normal.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Hover</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.menu.item.hover.texto\" name=\"lateral.menu.item.hover.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.menu.item.hover.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.menu.item.hover.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Activo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.menu.item.activo.texto\" name=\"lateral.menu.item.activo.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.menu.item.activo.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.menu.item.activo.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <h6>Barra Lateral > Sub Menú</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.submenu.fondo\" name=\"lateral.submenu.fondo\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.submenu.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.submenu.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Barra Lateral > Sub Menú > Item</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo Hover</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.submenu.item.hover.fondo\" name=\"lateral.submenu.item.hover.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.submenu.item.hover.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.submenu.item.hover.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Normal</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.submenu.item.normal.texto\" name=\"lateral.submenu.item.normal.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.submenu.item.normal.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.submenu.item.normal.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Activo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.lateral.submenu.item.activo.texto\" name=\"lateral.submenu.item.activo.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.lateral.submenu.item.activo.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.lateral.submenu.item.activo.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Título de página</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.titulo\" name=\"titulo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.titulo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.titulo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Pie de página</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.pie.fondo\" name=\"pie.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.pie.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.pie.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.pie.texto\" name=\"pie.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.pie.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.pie.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Cinta</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.fondo\" name=\"cinta.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Cinta > Botón</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.boton.fondo\" name=\"cinta.boton.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.boton.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.boton.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.boton.texto\" name=\"cinta.boton.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.boton.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.boton.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Cinta > Migas de pan</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Separador</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.migapan.separador\" name=\"cinta.migapan.separador\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.migapan.separador\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.migapan.separador}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.migapan.texto\" name=\"cinta.migapan.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.migapan.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.migapan.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Activo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.cinta.migapan.activo\" name=\"cinta.migapan.activo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.cinta.migapan.activo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.cinta.migapan.activo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <h6>Botón > Primario</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.boton.primario.fondo\" name=\"boton.primario.fondo\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.boton.primario.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.boton.primario.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.boton.primario.texto\" name=\"boton.primario.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.boton.primario.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.boton.primario.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Widget > Cabecera</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.widget.cabecera.fondo\" name=\"widget.cabecera.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.widget.cabecera.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.widget.cabecera.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Borde</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.widget.cabecera.borde\" name=\"widget.cabecera.borde\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.widget.cabecera.borde\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.widget.cabecera.borde}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.widget.cabecera.texto\" name=\"widget.cabecera.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.widget.cabecera.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.widget.cabecera.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Tablas > Botón</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Detalle</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.tablas.boton.detalle\" name=\"tablas.boton.detalle\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.tablas.boton.detalle\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.tablas.boton.detalle}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Acciones</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.tablas.boton.acciones.texto\" name=\"tablas.boton.acciones.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.tablas.boton.acciones.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.tablas.boton.acciones.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Paginación > Item</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Normal</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.paginacion.item.normal.texto\" name=\"paginacion.item.normal.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.paginacion.item.normal.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.paginacion.item.normal.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto Activo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.paginacion.item.activo.texto\" name=\"paginacion.item.activo.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.paginacion.item.activo.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.paginacion.item.activo.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo Activo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.paginacion.item.activo.fondo\" name=\"paginacion.item.activo.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.paginacion.item.activo.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.paginacion.item.activo.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <h6>Popup</h6>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Fondo</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.popup.fondo\" name=\"popup.fondo\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.popup.fondo\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.popup.fondo}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Icono</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.popup.icono\" name=\"popup.icono\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.popup.icono\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.popup.icono}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-4 control-label\">Texto</label>\n                    <div class=\"col-md-7 input-group\">\n                      <input\n                        [(ngModel)]=\"estilos.popup.texto\" name=\"popup.texto\" class=\"form-control\" class=\"form-control\" saColorpicker type=\"text\" [value]=\"estilos.popup.texto\" (onChange)=\"onColorChange($event)\"\n                      >\n                      <span class=\"input-group-addon\" [ngStyle]=\"{'color': estilos.popup.texto}\"><i class=\"fa fa-square\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </fieldset>\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Regresar</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n                  </div>\n                </div>\n              </div>\n            </form-container>\n          </div>\n        </sa-widget>\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/+agencia/+mi-agencia/mi-agencia-form/mi-agencia-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAgenciaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_agencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/agencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_layout_skin_skin_service__ = __webpack_require__("../../../../../src/app/shared/layout/skin/skin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiAgenciaFormComponent = (function () {
    function MiAgenciaFormComponent(agenciaService, skin, auth) {
        this.agenciaService = agenciaService;
        this.skin = skin;
        this.auth = auth;
        this.blockContent = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Subject"]();
        this.agencia = {};
        this.estilos = {};
        this.statusVisible = false;
        this.validationOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nombre: {
                    validators: {
                        notEmpty: {
                            message: 'Ingrese un nombre completo'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Ingrese un correo electrónico'
                        },
                        emailAddress: {
                            message: 'Ingrese un correo electrónico válido'
                        }
                    }
                }
            }
        };
    }
    MiAgenciaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start('Cargando...');
        this.agenciaService.getDetalleMiAgencia()
            .subscribe(function (data) {
            _this.agencia = data.result;
            _this.estilos = _this.skin.extendStyles(_this.agencia.estilos);
            _this.skin.resetSkin(_this.agencia);
            _this.blockUI.stop();
            _this.blockContent.next(true);
        });
    };
    MiAgenciaFormComponent.prototype.onColorChange = function (event) {
        var color = event.value;
        var inputName = event.target.name;
        inputName.split('.').reduce(function (a, b) {
            if (typeof a[b] === 'string') {
                a[b] = color;
            }
            return a[b];
        }, this.estilos);
        this.skin.previewStyles(this.estilos);
    };
    MiAgenciaFormComponent.prototype.onCheckboxChange = function (event) {
        this.skin.previewStyles(this.estilos);
    };
    MiAgenciaFormComponent.prototype.resetStyles = function () {
        this.estilos = this.skin.extendStyles(this.agencia.estilos);
        this.skin.previewStyles(this.estilos);
    };
    MiAgenciaFormComponent.prototype.resetLogo = function () {
        this.logo = this.agencia.logo;
        this.skin.previewLogo(this.logo);
    };
    MiAgenciaFormComponent.prototype.save = function () {
        var _this = this;
        this.blockUI.start('Cargando...');
        this.agencia.estilos = this.estilos;
        this.agenciaService.updateAgencia(this.agencia)
            .subscribe(function (data) {
            if (data.success) {
                _this.auth.agencia = _this.agencia;
                // this.skin.resetSkin(this.agencia);
                _this.statusMessage = data.message;
                _this.statusVisible = true;
                _this.$form.data('bootstrapValidator').resetForm();
            }
            _this.blockUI.stop();
        });
    };
    MiAgenciaFormComponent.prototype.onValidationSuccess = function (e) {
        this.$form = $(e.currentTarget);
        if (e.type === 'success') {
            this.save();
        }
    };
    return MiAgenciaFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUI"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["NgBlockUI"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["NgBlockUI"]) === "function" && _a || Object)
], MiAgenciaFormComponent.prototype, "blockUI", void 0);
MiAgenciaFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mi-agencia-form',
        template: __webpack_require__("../../../../../src/app/+agencia/+mi-agencia/mi-agencia-form/mi-agencia-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_agencias_service__["a" /* AgenciasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_agencias_service__["a" /* AgenciasService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_layout_skin_skin_service__["a" /* SkinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_layout_skin_skin_service__["a" /* SkinService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], MiAgenciaFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mi-agencia-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+mi-agencia/mi-agencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiAgenciaModule", function() { return MiAgenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itinerarios_shared_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_agencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/agencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mi_agencia_form_mi_agencia_form_component__ = __webpack_require__("../../../../../src/app/+agencia/+mi-agencia/mi-agencia-form/mi-agencia-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mi_agencia_routing__ = __webpack_require__("../../../../../src/app/+agencia/+mi-agencia/mi-agencia.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MiAgenciaModule = (function () {
    function MiAgenciaModule() {
    }
    return MiAgenciaModule;
}());
MiAgenciaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__mi_agencia_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_0__itinerarios_shared_form_container_form_container_module__["a" /* FormContainerModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__mi_agencia_form_mi_agencia_form_component__["a" /* MiAgenciaFormComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_agencias_service__["a" /* AgenciasService */]]
    })
], MiAgenciaModule);

//# sourceMappingURL=mi-agencia.module.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+mi-agencia/mi-agencia.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_agencia_form_mi_agencia_form_component__ = __webpack_require__("../../../../../src/app/+agencia/+mi-agencia/mi-agencia-form/mi-agencia-form.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__mi_agencia_form_mi_agencia_form_component__["a" /* MiAgenciaFormComponent */],
        data: {
            pageTitle: 'Mi Agencia'
        }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=mi-agencia.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/shared/agencias.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgenciasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgenciasService = (function () {
    function AgenciasService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        this.url = '/api/admin/agencias';
    }
    AgenciasService.prototype.getAgencias = function () {
        return this.http
            .get(this.url, { headers: this.headers });
    };
    AgenciasService.prototype.getDetalleAgencia = function (agencia_id) {
        return this.http
            .get(this.getUrl(agencia_id), { headers: this.headers });
    };
    AgenciasService.prototype.getDetalleMiAgencia = function () {
        var agencia_id = this.authService.agencia._id;
        return this.getDetalleAgencia(agencia_id);
    };
    AgenciasService.prototype.updateAgencia = function (agencia) {
        return this.http
            .put(this.getUrl(agencia._id), agencia, { headers: this.headers });
    };
    AgenciasService.prototype.getUrl = function (id) {
        if (id === void 0) { id = null; }
        var urlParts = [this.url];
        if (id) {
            urlParts.push(id);
        }
        return urlParts.join('/');
    };
    return AgenciasService;
}());
AgenciasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AgenciasService);

var _a, _b;
//# sourceMappingURL=agencias.service.js.map

/***/ })

});
//# sourceMappingURL=mi-agencia.module.chunk.js.map