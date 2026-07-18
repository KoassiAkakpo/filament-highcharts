<?php

namespace Koassi\FilamentHighcharts\Tests\Fixtures\Widgets;

use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class LineChartWidget extends HighchartsWidget
{
    protected static ?string $chartId = 'lineChartWidget';

    protected static ?string $heading = 'Line chart';

    public ?string $filter = 'year';

    protected function getFilters(): ?array
    {
        return [
            'week' => 'Last week',
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
            default => [
                ['Q1', 'Q2', 'Q3', 'Q4'],
                [49.9, 71.5, 106.4, 129.2],
            ],
        };

        return [
            'chart' => ['type' => 'line', 'styledMode' => true],
            'xAxis' => ['categories' => $categories],
            'series' => [
                ['name' => 'Revenue', 'data' => $data],
            ],
        ];
    }
}
