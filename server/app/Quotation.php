<?php

namespace App;

use App\Client;
use App\Load;
use App\Port;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Quotation extends Model
{
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cost_price',
        'sale_price',
        'notes',
        'origin_port_id',
        'destiny_port_id',
        'user_id',
        'client_id'
    ];

    public function client()
    {
    	return $this->belongsTo(Client::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function origin()
    {
    	return $this->belongsTo(Port::class);
    }

    public function destiny()
    {
    	return $this->belongsTo(Port::class);
    }

   	public function load()
    {
    	return $this->belongsTo(Load::class);
    }

    public function getSellerAttribute()
    {
    	return $this->user;
    }
}
