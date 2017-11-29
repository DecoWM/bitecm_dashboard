<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiController;
use App\Http\Requests\SellerRequest;
use Illuminate\Http\Request;

class SellersController extends ApiController
{
	public function __construct() {
        parent::__construct();
    }

    public function all()
    {
    	return $this->jsonResponse(User::ofType(User::SELLER)->get(), 'sellers.all', 'success');
    }

    public function create(SellerRequest $request)
    {
    	return $this->jsonResponse(User::createOfType(User::SELLER, $request->all()), 'sellers.create', 'success');
    }

}
