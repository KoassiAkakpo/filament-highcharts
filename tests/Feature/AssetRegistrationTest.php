<?php

use Filament\Support\Facades\FilamentAsset;

it('registers the highcharts scripts pinned to the configured version', function () {
    $version = config('filament-highcharts.highcharts_version');

    expect($version)->not->toBeNull()
        ->and(FilamentAsset::getScriptSrc('highcharts', 'koassi/filament-highcharts'))
        ->toContain("code.highcharts.com/{$version}/highcharts.js")
        ->and(FilamentAsset::getScriptSrc('highcharts-accessibility', 'koassi/filament-highcharts'))
        ->toContain("code.highcharts.com/{$version}/modules/accessibility.js");
});

it('registers the alpine component and css assets', function () {
    expect(FilamentAsset::getAlpineComponentSrc('filament-highcharts', 'koassi/filament-highcharts'))
        ->toContain('filament-highcharts');
});
