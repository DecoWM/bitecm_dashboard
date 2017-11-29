<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->create([
        	'name' => 'Gerente de Ventas',
	        'email' => 'gerente.ventas@cgl.com',
	        'password' => bcrypt('123456'),
	        'role_id' => 1
        ]);
        $user->create([
        	'name' => 'Vendedor',
	        'email' => 'vendedor@cgl.com',
	        'password' => bcrypt('123456'),
	        'role_id' => 2
        ]);
    }
}
