<?php

use App\Port;
use Illuminate\Database\Seeder;

class PortsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $port = new Port();

        $port->create([
            'name' => 'Puerto Nro 1',
            'address' => 'Avenida Último Viaje 123',
            'country' => 'Perú',
            'city' => 'Lima',
            'code' => '0051',
        ]);

    }
}
