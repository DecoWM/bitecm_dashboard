<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Pedido Estado Cambiado | Bitel</title>
</head>
<style>
  @import url('http://fonts.googleapis.com/css?family=Open+Sans');
  html,
  body{
    margin: 0;
    padding: 0;
    color: #575756;
    font-size: 14px;
    font-family:'Open Sans';
  }
</style>
<body>
  <table style="width:100%;max-width:600px;margin:0px auto;border-collapse:collapse">
    <thead style="background: #ffe60d; ">
      <tr>
        <th width="8%"><img src="{{env('APP_URL')}}/images/email/bg-header.png" alt="lo  gotipo"></th>
        <th style="height: 40px;color: #008c95; font-size: 19px;padding-top: 20px; padding-bottom: 15px; text-align: right; padding-right: 30px;"><strong>Tu pedido #{{$order->order_id}} ha cambiado de estado</strong></th>
      </tr>
    </thead>
    <tbody style="background-color: #f1f8f8; width: 100%; text-align: center;border-top: 10px solid #ffffff;border-bottom: 10px solid #ffffff;">
      <tr style="height: 30px">
        <td colspan="2" style="padding-top: 15px">Estimado(a):</td>
      </tr>
      <tr style="height: 30px">
        <td colspan="2"><strong>{{$order->first_name}} {{$order->last_name}}</strong></td>
      </tr>
      <tr style="height: 30px">
        <td colspan="2" style="color: #008c95; font-size: 20px;">Te informamos que tu pedido <strong>#{{$order->order_id}}</strong><br>ahora se encuentra en estado <strong>"{{$status->order_status_name}}"</strong></td>
      </tr>
      <tr style="height: 30px">
        <td colspan="2" style=" font-size: 14px;padding-bottom: 15px">Este pedido fue realizado en la fecha {{$order->created_at}}</td>
      </tr>
    </tbody>
  </table>
  <table style="width:100%;max-width:550px;margin:20px auto;border-collapse:collapse;">
    <tbody>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>El pago del plan son de 2 rentas adelantadas.</td></tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>La coordinación con el asesor telefónico se realizará dentro de</td></tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>24 horas después de haber realizado la solicitud en la plataforma web.</td></tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>El costo de envío es gratis.</td></tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px">
        <td>Para poder ver los términos y condiciones de uso de la tienda virtual Bitel</td>
      </tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>ingresa al siguiente link: https://tienda.bitel.com.pe/terminosycondiciones</td>
      </tr>
      <tr>
        <td style="vertical-align: top;"><img src="{{env('APP_URL')}}/images/email/icon-email.png" width="8px" alt="icon" style="margin-right: 9px"></td>
        <td>Para cualquier consulta llamar al 123/930123123/080079123 o enviar un correo servicioalcliente@viettelperu.com.pe</td>
      </tr>
    </tbody>
  </table>
  <table style="width:100%;max-width:600px;margin:0px auto;border-collapse:collapse;background-color: #ffe60d;">
    <tbody>
      <tr style="height: 65px;">
        <td style="text-align: center; font-size: 13px;padding-top: 10px; padding-bottom: 10px;">Este correo es informativo, por favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes.</td>
      </tr>
    </tbody>
  </table>  
</body>
</html>