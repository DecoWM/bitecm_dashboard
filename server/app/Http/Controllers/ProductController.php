<?php

namespace App\Http\Controllers;

use DB;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function detail($product_id = null) {

  }
}