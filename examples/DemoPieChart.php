<?php

namespace App\Filament\Widgets;

use Filament\Support\RawJs;
use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class DemoPieChart extends HighchartsWidget
{
    protected static ?string $chartId = 'demoPieChart';

    protected static ?string $heading = 'Browser share — defer loading + extraJsOptions';

    protected static bool $deferLoading = true;

    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'pie',
                'styledMode' => true,
            ],
            'title' => ['text' => null],
            'series' => [
                [
                    'name' => 'Share',
                    'data' => [
                        ['name' => 'Chrome', 'y' => 61.04],
                        ['name' => 'Safari', 'y' => 20.03],
                        ['name' => 'Edge', 'y' => 6.28],
                        ['name' => 'Firefox', 'y' => 4.77],
                        ['name' => 'Other', 'y' => 7.88],
                    ],
                ],
            ],
            'credits' => ['enabled' => false],
        ];
    }

    protected function extraJsOptions(): ?RawJs
    {
        return RawJs::make(<<<'JS'
            {
                tooltip: {
                    pointFormatter: function () {
                        return '<b>' + this.y.toFixed(1) + ' %</b>';
                    },
                },
            }
        JS);
    }
}
