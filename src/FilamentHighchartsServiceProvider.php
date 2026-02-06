<?php

namespace Koassi\FilamentHighcharts;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Facades\FilamentIcon;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Blade;
use Koassi\FilamentHighcharts\Commands\FilamentHighchartsCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentHighchartsServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-highcharts';

    public static string $viewNamespace = 'filament-highcharts';

    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package->name(static::$name)
            ->hasCommands($this->getCommands())
            ->hasViews()
            ->hasTranslations()
            ->hasConfigFile();
    }

    public function packageRegistered(): void {}

    public function packageBooted(): void
    {
        Blade::componentNamespace('Koassi\\FilamentHighcharts\\Components', 'filament-highcharts');
        // Asset Registration
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName()
        );

        FilamentAsset::registerScriptData(
            $this->getScriptData(),
            $this->getAssetPackageName()
        );

        // Icon Registration
        FilamentIcon::register($this->getIcons());

        // Handle Stubs
        if (app()->runningInConsole()) {
            foreach (app(Filesystem::class)->files(__DIR__.'/../stubs/') as $file) {
                $this->publishes([
                    $file->getRealPath() => base_path("stubs/filament-highcharts/{$file->getFilename()}"),
                ], 'filament-highcharts-stubs');
            }
        }
    }

    protected function getAssetPackageName(): ?string
    {
        return 'koassi/filament-highcharts';
    }

    /**
     * @return array<Asset>
     */
    protected function getAssets(): array
    {
        return [
            Js::make('highcharts', 'https://code.highcharts.com/highcharts.js'),
            Js::make('highcharts-more', 'https://code.highcharts.com/highcharts-more.js'),
            Js::make('highcharts-exporting', 'https://code.highcharts.com/modules/exporting.js'),
            Js::make('highcharts-adaptive', 'https://code.highcharts.com/themes/adaptive.js'),
            Js::make('highcharts-accessibility', 'https://code.highcharts.com/modules/accessibility.js'),
            AlpineComponent::make('filament-highcharts', __DIR__.'/../resources/dist/filament-highcharts.js'),
            Css::make('filament-highcharts', __DIR__.'/../resources/dist/filament-highcharts.css'),
        ];
    }

    /**
     * @return array<class-string>
     */
    protected function getCommands(): array
    {
        return [
            FilamentHighchartsCommand::class,
        ];
    }

    /**
     * @return array<string>
     */
    protected function getIcons(): array
    {
        return [];
    }

    /**
     * @return array<string>
     */
    protected function getRoutes(): array
    {
        return [];
    }

    /**
     * @return array<string, mixed>
     */
    protected function getScriptData(): array
    {
        return [];
    }
}
