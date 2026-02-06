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

    public ?array $options = null;

    public function mount(): void
    {
        if (method_exists($this, 'getFiltersSchema')) {
            $this->getFiltersSchema()->fill();
        }

        $this->options = $this->getOptions();

        if (! $this->getDeferLoading()) {
            $this->readyToLoad = true;
        }
    }

    public function on(): void {}

    public function render(): View
    {
        return view($this->view, []);
    }

    protected function getChartId(): ?string
    {
        return static::$chartId ?? 'highcharts_'.Str::random(10);
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

    public function updateOptions(): void
    {
        if ($this->options !== $this->getOptions()) {

            $this->options = $this->getOptions();

            if (! $this->dropdownOpen) {
                $this
                    ->dispatch('updateOptions', options: $this->options)
                    ->self();
            }
        }
    }

    protected function extraJsOptions(): ?RawJs
    {
        return null;
    }
}
