import {Injectable} from '@angular/core';

declare var $: any;

@Injectable()
export class SkinService {
  private skin_id: string = null;

  private default = {
    cabecera: {
      fondo: '#f3f3f3',
      boton: {
        fondo: '#fb3c4a',
        texto: '#ffffff'
      },
      logo: {
        fondo: '#f3f3f3',
        inverso: false
      },
      actividad: {
        boton: {
          fondo: '#0d0f12',
          texto: '#ffffff',
          contador: '#0aa699'
        }
      }
    },
    lateral: {
      fondo: '#22262e',
      menu: {
        item: {
          normal: {
            texto: '#8b91a0'
          },
          hover: {
            texto: '#e1eaf1'
          },
          activo: {
            texto: '#ffffff'
          }
        }
      },
      submenu: {
        fondo: '#2c3139',
        item: {
          normal: {
            texto: '#e1eaf1'
          },
          hover: {
            fondo: '#1b1e24'
          },
          activo: {
            texto: '#ffffff'
          }
        }
      }
    },
    pie: {
      fondo: '#dc9800',
      texto: '#ffffff'
    },
    cinta: {
      fondo: '#e6e6e6',
      boton: {
        fondo: '#697486',
        texto: '#ffffff'
      },
      migapan: {
        separador: '#646464',
        texto: '#747474',
        activo: '#868686'
      }
    },
    titulo: '#4c4f53',
    boton: {
      primario: {
        fondo: '#aac34d',
        texto: '#ffffff'
      }
    },
    widget: {
      cabecera: {
        fondo: '#1b1e24',
        borde: '#1b1e24',
        texto: '#ffffff'
      }
    },
    tablas: {
      boton: {
        detalle: '#aac34d',
        acciones: {
          texto: '#36aecc'
        }
      }
    },
    paginacion: {
      item: {
        normal: {
          texto: '#36aecc'
        },
        hover: {},
        activo: {
          fondo: '#36aecc',
          texto: '#ffffff'
        }
      }
    },
    popup: {
      fondo: '#000000',
      icono: '#fb3c4a',
      texto: '#ffffff'
    }
  };

  addSkin(agencia) {
    if (!this.skin_id) {
      this.skin_id = agencia._id;
      this.addStyles(agencia.estilos);
      this.addLogo(agencia.logo);
    }
  }

  removeSkin() {
    if (this.skin_id) {
      this.removeStyles();
      this.removeLogo();
      this.skin_id = null;
    }
  }

  resetSkin(agencia) {
    this.removeSkin();
    const self = this;
    setTimeout(function() {
      self.addSkin(agencia);
    }, 100);
  }

  private addLogo(logo) {
    const id = this.skin_id;
    const mylogo = `
    <div id="logo_${id}" class="logo-aside">
      <img src="${logo}">
    </div>
    `;
    $('#left-panel ul[sasmartmenu]').after(mylogo);
  }

  private removeLogo() {
    $(`#logo_${this.skin_id}`).remove();
  }

  previewLogo(logo) {
    if (this.skin_id) {
      this.removeLogo();
      this.addLogo(logo);
    }
  }

