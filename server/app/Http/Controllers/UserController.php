<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class UserController extends ApiController
{
	public function __construct() {
        parent::__construct();
    }

    public function profile()
    {
    	return $this->jsonResponse($this->user, 'profile.show', 'success');
    }
}
