<?php

namespace Koassi\FilamentHighcharts\Tests\Fixtures\Widgets;

use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class BareChartWidget extends HighchartsWidget
{
    protected function getOptions(): array
    {
        return [
            'chart' => ['type' => 'line', 'styledMode' => true],
            'series' => [['data' => [1, 2, 3]]],
        ];
    }
}
