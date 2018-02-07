<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function products()
    {
        return $this->belongsToMany('App\Product', 'product_images', 'img_id', 'product_id');
    }
}
