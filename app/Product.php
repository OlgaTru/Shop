<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'price', 'id'];

    public function categories()
    {
        return $this->belongsTo('App\Category');
    }

    public function images()
    {
        return $this->belongsToMany('App\Image', 'product_images',
                'product_id', 'img_id')->withPivot('is_main');
    }



    public function getImgUrlAttribute()
    {
        return $this->images()->getResults()->pluck('img_url')->toArray();
    }

    public function getMainImgUrlAttribute()
    {
       /* dd($this->images);*/

        foreach ($this->images as $image){
            if ($image->pivot->is_main){
                return $image->img_url;
            }
        };
        return null;
    }

    protected $appends = ['img_url', 'main_img_url'];
}
