<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class PromoController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  
}