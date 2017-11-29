<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotations', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('cost_price', 10, 2);
            $table->decimal('sale_price', 10, 2);
            $table->string('notes', 255);

            // Origin Port
            $table->integer('origin_port_id')->unsigned();
            $table->foreign('origin_port_id')->references('id')->on('ports')->onDelete('cascade');

            // Destiny
            $table->integer('destiny_port_id')->unsigned();
            $table->foreign('destiny_port_id')->references('id')->on('ports')->onDelete('cascade');

            // user_id
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Client
            $table->integer('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');

            // Loads
            $table->integer('load_id')->unsigned();
            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotations');
    }
}
