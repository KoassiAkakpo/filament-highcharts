@props([
'chartId',
'chartOptions',
'contentHeight',
'pollingInterval',
'loadingIndicator',
'deferLoading',
'readyToLoad',
'extraJsOptions',
])

<div
    {!! $deferLoading ? ' wire:init="loadWidget" ' : '' !!} class="flex items-center justify-center filament-highcharts-chart">
    @if ($readyToLoad)
    <div x-ignore x-load
        x-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-highcharts', 'koassi/filament-highcharts') }}"
        x-data="highcharts({
                chartOptions: @js($chartOptions),
                chartId: '#{{ $chartId }}',
                extraJsOptions: {{ $extraJsOptions ?? '{}' }},
            })">
    </div>
    <div wire:ignore class="w-full filament-highcharts-chart-container">
        <div class="filament-highcharts-chart-object" x-ref="{{ $chartId }}" id="{{ $chartId }}"
            style="position: relative; overflow:hidden;{{ 'height: '.$contentHeight.'px;' }}">
        </div>
        <div {!! $pollingInterval ? 'wire:poll.' . $pollingInterval . '="updateOptions"' : '' !!} x-data="{}"
            x-init="$watch('dropdownOpen', value => $wire.dropdownOpen = value)">
        </div>
    </div>
    @else
    <div class="filament-highcharts-chart-loading-indicator m-auto">
        @if ($loadingIndicator)
        {!! $loadingIndicator !!}
        @else
        <x-filament::loading-indicator class="h-7 w-7 text-gray-500 dark:text-gray-400" wire:loading.delay />
        @endif
    </div>
    @endif
</div>
