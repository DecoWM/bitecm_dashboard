<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
	/**
	 * Login con jwt
     * @param Request $request
     * @return JsonResponse
     */
    public function authenticate(Request $request): JsonResponse
    {
        try {
            $credentials = $request->only('user_email', 'user_password');
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['password' => 'Invalid Password'], 401);
            }

            $user = JWTAuth::setToken($token)->authenticate();
            $user['roles'] = [1];

            return response()->json([
            	'result' => [
	                'user' => $user,
	                'token' => $token
            	],
                'success' => true,
            	'message' => "Autenticado correctamente.",
            	'status' => 200,
            ]);

        } catch (JWTException $e) {
            Log::error($e);
            return response()->json(['error' => 'could_not_create_token', 'msg' => $e->getMessage()], 500);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json(['error' => 'not handle', 'msg' => $e->getMessage()], 500);
        }
    }

    public function logout(): JsonResponse
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json([
        	'success' => true,
        	'message' => "Sesión cerrada correctamente.",
        	'status' => 200
        ]);
    }
}
