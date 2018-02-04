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

  public function updateImage(Request $request, $image_id) {
    //Validator
    $validator = Validator::make($request->all(), [
      'image_name' => 'required',
      'image_file' => 'nullable|image|max:10240'
    ]);

    //Images
    $image_name = $request->input('image_name');
    $image_link = $request->input('image_link');
    $active = $request->input('active', 0);

    $image_data = [
      'image_link' => $image_link,
      'active' => $active
    ];

    if ($request->hasFile('image_file') && $request->file('image_file')->isValid()) {
      $prefix = "images";
      $extension = $request->file('image_file')->guessExtension();
      $image_data['image_url'] = $request->file('image_file')->storeAs($prefix, $image_name.'.'.$extension, 'public');
      $image_url = asset(Storage::url($image_data['image_url']));
    } else {
      $image_url = null;
    }

    $image_description = DB::table('tbl_image')
      ->where('image_id', $image_id)
      ->value('image_description');
    $image_description = substr($image_description, 3);

  	DB::table('tbl_image')
      ->where('image_id', $image_id)
      ->update($image_data);

    $mensaje =  $image_description.' actualizado correctamente';

    return response()->json([
      'result' => $mensaje,
      'image_url' => $image_url,
      'success' => true
    ]);
  }

  public function listImages($type) {
    $image_list = DB::table('tbl_image')
      ->where('image_type', $type)
      ->get();

    $image_array = [];

    foreach ($image_list as $image) {
      $image->image_url = asset(Storage::url($image->image_url));

      if ($image->image_type != 'SLIDER') {
        $image_demo = asset(Storage::url('images/demo-'.$image->image_id.'.png'));
      } else {
        $image_demo = null;
      }

      $image_data = [
        'image_id' => $image->image_id,
        'image_name' => $image->image_name,
        'image_description' => $image->image_description,
        'image_url' => $image->image_url,
        'image_link' => $image->image_link,
        'image_demo' => $image_demo,
        'active' => $image->active
      ];

      array_push($image_array, $image_data);
    }

    return response()->json([
      'result' => $image_array,
      'success' => true
    ]);
  }
}