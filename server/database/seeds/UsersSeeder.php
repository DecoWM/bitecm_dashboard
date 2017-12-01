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
        	'user_name' => 'Agente Prueba',
	        'user_email' => 'agente.prueba@bitel.pe',
	        'password' => bcrypt('prueba')
        ]);
    }
}
