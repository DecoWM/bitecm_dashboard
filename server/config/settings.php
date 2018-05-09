<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Product Chip ID
    |--------------------------------------------------------------------------
    |
    | Para modificar la información de los planes se usa un unico producto chip
    |
    */

    'product_chip_id' => env('PRODUCT_CHIP_ID', 42),

    /*
    |--------------------------------------------------------------------------
    | URL Servidor de Notificaciones
    |--------------------------------------------------------------------------
    |
    | Angular obtiene este valor para realizar la conexión socket.io
    |
    */
    'notification_server_url' => env('NOTIFICATION_SERVER_URL')
];