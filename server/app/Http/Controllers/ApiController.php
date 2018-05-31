<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller {
	protected $user;

	public function __construct() {
        try {
            if (JWTAuth::getToken()) {
                $this->user = JWTAuth::parseToken()->authenticate();
            }
        } catch (TokenExpiredException $e) {
            //Do not log
        } catch (Exception $e) {
            Log::error($e);
        }
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