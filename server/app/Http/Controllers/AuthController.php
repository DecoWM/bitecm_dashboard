<?php

namespace App\Http\Controllers;

use DB;
use Exception;
use Illuminate\Support\Facades\Log;
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
            $credentials = $request->only('user_email', 'password');

            $email = $credentials['user_email'];
            $user = DB::table('tbl_user')
                ->where('user_email', $email)
                ->get();

            if (!count($user)) {
                return response()->json(['user' => 'Invalid User'], 404);
            }

            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['password' => 'Invalid Password'], 401);
            }

            $user = JWTAuth::setToken($token)->authenticate();
            $user['roles'] = [intval($user['user_rol'])];

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

    public function test(Request $request) {
        die('holaaa!!!');
    }

    // Permite realizar el refresh del token vencido
    public function refreshToken() {    
        //Obtener el token JWT
        $token = JWTAuth::getToken();
        if(!$token){
            return response()->json([
                'token' => false,
                'success' => false,
                'message' => "error no se pudo obtener el token antiguo.",
                'status' => 200
            ]);
        }
       
        try{
            // refrescar el token
            $token = JWTAuth::refresh($token);
            return response()->json([
                'token' => $token,
                'success' => true,
                'message' => "token refrescado.",
                'status' => 200
            ]);
        }
        catch(okenInvalidException $e){
            return response()->json([
                'token' => false,
                'success' => false,
                'message' => "no se pudo refrescar el tocken.",
                'status' => 200
            ]);
        }

    }
}
