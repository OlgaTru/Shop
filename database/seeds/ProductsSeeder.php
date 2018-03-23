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
        factory(\App\Product::class, 10)->create()
        ->each(function ($product){
            $images = Image::inRandomOrder()->limit(4)->get();

            //populate 'is_mane' - additional pivot table column
            $product->images()->attach([$images[0]->id => ['is_main' => true]]);

            $product->images()->attach($images->slice(1));
        });
    }
}