  private addStyles(styles) {
    const s = this.extendStyles(styles);
    const id = this.skin_id;
    if (s.cabecera.logo.inverso) {
      s.cabecera.logo.texto = '#ffffff';
    } else {
      s.cabecera.logo.texto = '#333333';
    }
    const mystyle = `
    .skin_${id} h1, .skin_${id} h2,
    .skin_${id} h3, .skin_${id} h4 {
      font-weight: 400;
    }
    .skin_${id} a{
      transition:color .1s linear 0s,
      background-color .1s linear 0s!important
    }
    .skin_${id} body.container{
      border-left:1px solid rgba(34,38,46,.4);
      border-right:1px solid rgba(34,38,46,.4)
    }
    .skin_${id} #header{
      background-image:none;
      background-color:${s.cabecera.fondo};
    }
    .skin_${id} #logo{
      color: ${s.cabecera.logo.texto};
    }
    /*.skin_${id} .project-context>:first-child{
      color:#697B92;
      text-shadow:0 0 1px #111318;
    }
    .skin_${id} .project-selector{
      color:#B9B9B9;
    }*/
    .skin_${id} #ribbon{
      background:${s.cinta.fondo};
    }
    .skin_${id} .breadcrumb>li+li:before{
      color:${s.cinta.migapan.separador};
    }
    .skin_${id} .btn.btn-ribbon{
      background-color:${s.cinta.boton.fondo};
      /*background-image:-moz-linear-gradient(top,#6f7d94,#697486);
      background-image:-webkit-gradient(linear,0 0,0 100%,from(#6f7d94),to(#697486));
      background-image:-webkit-linear-gradient(top,#6f7d94,#697486);
      background-image:-o-linear-gradient(top,#6f7d94,#697486);
      background-image:linear-gradient(to bottom,#6f7d94,#697486);*/
    }
    .skin_${id} #logo-group{
      background:${s.cabecera.logo.fondo}!important;
    }
    .skin_${id} #logo-group span#activity{
      background:${s.cabecera.actividad.boton.fondo};
      border:1px solid ${s.cabecera.actividad.boton.fondo};
      color:${s.cabecera.actividad.boton.texto};
      cursor:pointer;
    }
    .skin_${id} #logo-group>span .badge{
      background:${s.cabecera.actividad.boton.contador};
    }
    .skin_${id} .btn-header>:first-child>a{
      background:${s.cabecera.boton.fondo};
      border:1px solid ${s.cabecera.boton.fondo};
      color:${s.cabecera.boton.texto}!important;
      cursor:pointer!important;
    }
    .skin_${id} .btn-header>:first-child>a:hover{
      opacity:.9
    }
    .skin_${id} #cancel-search-js{
      background:#fb3c4a;
      line-height:29px!important;
    }
    .skin_${id} .MessageBoxContainer {
      width: 50%;
      margin: 0 auto;
    }
    .skin_${id} .MessageBoxMiddle {
      width: 100%;
      left: 0%;
    }
    .skin_${id} .MsgTitle .txt-color-orangeDark{
      color:${s.popup.icono}!important;
    }
    .skin_${id} .minifyme{
      background:#434953;
    }
    .skin_${id} .minifyme:hover{
      background:#5C6C86;
      color:#E1E8F3;
    }
    .skin_${id} #show-shortcut:hover>i{
      color:#fff
    }
    .skin_${id} .superbox-list.active:before{
      color:#1b1e24
    }
    .skin_${id} nav ul b{
      font-size:14px;
      margin-top:0
    }
    .skin_${id} nav ul b .fa-plus-square-o:before{
      content:"\f104"
    }
    .skin_${id} nav ul b .fa-minus-square-o:before{
      content:"\f107"
    }
    .skin_${id} nav ul ul{
      background:${s.lateral.submenu.fondo};
    }
    .skin_${id} nav ul ul li>a{
      /*text-shadow:0 1px 1px #000;*/
      font-size:13px;
      padding-left:43px;
      color:${s.lateral.submenu.item.normal.texto};
      display:block;
      font-weight:400;
      padding-top:6px!important;
      padding-bottom:6px!important;
      overflow:hidden
    }
    .skin_${id} nav ul ul li>a:hover{
      background:${s.lateral.submenu.item.hover.fondo}!important
    }
    .skin_${id} nav ul ul li.active>a{
      color:${s.lateral.submenu.item.activo.texto}!important;
    }
    .skin_${id} nav ul ul ul li a{
      padding:8px 17px 8px 54px!important
    }
    .skin_${id} nav ul ul ul ul li a{
      padding-left:72px!important
    }
    .skin_${id} nav ul ul ul ul ul li a{
      padding-left:90px!important
    }
    .skin_${id} nav ul ul ul ul ul ul li a{
      padding-left:108px!important
    }
    .skin_${id} nav ul li.open>a,
    .skin_${id} nav ul li.open>a b {
       color: ${s.lateral.menu.item.activo.texto}!important;
    }
    .skin_${id} nav ul li a:active{
      background:0 0;
    }
    .skin_${id} nav ul li a:hover{
      color:${s.lateral.menu.item.hover.texto};
    }
    .skin_${id} nav ul li a{
      color:${s.lateral.menu.item.normal.texto};
      padding:12px 17px 12px 16px;
    }
    .skin_${id} nav>ul>li>a>i{
      font-size:17px;
      vertical-align:0;
    }
    .skin_${id} nav>ul>li>a b{
      right:17px;
      top:12px;
    }
    .skin_${id} nav>ul>li>a>i:after{
      border:1px solid #fff;
    }
    .skin_${id} nav>ul>li>a:hover i{
      -webkit-animation-name:none;
      -moz-animation-name:none;
      -o-animation-name:none;
      animation-name:none;
    }
    .skin_${id} .header-search>input[type=text]{
      border-color:#FFF!important;
      border-radius:2px;
    }
    .skin_${id} .header-dropdown-list a.dropdown-toggle{
      color:#FFF;
      text-decoration:none;
    }
    .skin_${id} .login-info{
      height:auto;
    }
    .skin_${id} .login-info>span{
      padding:5px 10px;
    }
    .skin_${id} .login-info img{
      width:35px;
      border-radius:50%;
    }
    .skin_${id} .login-info a{
      margin-top:2px;
    }
    .skin_${id} .login-info a span{
      max-width:136px;
    }
    .skin_${id} .login-info a:hover{
      color:#fff;
    }
    .skin_${id} #activity.active .badge{
      background:#0aa699!important;
    }
    .skin_${id} .ajax-dropdown{
      background:#E2E8F1;
    }
    .skin_${id} .ajax-notifications{
      background:#fff;
    }
    .skin_${id} img.online{
      border-left-color:#0AA699!important;
    }
    .skin_${id} .onoffswitch-inner:before{
      background-color:#36AECC!important;
    }
    .skin_${id} .bg-color-red{
      background-color:#fb3c4a!important;
    }
    .skin_${id} .jarviswidget-color-darken>header{
      background:${s.widget.cabecera.fondo}!important;
      border-color:${s.widget.cabecera.borde}!important;
      color:${s.widget.cabecera.texto};
    }
    .skin_${id} .jarviswidget-color-blueDark>header{
      background:#353D4B!important;
      border-color:#353D4B!important;
    }
    .skin_${id} .jarviswidget-color-blue>header{
      background:#688F9E;
      border-color:#6A838D!important;
    }
    .skin_${id} .jarviswidget-color-purple>header{
      background:#736086;
    }
    .skin_${id} .jarviswidget-color-red>header{
      background:#C02631;
      border-color:#8F2129!important;
    }
    .skin_${id} .jarviswidget .bg-color-red{
      background:#C02631!important;
    }
    .skin_${id} .ui-chatbox-titlebar{
      background:#3E4553!important;
    }
    .skin_${id} .ui-chatbox-titlebar.ui-state-focus{
      background:#1B1F27!important;
    }
    .skin_${id} #ribbon .breadcrumb li:last-child,
    .skin_${id} #ribbon .breadcrumb>.active{
      color:${s.cinta.migapan.activo};
    }
    .skin_${id} #ribbon .breadcrumb,
    .skin_${id} #ribbon .breadcrumb a{
      color:${s.cinta.migapan.texto}!important;
    }
    .skin_${id} .dropdown-menu,
    .skin_${id} .open>.dropdown-menu{
      padding:4px;
    }
    .skin_${id} .dropdown-menu>li>a{
      border-radius:4px;
      margin:3px 0;
    }
    .skin_${id} aside{
      background:${s.lateral.fondo};
    }
    .skin_${id} .superbox-show {
      background:#22262e;
    }
    .skin_${id} .page-title {
      color: ${s.titulo};
    }
    .skin_${id} .page-footer {
      background:${s.pie.fondo}!important;
    }
    .skin_${id} .page-footer span {
      color:${s.pie.texto};
    }
    .skin_${id} aside .logo-aside{
      width: 65%;
      display: block;
      margin: 0 auto;
      margin-top: 30px;
    }
    .skin_${id} aside .logo-aside img{
      width: 100%;
    }
    .skin_${id} .login-info,
    .skin_${id} .login-info span{
      border-bottom:none;
    }
    .skin_${id} nav>ul ul li::before,
    .skin_${id} nav>ul>li>ul::before{
      border:none!important;
    }
    .skin_${id} .login-info a,
    .skin_${id} .login-info strong{
      color:#8b91a0;
    }
    .skin_${id} table a {
      color: ${s.tablas.boton.acciones.texto};
    }
    .skin_${id} .dataTable tbody .details-control:before {
      color: ${s.tablas.boton.detalle};
    }
    .skin_${id} .pagination>li>a {
      color: ${s.paginacion.item.normal.texto};
    }
    .skin_${id} .pagination>li.active>a,
    .skin_${id} .pagination>li>a:focus,
    .skin_${id} .pagination>li>a:hover,
    .skin_${id} .pagination>li.active>span,
    .skin_${id} .pagination>li>span:focus,
    .skin_${id} .pagination>li>span:hover{
      background-color:${s.paginacion.item.activo.fondo};
      border-color:${s.paginacion.item.activo.fondo};
      color:${s.paginacion.item.activo.texto};
    }
    .skin_${id}.minified .login-info a{
      margin-top:6px
    }
    .skin_${id}.minified .login-info img{
      width:30px!important
    }
    .skin_${id}.minified .login-info span{
      padding:0 5px!important
    }
    .skin_${id}.minified nav ul li a{
      padding:12px 17px 12px 14px
    }
    .skin_${id}.minified nav ul ul li>a:hover{
      background:#30343D!important
    }
    .skin_${id}.minified nav ul ul li>a{
      padding-left:13px;padding-right:13px!important
    }
    .skin_${id}.minified nav ul ul ul li a{
      padding-left:33px!important;
      padding-right:13px!important
    }
    .skin_${id}.minified nav ul ul ul ul li a{
      padding-left:43px!important;
      padding-right:13px!important
    }
    .skin_${id}.minified nav ul ul ul ul ul li a{
      padding-left:53px!important;
      padding-right:13px!important
    }
    .skin_${id}.minified nav ul ul ul ul ul ul li a{
      padding-left:63px!important;
      padding-right:13px!important
    }
    .skin_${id}.minified nav ul>li>ul>li>ul{
      background:#1B1E24
    }
    .skin_${id}.minified nav>ul>li{
      border-bottom:1px solid #131416;
      border-top:1px solid #303031
    }
    .skin_${id}.minified nav>ul>li>a>i{
      font-size:18px
    }
    .skin_${id}.minified nav>ul>li>ul{
      background:#1B1E24
    }
    .skin_${id}.minified nav>ul>li>ul>li{
      background:#22262E
    }
    .skin_${id}.minified nav>ul>li>ul>li>ul>li{
      background:#1B1E24
    }
    .skin_${id} .jarviswidget .bg-color-greenLight,
    .skin_${id} .jarviswidget-color-greenLight>header{
      border-color:#96B447!important;
      background:#96B447!important
    }
    .skin_${id} .jarviswidget .bg-color-yellow,
    .skin_${id} .jarviswidget-color-yellow>header{
      border-color:#DBB727!important;
      background:#FDD01C!important;
      color:#25241F;
    }
    .skin_${id} .jarviswidget .bg-color-pink,
    .skin_${id} .jarviswidget-color-pink>header{
      background:#DB8EBB!important
    }
    .skin_${id}.menu-on-top nav ul ul li>a{
      text-shadow:none!important;
      color:#646E75;
    }
    .skin_${id}.menu-on-top nav ul ul li a{
      padding-left:10px!important;
      font-size:13px;
    }
    .skin_${id}.menu-on-top nav ul ul li:hover>a{
      color:#fff;
      background-color:#1b1e24;
    }
    .skin_${id}.menu-on-top nav ul ul .active>a{
      color:#fff!important;
    }
    .skin_${id}.menu-on-top nav>ul ul ul{
      border-top:1px solid #c7c7c7!important;
    }
    .skin_${id}.menu-on-top nav>ul ul li:hover>ul{
      background:#333;
    }
    .skin_${id}.menu-on-top nav>ul>li>a:after{
      color:#8AA1B3!important;
    }
    .skin_${id}.menu-on-top aside{
      background:#14161B;
    }
    .skin_${id}.menu-on-top aside#left-panel{
      -webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.25);
      box-shadow:0 2px 4px 0 rgba(0,0,0,.25);
      border-bottom:1px solid #222;
      border-top:1px solid #333;
    }
    .skin_${id}.menu-on-top aside#left-panel nav>ul>li{
      border-right:1px solid transparent;
      border-left:1px solid transparent;
    }
    .skin_${id}.menu-on-top aside#left-panel nav>ul>li>a{
      text-shadow:none!important;
      font-size:13px;
      padding:10px 9px!important;
    }
    .skin_${id}.menu-on-top aside#left-panel nav>ul>li>ul{
      background:#3a3633;
    }
    .skin_${id}.menu-on-top aside#left-panel nav>ul>li:hover{
      border-right-color:#333;
      border-left-color:#333;
      background:#fff;
      background:-moz-linear-gradient(top,#04070c 0,#2e3e57 66%);
      background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#cfcfcf),color-stop(66%,#2e3e57));
      background:-webkit-linear-gradient(top,#04070c 0,#2e3e57 66%);
      background:-o-linear-gradient(top,#04070c 0,#2e3e57 66%);
      background:-ms-linear-gradient(top,#04070c 0,#2e3e57 66%);
      background:linear-gradient(to bottom,#04070c,#2e3e57 66%);
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#04070C', endColorstr='#2E3E57', GradientType=0);
    }
    .skin_${id}.menu-on-top aside#left-panel nav>ul>li:hover>a{
      color:#F1F1F1!important;
      border-left:1px solid #000;
      border-right:1px solid #000;
      padding-left:8px!important;
      padding-right:8px!important;
    }
    .skin_${id}.menu-on-top nav ul ul li a,
    .skin_${id}.menu-on-top nav ul ul ul li a{
      color:#D8DEE5;
    }
    .skin_${id}.menu-on-top nav ul ul li a:hover,
    .skin_${id}.menu-on-top nav ul ul ul li a:hover{
      color:#fff;
      background-color:#1b1e24!important;
    }
    .skin_${id}.menu-on-top nav ul ul,
    .skin_${id}.menu-on-top nav ul ul ul{
      background:#2e3e57!important;
      border:1px solid transparent;
      padding:0;
    }
    .skin_${id}.menu-on-top nav ul ul li:hover>a:after,
    .skin_${id}.menu-on-top nav>ul ul>li a:after,
    .skin_${id}.menu-on-top nav>ul ul>li a:hover:after,
    .skin_${id}.menu-on-top nav>ul>li>a:after{
      color:#D5D5D5;
    }
    .skin_${id}.menu-on-top nav ul ul li:hover>a:after,
    .skin_${id}.menu-on-top nav>ul ul>li a:hover:after{
      color:#fff;
    }
    .skin_${id}.menu-on-top nav>ul ul>li a:only-child:after,
    .skin_${id}.menu-on-top nav>ul>li>a:only-child:after{
      content:""!important;
    }
    .skin_${id}.menu-on-top nav ul ul li.active:hover>a,
    .skin_${id}.menu-on-top nav ul ul li.active>a:hover{
      color:#fff!important;
    }
    .skin_${id} .btn.btn-primary {
      background-color: ${s.boton.primario.fondo};
      border-color: ${s.boton.primario.fondo};
      color: ${s.boton.primario.texto};
    }
    @media (max-width:979px) and (min-width:768px){
      .skin_${id} #hide-menu i{
        color:#fff!important;
      }
    }
    @media (max-width:767px){
      .skin_${id} #hide-menu i{
        color:#fff!important;
      }
    }
    @media only screen and (max-width:679px) and (min-width:0){
      .skin_${id} #hide-menu i{
        color:#fff!important;
      }
    }
    @media only screen and (max-width:479px) and (min-width:320px){
      .skin_${id} #sparks{
        background:#fff;
      }
      .skin_${id} #cancel-search-js,
      .skin_${id} .search-mobile .header-search>button{
        border-radius:3px;
      }
    }`;
    $('body').prepend(`<style id="styles_${id}">` + mystyle + '</style>');
    $('body').addClass(`skin_${id}`);
  }

  private removeStyles() {
    $('body').removeClass(`skin_${this.skin_id}`);
    $(`#styles_${this.skin_id}`).remove();
  }

  previewStyles(estilos) {
    if (this.skin_id) {
      this.removeStyles();
      this.addStyles(estilos);
    }
  }

  extendStyles(styles) {
    return $.extend(true, {}, this.default, styles);
  }
}
