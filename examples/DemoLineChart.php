<?php

namespace App\Filament\Widgets;

use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class DemoLineChart extends HighchartsWidget
{
    protected static ?string $chartId = 'demoLineChart';

    protected static ?string $heading = 'Revenue — simple filter + polling';

    protected ?string $pollingInterval = '10s';

    public ?string $filter = 'year';

    protected function getFilters(): ?array
    {
        return [
            'week' => 'Last week',
            'month' => 'Last month',
            'year' => 'This year',
        ];
    }

    protected function getOptions(): array
    {
        [$categories, $data] = match ($this->filter) {
            'week' => [
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                [12, 19, 3, 5, 2, 3, 9],
            ],
            'month' => [
                ['W1', 'W2', 'W3', 'W4'],
                [45, 62, 38, 71],
            ],
            default => [
                ['Q1', 'Q2', 'Q3', 'Q4'],
                [49.9, 71.5, 106.4, 129.2],
            ],
        };

        return [
            'chart' => [
                'type' => 'line',
                'styledMode' => true,
            ],
            'title' => ['text' => null],
            'xAxis' => ['categories' => $categories],
            'yAxis' => ['title' => ['text' => 'Revenue (k€)']],
            'series' => [
                ['name' => 'Revenue', 'data' => $data],
            ],
            'credits' => ['enabled' => false],
        ];
    }
}
