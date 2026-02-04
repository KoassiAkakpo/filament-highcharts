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
    @script
    <script>
        (() => {
            const CHART_SELECTOR = '.filament-highcharts-chart-container'
            const DARK_CLASS = 'highcharts-dark'
            const LIGHT_CLASS = 'highcharts-light'

            const mediaQuery = window.matchMedia ?
                window.matchMedia('(prefers-color-scheme: dark)') :
                null

            const getCharts = () => document.querySelectorAll(CHART_SELECTOR)

            const isDarkTheme = (theme) => {
                if (theme === 'dark') return true
                if (theme === 'light') return false

                // thème système ou valeur inconnue
                return mediaQuery ? mediaQuery.matches : false
            }

            const applyTheme = (theme) => {
                const charts = getCharts()
                if (!charts.length) return

                const dark = isDarkTheme(theme)

                charts.forEach(el => {
                    el.classList.toggle(DARK_CLASS, dark)
                    el.classList.toggle(LIGHT_CLASS, !dark)
                })
            }

            // Écoute du changement de thème manuel
            document.addEventListener('theme-changed', (event) => {
                applyTheme(event?.detail)
            })

            // Écoute du changement du thème système (OS)
            if (mediaQuery) {
                mediaQuery.addEventListener('change', () => {
                    applyTheme('system')
                })
            }
        })()
    </script>
    @endscript
</div>
