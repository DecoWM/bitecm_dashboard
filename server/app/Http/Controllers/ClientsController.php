<?php

namespace App\Http\Controllers;

use App\Client;
use App\Http\Controllers\ApiController;
use App\Http\Requests\ClientRequest;
use Illuminate\Http\Request;

class ClientsController extends ApiController
{
	public function __construct() {
        parent::__construct();
    }

    public function all()
    {
    	return $this->jsonResponse(Client::all(), 'clients.all', 'success');
    }

    public function create(ClientRequest $request)
    {
    	return $this->jsonResponse(Client::create($request->all()), 'clients.create', 'success');
    }
}
