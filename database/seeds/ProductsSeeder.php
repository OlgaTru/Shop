<?php

use App\Image;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Product::class, 25)->create()
        ->each(function ($product){
            $images = Image::inRandomOrder()->limit(5)->get();
            $product->images()->attach($images);
        });
    }
}
