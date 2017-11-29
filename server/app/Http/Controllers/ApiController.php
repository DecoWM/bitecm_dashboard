<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiController extends Controller {
	protected $user;

	public function __construct(){
		JWTAuth::parseToken();
        $this->user = JWTAuth::parseToken()->authenticate();
	}

    public function jsonResponse($data, $message, $status): JsonResponse
    {
    	return response()->json([
    		'data' => $data,
    		'message' => config('messages.'.$message),
    		'status' => config('status.'.$status)
    	]);
    }
}