<?php

use Faker\Generator as Faker;

$factory->define(App\Category::class, function (Faker $faker) {
    return [
            'name' => $faker->name,
            'description' => $faker->paragraph(10),
            'img' => $faker->imageUrl(500, 300, 'food'),
            'slug' => $faker->slug,
            'visibility' => $faker->boolean,
            'hierarchy' => $faker->randomDigit,
    ];
});
