@php
    $plugin =
        function_exists('filament') && filament()->isServing()
            ? \Koassi\FilamentHighcharts\FilamentHighchartsPlugin::get()
            : null;
    $heading = $this->getHeading();
    $subheading = $this->getSubheading();
    $filters = $this->getFilters();
    $isCollapsible = $this->isCollapsible();
    $width = $this->getFilterFormWidth();
    $pollingInterval = $this->getPollingInterval();
    $chartId = $this->getChartId();
    $chartOptions = $this->readyToLoad ? $this->getCachedOptions() : null;
    $loadingIndicator = $this->getLoadingIndicator();
    $contentHeight = $this->getContentHeight();
    $deferLoading = $this->getDeferLoading();
    $footer = $this->getFooter();
    $readyToLoad = $this->readyToLoad;
    $extraJsOptions = $this->extraJsOptions();
@endphp
<x-filament-widgets::widget class="fi-wi-chart filament-widgets-chart-widget filament-highcharts-widget">
    <x-filament::section class="filament-highcharts-section" :description="$subheading" :heading="$heading" :collapsible="$isCollapsible">
        <div x-data="{ dropdownOpen: false }" @highcharts-dropdown.window="dropdownOpen = $event.detail.open">
            @if ($filters || method_exists($this, 'getFiltersSchema'))
                <x-slot name="afterHeader">
                    @if ($filters)
                        <x-filament::input.wrapper inline-prefix wire:target="filter" class="fi-wi-chart-filter">
                            <x-filament::input.select inline-prefix wire:model.live="filter">
                                @foreach ($filters as $value => $label)
                                    <option value="{{ $value }}">
                                        {{ $label }}
                                    </option>
                                @endforeach
                            </x-filament::input.select>
                        </x-filament::input.wrapper>
                    @endif

                    @if (method_exists($this, 'getFiltersSchema'))
                        <x-filament::dropdown placement="bottom-end" shift :width="$width" class="fi-wi-chart-filter">
                            <x-slot name="trigger">
                                {{ $this->getFiltersTriggerAction() }}
                            </x-slot>

                            <div class="fi-wi-chart-filter-content">
                                {{ $this->getFiltersSchema() }}
                            </div>
                        </x-filament::dropdown>
                    @endif
                </x-slot>
            @endif

            <x-filament-highcharts::chart :$chartId :$chartOptions :$contentHeight :$pollingInterval :$loadingIndicator
                :$deferLoading :$readyToLoad :$extraJsOptions />

            @if ($footer)
                <div class="relative">
                    {!! $footer !!}
                </div>
            @endif
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
