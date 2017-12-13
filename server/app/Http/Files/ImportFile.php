<?php

namespace App\Http\Files;

use Illuminate\Support\Facades\Input;

class ImportFile extends \Maatwebsite\Excel\Files\ExcelFile {

  public function getFile()
  {
    $file = Input::file('importFile');
    return $file->getRealPath();
  }

}