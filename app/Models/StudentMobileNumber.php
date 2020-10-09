<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentMobileNumber extends Model
{	
    protected $guarded = ['id'];

    protected $table = 'student_mobile_numbers';

    public $timestamps = false;
}

