<?php

use Koassi\FilamentHighcharts\Tests\Fixtures\Widgets\BareChartWidget;
use Koassi\FilamentHighcharts\Tests\Fixtures\Widgets\ColumnChartWidget;
use Koassi\FilamentHighcharts\Tests\Fixtures\Widgets\DeferredPieChartWidget;
use Koassi\FilamentHighcharts\Tests\Fixtures\Widgets\LineChartWidget;
use Livewire\Livewire;

beforeEach(function () {
    DeferredPieChartWidget::$optionsComputedCount = 0;
});

it('renders the chart container with the static chart id', function () {
    Livewire::test(LineChartWidget::class)
        ->assertOk()
        ->assertSee('lineChartWidget')
        ->assertSee('filament-highcharts-chart-container', escape: false);
});

it('generates a stable chart id when none is set', function () {
    $component = Livewire::test(BareChartWidget::class);

    $chartId = $component->get('generatedChartId');

    expect($chartId)->toStartWith('highcharts_');

    // A re-render must keep the same id (it used to change every render).
    $component->call('$refresh');

    expect($component->get('generatedChartId'))->toBe($chartId);
});

it('dispatches updated options when the simple filter changes', function () {
    Livewire::test(LineChartWidget::class)
        ->set('filter', 'week')
        ->assertDispatched('updateOptions', function (string $event, array $params) {
            return count($params['options']['series'][0]['data']) === 7
                && $params['options']['xAxis']['categories'][0] === 'Mon';
        });
});

it('does not re-dispatch unchanged options', function () {
    Livewire::test(LineChartWidget::class)
        ->call('updateOptions')
        ->assertNotDispatched('updateOptions');
});

it('updates options through schema filters', function () {
    Livewire::test(ColumnChartWidget::class)
        ->set('filters.years', 1)
        ->assertDispatched('updateOptions', function (string $event, array $params) {
            return count($params['options']['series']) === 1
                && $params['options']['series'][0]['name'] === '2026';
        });
});

it('defers options computation until the widget is loaded', function () {
    $component = Livewire::test(DeferredPieChartWidget::class);

    expect($component->get('readyToLoad'))->toBeFalse()
        ->and(DeferredPieChartWidget::$optionsComputedCount)->toBe(0);

    $component->call('loadWidget');

    expect($component->get('readyToLoad'))->toBeTrue()
        ->and(DeferredPieChartWidget::$optionsComputedCount)->toBe(1);
});

it('renders extra js options into the chart component', function () {
    Livewire::test(DeferredPieChartWidget::class)
        ->call('loadWidget')
        ->assertSee('pointFormatter', escape: false);
});
