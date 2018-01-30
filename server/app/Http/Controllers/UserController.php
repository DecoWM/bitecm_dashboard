<?php

namespace App\Http\Controllers;

use DB;
use Validator;
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

  public function list() {
    $user_list = DB::table('tbl_user')->get();

    return response()->json([
      'result' => $user_list,
      'success' => true
    ]);
  }

  public function saveUser(Request $request) {
    $validator = Validator::make($request->all(), [
      'user_name' => 'required|unique:tbl_user',
      'user_email' => 'required|unique:tbl_user',
      'user_avatar' => 'required|image'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    $user_name = $request->input('user_name');
    $user_email = $request->input('user_email');

    $user_slug = str_slug($user_email);

    if ($request->has('user_avatar') && $request->hasFile('user_avatar') && $request->file('user_avatar')->isValid()) {
      $prefix = 'usuarios';
      $extension = $request->file('user_avatar')->guessExtension();
      $user_avatar_path = $request->file('user_avatar')->storeAs($prefix.'/'.$user_slug.'.'.$extension, 'public');
    } else {
      $user_avatar_path = null;
    }

    try {
      DB::beginTransaction();
      $product = DB::table('tbl_user')->insertGetId([
        'user_name' => $user_name,
        'user_email' => $user_email,
        'password' => $product_price,
        'user_avatar' => $user_avatar_path
      ]);
      DB::commit();
    } catch (\Illuminate\Database\QueryException $e) {
      DB::rollback();
      return response()->json([
        'result' => 'No se pudo registrar el producto.',
        'success' => false
      ]);
    } catch (\PDOException $e){
      return response()->json([
        'result' => 'No se pudo conectar a la base de datos.',
        'success' => false
      ]);
    } catch (\Exception $e) {
      return response()->json([
        'result' => 'Se produjo un error al registrar el producto.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Producto registrado correctamente.',
      'id' => $product,
      'success' => true
    ]);
  }

  public function updateUser(Request $request) {
    $validator = Validator::make($request->all(), [
      'id' => 'required|exists:tbl_user',
      'user_avatar' => 'image'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }


  }


}
