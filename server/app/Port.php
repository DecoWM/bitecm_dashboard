<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Port extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'address', 'country', 'city', 'code'
    ];

}
