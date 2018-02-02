<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ImageController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  //Slider

  public function storeImage(Request $request,$type) {
      //Validator
      $validator = Validator::make($request->all(), [
          'slider_images' => 'nullable|array',
          'slider_images.*' => 'nullable|image'
      ]);

      //Images
      $slider_images = $request->slider_images?:[];

      $slider_link = $request->slider_link;

      $active = $request->active;

      $image_name = 'img-'. $type;

      $image_id = DB::table('tbl_image')->where('image_name', $image_name)->value('image_id');

      $image_array = [];

      $slider_image_path = '';

      $mensaje = '';

      foreach ($slider_images as $index => $item) {
          if ($item->isValid()) {
              $prefix = "images";
              $extension = $item->guessExtension();
              $slider_image_path = $item->storeAs($prefix.'/', $image_name . '.'.$extension, 'public');
              $image_data = ['image_name' => $image_name , 'image_url' => $slider_image_path, 'image_link' => $slider_link , 'active' => $active];
              array_push($image_array, $image_data);
          }
      }

      if ($image_id != null) {

      	DB::table('tbl_image')
            ->where('image_name', $image_name)
            ->update(['image_url' => $slider_image_path, 'image_link' => $slider_link, 'active' => $active ]);

        $mensaje = 'Banner Principal Actualizado Correctamente';

      }else{

      	DB::table('tbl_image')->insert($image_array);
        $mensaje = 'Banner Principal Registrado Correctamente';

      }


      return response()->json([
        'result' => $mensaje,
        'id' => '0',
        'success' => true
      ]);
  }


  public function listImages($type) {

      $image_list = DB::table('tbl_image')
          ->where('tbl_image.image_type', $type)
          ->select('tbl_image.image_id', 'tbl_image.image_name', 'tbl_image.image_description', 'tbl_image.image_url', 'tbl_image.image_link', 'active')
          ->get();

      foreach ($image_list as $image) {
              $image->image_url = asset(Storage::url($image->image_url));
          }

      return response()->json([
          'result' => $image_list,
          'success' => true
      ]);
  }

}