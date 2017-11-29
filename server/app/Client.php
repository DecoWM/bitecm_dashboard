<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'address', 'phone', 'user_id'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }


}
