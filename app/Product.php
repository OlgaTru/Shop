<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function categories()
    {
        return $this->belongsTo('App\Category');
    }

    public function images()
    {
        return $this->belongsToMany('App\Image', 'product_images', 'product_id', 'img_id');
    }
}
