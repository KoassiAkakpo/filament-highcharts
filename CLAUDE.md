# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`koassi/filament-highcharts` — a Filament v5 (Laravel) plugin package that provides [Highcharts](https://api.highcharts.com/highcharts/) chart widgets. Strongly inspired by Leandro Ferreira's Apex Charts plugin. Requires PHP ^8.3 and `filament/filament` ^5.7. It is a library (installed into host Laravel apps via Composer), not a runnable app.

## Commands

- `composer install` / `npm install` — install dependencies.
- `npm run build` — build frontend assets with Vite (`resources/js/index.js` + `resources/css/index.css` → `resources/dist/`). The `resources/dist/` output is **committed**; rebuild and commit it after any JS/CSS change.
- `npm run dev` — Vite watch mode.
- `vendor/bin/pint` — format PHP. A GitHub Action runs Pint on every push touching `.php` files and auto-commits a "Fix styling" commit, so run it locally to avoid noise commits.
- `vendor/bin/pest` — run tests (Pest + Orchestra Testbench are installed, but `tests/` is currently empty).

## Architecture

### PHP side

- `src/FilamentHighchartsServiceProvider.php` — Spatie package-tools service provider. Registers config/views/translations, the artisan command, publishes stubs (tag `filament-highcharts-stubs`), and registers assets with `FilamentAsset` under package name `koassi/filament-highcharts`: the Highcharts library itself is loaded from the code.highcharts.com CDN (core, more, exporting, adaptive theme, accessibility), pinned to the version set in the `highcharts_version` config key, plus the built Alpine component and CSS from `resources/dist/`. It also registers the Blade component namespace `filament-highcharts` → `src/Components`.
- `src/Widgets/HighchartsWidget.php` — the base widget users extend. Subclasses override `getOptions(): array` to return the Highcharts configuration array, and optionally `extraJsOptions(): ?RawJs` for options that must be raw JavaScript (callbacks, formatters). Behavior comes from traits in `src/Concerns/`: `CanFilter` (simple select filter via `getFilters()` and schema-based filter forms), `CanDeferLoading`, `HasContentHeight` (default 300px), `HasHeader` (heading/subheading/collapsible), `HasFooter`, `HasLoadingIndicator`; plus Filament's `CanPoll`.
- `src/FilamentHighchartsPlugin.php` — the Filament panel plugin (`FilamentHighchartsPlugin::make()`), currently just registers the plugin id.

### Frontend / data flow

- `resources/views/widgets/highcharts-widget.blade.php` (+ `components/chart.blade.php`) renders the widget; chart options go from PHP through `@js()` into the Alpine component defined in `resources/js/index.js`.
- The Alpine `highcharts()` component calls `Highcharts.chart()` on init and listens for the Livewire `updateOptions` event (dispatched by filter changes, polling, or `updateOptions()` on the widget), deep-merging new options with `lodash.mergewith` (arrays are replaced, not merged by index, so shrinking datasets don't keep stale points) before `chart.update()`. `extraJsOptions` is merged client-side on top of the PHP options.
- Dark mode: charts should set `'styledMode' => true`; JS toggles `highcharts-dark`/`highcharts-light` classes on `.filament-highcharts-chart-container` based on `localStorage.theme` / `prefers-color-scheme`, with listeners for the Filament `theme-changed` event. This logic exists in both `resources/js/index.js` and an inline `@script` block in `components/chart.blade.php`.

### Widget generator command

`php artisan make:filament-highcharts {name?}` (`src/commands/FilamentHighchartsCommand.php`) interactively scaffolds a widget into a panel, a resource's `Widgets/` directory, or the Livewire namespace. The chart-type choices come from `config/filament-highcharts.php` (`chart_options`), and each choice maps 1:1 to a stub file: `stubs/<ChartType>.stub` with `$NAMESPACE$`, `$CLASS_NAME$`, `$CHART_ID$` placeholders. **To add a new chart type, add the entry to `chart_options` in the config AND create the matching stub file** — the command resolves the stub path purely from the option name.
