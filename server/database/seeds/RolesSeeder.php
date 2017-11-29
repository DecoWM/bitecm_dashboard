<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();

        $role->create(['name' => 'Gerente de Ventas']);
        $role->create(['name' => 'Vendedor']);
        // TODO: crear los demás roles
        // $role ->create(['name' => '']);
    }
}
