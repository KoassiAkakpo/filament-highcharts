<?php

namespace App\Filament\Widgets;

use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class DemoAreaChart extends HighchartsWidget
{
    /**
     * Chart Id
     */
    protected static ?string $chartId = 'demoAreaChart';

    /**
     * Widget Title
     */
    protected static ?string $heading = 'DemoAreaChart';

    /**
     * Chart options (series, labels, types, size, animations...)
     * https://api.highcharts.com/highcharts/
     */
    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'area',
                'styledMode' => true,
            ],
            'title' => [
                'text' => 'Area Chart',
            ],
            'xAxis' => [
                'categories' => ['Q1', 'Q2', 'Q3', 'Q4'],
                'crosshair' => true,
            ],
            'yAxis' => [
                'title' => 'Quantity',
            ],
            'series' => [
                [
                    'name' => '2023',
                    'data' => [49.9, 71.5, 106.4, 129.2],
                ],
                [
                    'name' => '2024',
                    'data' => [83.6, 78.8, 98.5, 93.4],
                ],
                [
                    'name' => '2025',
                    'data' => [48.9, 38.8, 39.3, 41.4],
                ],
            ],
            'plotOptions' => [
                'area' => [
                    'dataLabels' => [
                        'enabled' => true,
                    ],
                ],
            ],
            'credits' => [
                'enabled' => false,
            ],
            'legend' => [
                'enabled' => true,
            ],
            'tooltip' => [
                'shared' => true,
            ],
        ];
    }
}
