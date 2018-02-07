<?php

use App\Category;
use App\Image;
use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {

    $category = Category::inRandomOrder()->first();


    return [
            'name' => $faker->name,
            'category_id' => $category->id,
            'description' => $faker->paragraph(3),
            'price' => $faker->randomNumber(3),
            'visibility' => $faker->boolean,
            'stock_status' => $faker->randomDigit,
    ];
});
