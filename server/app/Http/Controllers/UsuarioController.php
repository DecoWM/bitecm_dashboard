<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Hash;

class UsuarioController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $user_list = DB::table('tbl_user')->select('tbl_user.id', 'tbl_user.user_dni', 'tbl_user.user_name', 'tbl_user.user_email', 'tbl_user.user_rol', 'tbl_user.created_at', 'tbl_user.updated_at', 'tbl_user.active')->get();

    return response()->json([
      'result' => $user_list,
      'success' => true
    ]);
  }

  public function publishUser($id) {
    $user = DB::table('tbl_user')
      ->where('id', $id)
      ->select('id')
      ->first();

    if ($user) {

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_user')
        ->where('id', $user->id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo activar el usuario.',
      'success' => false
    ]);
  }

  public function hideUser($id) {
    $id = DB::table('tbl_user')->where('id', $id)->select('id')->first();

    if ($id) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_user')
        ->where('id', $id->id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo desactivar el usuario.',
      'success' => false
    ]);
  }

  public function storeUser(Request $request) {
    
    $validator = Validator::make($request->all(), [
      'user_dni' => 'required|integer',
      'user_name' => 'required',
      'user_email' => 'required',
      'password' => 'required',
      'user_rol' => 'required|integer'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $user_dni = $request->input('user_dni');
    $user_name = $request->input('user_name');
    $user_email = $request->input('user_email');
    $password = $request->input('password');
    $user_rol = $request->input('user_rol');

    // traer todas las claves existentes
    $passwords = DB::table('tbl_user')->select('password')->get();

    // valida si ya existe el password
    $x = 0;
    $flag = 0;
    while($x < count($passwords) and $flag == 0){
      if (Hash::check($password, $passwords[$x]->password))
      {
        $flag = 1;
      }
      $x++;
    }

    $user = DB::table('tbl_user')
      ->where('user_email', $user_email)
      ->select('id')->first();

    // si no existe usuario y password
    if (!$user and $flag == 0) {
      try {
        DB::beginTransaction();
        $user_id = DB::table('tbl_user')->insertGetId([
          'user_dni' => $user_dni,
          'user_name' => $user_name,
          'user_email' => $user_email,
          'user_rol' => $user_rol,
          'password' => bcrypt($password),
          'created_at' => Carbon::now()->toDateTimeString(),
          'created_by' => 1,
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar el usuario.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      } catch (\PDOException $e){
        return response()->json([
          'result' => 'No se pudo conectar a la base de datos.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      } catch (\Exception $e) {
        return response()->json([
          'result' => 'Se produjo un error al registrar el usuario.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Ya existe un usuario registrado con ese usuario o password.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Usuario registrado correctamente.',
      'id' => $user_id,
      'success' => true
    ]);
  }

  public function getUser($id) {

    $user = DB::table('tbl_user')
      ->where('id', $id)
      ->first();

    if (!$user) {
      return response()->json([
        'result' => 'No se pudo encontrar el usuario.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $user,
      'success' => true
    ]);
  }

  public function updateUser($id_update, Request $request) {

    $id = DB::table('tbl_user')
      ->where('id', $id_update)
      ->select('id')
      ->first();

    if ($id) {

      $validator = Validator::make($request->all(), [
        'password' => 'required'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $password = $request->input('password');
      $updated_at = Carbon::now()->toDateTimeString();

      // traer todas las claves existentes
      $passwords = DB::table('tbl_user')->select('password')->get();

      // valida si ya existe el password
      $x = 0;
      $flag = 0;
      while($x < count($passwords) and $flag == 0){
        if (Hash::check($password, $passwords[$x]->password))
        {
          $flag = 1;
        }
        $x++;
      }

      $data = [
        'password' => bcrypt($password),
        'updated_at' => $updated_at
      ];

      // si no existe el password en la base de datos
      if($flag == 0){
        try {
          DB::beginTransaction();
          DB::table('tbl_user')->where('id', $id->id)->update($data);
          //DB::table('tbl_product_variation')->where('variation_type_id', '1')->where('product_id', $product->product_id)->update(['product_variation_price' => $product_price]);
          DB::commit();
        } catch (\Illuminate\Database\QueryException $e) {
          DB::rollback();
          return response()->json([
            'result' => 'No se pudo actualizar el usuario.',
            'success' => false,
            'error' => $e->getMessage()
          ]);
        }
      } else {
        return response()->json([
          'result' => 'Ya existe un usuario registrado con ese password.',
          'success' => false
        ]);
      }

      return response()->json([
        'result' => 'Usuario actualizado correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar el usuario.',
      'success' => false
    ]);
    
  }

}
