<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{	
    protected $guarded = ['id'];

    protected $table = 'subjects';

    public $timestamps = false;
}

