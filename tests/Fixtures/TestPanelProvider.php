<?php

namespace Koassi\FilamentHighcharts\Tests\Fixtures;

use Filament\Panel;
use Filament\PanelProvider;
use Koassi\FilamentHighcharts\FilamentHighchartsPlugin;

class TestPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('test')
            ->path('test')
            ->plugin(FilamentHighchartsPlugin::make());
    }
}
