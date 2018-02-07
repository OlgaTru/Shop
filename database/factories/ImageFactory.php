<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
            'img_url' => $faker->imageUrl(500, 300, 'food'),
            'size' => $faker->numberBetween($min = 1000, $max = 9000),
            'file_type' => $faker->randomElement($array = array ('jpg','png','gif')),
            'resolution' => '500x300'
    ];
});

