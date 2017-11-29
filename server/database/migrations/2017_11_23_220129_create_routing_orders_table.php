<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoutingOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routing_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('cost_price', 10, 2);
            $table->decimal('sale_price', 10, 2);
            $table->boolean('direct_sale')->default(false);
            // Place - Origin
            // Place - Destiny
            // status $table->enum('status', ['estado1', 'estado2'])->nullable();

            // Agency
            $table->integer('agency_id')->unsigned();
            $table->foreign('agency_id')->references('id')->on('agencies')->onDelete('cascade');

            // Load
            $table->integer('load_id')->unsigned();
            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');

            // Provider
            $table->integer('provider_id')->unsigned();
            $table->foreign('provider_id')->references('id')->on('providers')->onDelete('cascade');

            // user_id
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Client
            $table->integer('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');

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
        Schema::dropIfExists('routing_orders');
    }
}
