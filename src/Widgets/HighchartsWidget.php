<?php

namespace Koassi\FilamentHighcharts\Widgets;

use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Support\RawJs;
use Filament\Widgets\Concerns\CanPoll;
use Filament\Widgets\Widget;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Str;
use Koassi\FilamentHighcharts\Concerns\CanDeferLoading;
use Koassi\FilamentHighcharts\Concerns\CanFilter;
use Koassi\FilamentHighcharts\Concerns\HasContentHeight;
use Koassi\FilamentHighcharts\Concerns\HasFooter;
use Koassi\FilamentHighcharts\Concerns\HasHeader;
use Koassi\FilamentHighcharts\Concerns\HasLoadingIndicator;

class HighchartsWidget extends Widget implements HasSchemas
{
    use CanDeferLoading;
    use CanFilter;
    use CanPoll;
    use HasContentHeight;
    use HasFooter;
    use HasHeader;
    use HasLoadingIndicator;
    use InteractsWithSchemas;

    protected static ?string $chartId = null;

    // @phpstan-ignore-next-line
    protected string $view = 'filament-highcharts::widgets.highcharts-widget';

    public ?string $generatedChartId = null;

    public ?string $optionsHash = null;

    protected ?array $cachedOptions = null;

    public function mount(): void
    {
        if (method_exists($this, 'getFiltersSchema')) {
            $this->getFiltersSchema()->fill();
        }

        $this->generatedChartId ??= 'highcharts_'.Str::random(10);

        if (! $this->getDeferLoading()) {
            $this->readyToLoad = true;
        }

        if ($this->readyToLoad) {
            $this->syncOptionsHash();
        }
    }

    public function render(): View
    {
        return view($this->view, []);
    }

    protected function getChartId(): ?string
    {
        return static::$chartId ?? $this->generatedChartId;
    }

    /**
     * Returns an array of chart options for displaying a highcharts.
     *
     * @return array Array of chart options
     */
    protected function getOptions(): array
    {
        return [];
    }

    /**
     * Returns the chart options, computing them at most once per request.
     */
    protected function getCachedOptions(): array
    {
        return $this->cachedOptions ??= $this->getOptions();
    }

    protected function syncOptionsHash(): void
    {
        $this->optionsHash = md5(json_encode($this->getCachedOptions()));
    }

    public function updateOptions(): void
    {
        $options = $this->getCachedOptions();
        $hash = md5(json_encode($options));

        if ($this->optionsHash === $hash) {
            return;
        }

        $this->optionsHash = $hash;

        if (! $this->dropdownOpen) {
            $this->dispatch('updateOptions', options: $options)
                ->self();
        }
    }

    protected function extraJsOptions(): ?RawJs
    {
        return null;
    }
}
