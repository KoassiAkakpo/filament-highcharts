<?php

namespace Koassi\FilamentHighcharts\Tests\Fixtures\Widgets;

use Filament\Support\RawJs;
use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class DeferredPieChartWidget extends HighchartsWidget
{
    protected static ?string $chartId = 'deferredPieChartWidget';

    protected static ?string $heading = 'Pie chart';

    protected static bool $deferLoading = true;

    /** Counts getOptions() calls so tests can assert deferral. */
    public static int $optionsComputedCount = 0;

    protected function getOptions(): array
    {
        static::$optionsComputedCount++;

        return [
            'chart' => ['type' => 'pie', 'styledMode' => true],
            'series' => [
                [
                    'name' => 'Share',
                    'data' => [
                        ['name' => 'Chrome', 'y' => 61.04],
                        ['name' => 'Safari', 'y' => 20.03],
                    ],
                ],
            ],
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
