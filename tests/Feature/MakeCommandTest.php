<?php

use Illuminate\Support\Facades\File;

dataset('chart types', fn (): array => (require __DIR__.'/../../config/filament-highcharts.php')['chart_options']);

beforeEach(fn () => File::deleteDirectory(app_path('Livewire')));

afterEach(function () {
    File::deleteDirectory(app_path('Livewire'));
    File::deleteDirectory(base_path('stubs/filament-highcharts'));
});

function generateWidget(string $class, string $chartType): void
{
    test()->artisan('make:filament-highcharts', ['name' => $class])
        ->expectsQuestion('What type of chart do you want to create?', $chartType)
        ->expectsQuestion('What is the resource you would like to create this in?', '')
        ->expectsQuestion('Where would you like to create this?', config('livewire.class_namespace'))
        ->expectsConfirmation('Would you like to show some love by starring the repo?', 'no')
        ->assertSuccessful();
}

it('generates a widget class for every chart type', function (string $chartType) {
    $class = "Test{$chartType}Widget";

    generateWidget($class, $chartType);

    $path = app_path("Livewire/{$class}.php");

    expect(File::exists($path))->toBeTrue();

    $contents = File::get($path);

    expect($contents)
        ->toContain("class {$class} extends HighchartsWidget")
        ->toContain('namespace App\Livewire;')
        ->not->toContain('$NAMESPACE$')
        ->not->toContain('$CLASS_NAME$')
        ->not->toContain('$CHART_ID$');
})->with('chart types');

it('prefers published stubs over the package defaults', function () {
    File::ensureDirectoryExists(base_path('stubs/filament-highcharts'));
    File::put(
        base_path('stubs/filament-highcharts/Line.stub'),
        '<?php // published stub for $CLASS_NAME$',
    );

    generateWidget('PublishedStubWidget', 'Line');

    expect(File::get(app_path('Livewire/PublishedStubWidget.php')))
        ->toContain('published stub for PublishedStubWidget');
});
