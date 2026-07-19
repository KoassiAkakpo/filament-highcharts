<?php

namespace App\Filament\Widgets;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Widgets\ChartWidget\Concerns\HasFiltersSchema;
use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class DemoColumnChart extends HighchartsWidget
{
    use HasFiltersSchema;

    protected static ?string $chartId = 'demoColumnChart';

    protected static ?string $heading = 'Orders — schema filters';

    public function filtersSchema(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('title')
                ->default('Orders per quarter'),

            Select::make('years')
                ->options([
                    1 => 'One year',
                    2 => 'Two years',
                    3 => 'Three years',
                ])
                ->default(3),
        ]);
    }

    public function updatedInteractsWithSchemas(string $statePath): void
    {
        $this->updateOptions();
    }

    protected function getOptions(): array
    {
        $allSeries = [
            ['name' => '2024', 'data' => [83.6, 78.8, 98.5, 93.4]],
            ['name' => '2025', 'data' => [48.9, 38.8, 39.3, 41.4]],
            ['name' => '2026', 'data' => [42.4, 33.2, 34.5, 39.7]],
        ];

        $years = (int) ($this->filters['years'] ?? 3);

        return [
            'chart' => [
                'type' => 'column',
                'styledMode' => true,
            ],
            'title' => ['text' => $this->filters['title'] ?? null],
            'xAxis' => ['categories' => ['Q1', 'Q2', 'Q3', 'Q4']],
            'yAxis' => ['title' => ['text' => 'Orders']],
            'series' => array_slice($allSeries, -$years),
            'credits' => ['enabled' => false],
        ];
    }
}
