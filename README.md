# Highcharts integration for Filament

[![Latest Version on Packagist](https://img.shields.io/packagist/v/koassi/filament-highcharts.svg?style=flat-square)](https://packagist.org/packages/koassi/filament-highcharts)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/KoassiAkakpo/filament-highcharts/pint.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/KoassiAkakpo/filament-highcharts/actions?query=workflow%3A%22PHP+Linting+%28Pint%29%22+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/koassi/filament-highcharts.svg?style=flat-square)](https://packagist.org/packages/koassi/filament-highcharts)

Strongly inspired by [Leandro Ferreira's Apex Charts plugin](https://filamentphp.com/plugins/leandrocfe-apex-charts),
this plugin delivers [Highcharts](https://www.highcharts.com) integration for [Filament](https://filamentphp.com) panels.

## Requirements

- PHP 8.3+
- Filament 5.x

> **Note:** Highcharts is free for personal/non-commercial use. For commercial use, please review the [Highcharts license](https://shop.highcharts.com/).

## Installation

You can install the package via composer:

```bash
composer require koassi/filament-highcharts
```

Register the plugin for the Filament Panels you want to use it in:

```php
use Koassi\FilamentHighcharts\FilamentHighchartsPlugin;

public function panel(Panel $panel): Panel
{
    return $panel
        ->plugins([
            FilamentHighchartsPlugin::make(),
        ]);
}
```

## Usage

Start by creating a widget with the command:

```bash
php artisan make:filament-highcharts BlogPostsChart
```

The command will interactively ask for the chart type, and where to create the widget (panel, resource, or alongside your Livewire components).

Your widget extends `Koassi\FilamentHighcharts\Widgets\HighchartsWidget` and defines its chart through the `getOptions()` method, which returns a standard [Highcharts configuration](https://api.highcharts.com/highcharts/) array:

```php
use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class BlogPostsChart extends HighchartsWidget
{
    protected static ?string $chartId = 'blogPostsChart';

    protected static ?string $heading = 'Blog Posts';

    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'line',
                'styledMode' => true,
            ],
            'title' => [
                'text' => 'Blog Posts per Quarter',
            ],
            'xAxis' => [
                'categories' => ['Q1', 'Q2', 'Q3', 'Q4'],
            ],
            'series' => [
                [
                    'name' => '2025',
                    'data' => [49.9, 71.5, 106.4, 129.2],
                ],
            ],
        ];
    }
}
```

Don't forget to register the widget in your panel/resource/page, as with any Filament widget.

### Available chart samples

The generator ships with ready-to-use stubs for the following chart types. For more samples, please refer to the [Highcharts documentation](https://api.highcharts.com/highcharts/).

| Chart | Chart | Chart |
| ----- | ----- | ----- |
| [Line chart](https://www.highcharts.com/demo/highcharts/line-chart) | [Bar chart](https://www.highcharts.com/demo/highcharts/bar-chart) | [Pie chart](https://www.highcharts.com/demo/highcharts/pie-chart) |
| [Area chart](https://www.highcharts.com/demo/highcharts/area-chart) | [Arearange chart](https://www.highcharts.com/demo/highcharts/arearange-chart) | [Areaspline chart](https://www.highcharts.com/demo/highcharts/areaspline-chart) |
| [Areasplinerange chart](https://www.highcharts.com/demo/highcharts/areasplinerange-chart) | [Bellcurve chart](https://www.highcharts.com/demo/highcharts/bellcurve-chart) | [Boxplot chart](https://www.highcharts.com/demo/highcharts/box-plot) |
| [Bubble chart](https://www.highcharts.com/demo/highcharts/bubble) | [Bullet chart](https://www.highcharts.com/demo/highcharts/bullet-graph) | [Column chart](https://www.highcharts.com/demo/highcharts/column-chart) |
| [Columnpyramid chart](https://www.highcharts.com/demo/highcharts/column-pyramid) | [Columnrange chart](https://www.highcharts.com/demo/highcharts/columnrange-chart) | [Cylinder chart](https://www.highcharts.com/demo/highcharts/cylinder-chart) |
| [Dependencywheel chart](https://www.highcharts.com/demo/highcharts/dependencywheel-chart) | [Dumbbell chart](https://www.highcharts.com/demo/highcharts/dumbbell-chart) | [Errorbar chart](https://www.highcharts.com/demo/highcharts/errorbar-chart) |
| [Funnel chart](https://www.highcharts.com/demo/highcharts/funnel-chart) | [Funnel3d chart](https://www.highcharts.com/demo/highcharts/funnel3d-chart) | [Gauge chart](https://www.highcharts.com/demo/highcharts/gauge-chart) |
| [Heatmap chart](https://www.highcharts.com/demo/highcharts/heatmap-chart) | [Histogram chart](https://www.highcharts.com/demo/highcharts/histogram-chart) | [Item chart](https://www.highcharts.com/demo/highcharts/item-chart) |
| [Lollipop chart](https://www.highcharts.com/demo/highcharts/lollipop-chart) | [Networkgraph chart](https://www.highcharts.com/demo/highcharts/networkgraph-chart) | [Organization chart](https://www.highcharts.com/demo/highcharts/organization-chart) |
| [Packedbubble chart](https://www.highcharts.com/demo/highcharts/packedbubble-chart) | [Pareto chart](https://www.highcharts.com/demo/highcharts/pareto-chart) | [Pictorial chart](https://www.highcharts.com/demo/highcharts/pictorial-chart) |
| [Polygon chart](https://www.highcharts.com/demo/highcharts/polygon-chart) | [Pyramid chart](https://www.highcharts.com/demo/highcharts/pyramid-chart) | [Pyramid3d chart](https://www.highcharts.com/demo/highcharts/pyramid3d-chart) |
| [Sankey chart](https://www.highcharts.com/demo/highcharts/sankey-chart) | [Scatter chart](https://www.highcharts.com/demo/highcharts/scatter-chart) | [Scatter3d chart](https://www.highcharts.com/demo/highcharts/scatter3d-chart) |
| [Solidgauge chart](https://www.highcharts.com/demo/highcharts/solidgauge-chart) | [Spline chart](https://www.highcharts.com/demo/highcharts/spline-chart) | [Streamgraph chart](https://www.highcharts.com/demo/highcharts/streamgraph-chart) |
| [Sunburst chart](https://www.highcharts.com/demo/highcharts/sunburst-chart) | [Tilemap chart](https://www.highcharts.com/demo/highcharts/tilemap-chart) | [Timeline chart](https://www.highcharts.com/demo/highcharts/timeline-chart) |
| [Treegraph chart](https://www.highcharts.com/demo/highcharts/treegraph-chart) | [Treemap chart](https://www.highcharts.com/demo/highcharts/treemap-chart) | [Variablepie chart](https://www.highcharts.com/demo/highcharts/variablepie-chart) |
| [Variwide chart](https://www.highcharts.com/demo/highcharts/variwide-chart) | [Vector chart](https://www.highcharts.com/demo/highcharts/vector-chart) | [Venn chart](https://www.highcharts.com/demo/highcharts/venn-chart) |
| [Waterfall chart](https://www.highcharts.com/demo/highcharts/waterfall-chart) | [Windbarb chart](https://www.highcharts.com/demo/highcharts/windbarb-chart) | [Wordcloud chart](https://www.highcharts.com/demo/highcharts/wordcloud-chart) |
| [Xrange chart](https://www.highcharts.com/demo/highcharts/x-range-series) | [Arcdiagram chart](https://www.highcharts.com/demo/highcharts/arc-diagram) | |

The list of available chart types is defined in the `chart_options` key of the package config file.

## Setting a widget title

You may set a widget title (heading):

```php
protected static ?string $heading = 'Blog Posts Chart';
```

Optionally, you can use the `getHeading()` method.

## Setting a widget subheading

You may set a widget subheading:

```php
protected static ?string $subheading = 'This is a subheading';
```

Optionally, you can use the `getSubheading()` method.

## Setting a chart id

You may set a chart id:

```php
protected static ?string $chartId = 'blogPostsChart';
```

If none is provided, a random id is generated.

## Making a widget collapsible

You may set a widget to be collapsible:

```php
protected static bool $isCollapsible = true;
```

You can also use the `isCollapsible()` method:

```php
protected function isCollapsible(): bool
{
    return true;
}
```

## Setting a widget height

By default, the widget height is set to `300px`. You may set a custom height:

```php
protected static int $contentHeight = 400; //px
```

Optionally, you can use the `getContentHeight()` method:

```php
protected function getContentHeight(): ?int
{
    return 400;
}
```

## Setting a widget footer

You may set a widget footer:

```php
protected static ?string $footer = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
```

You can also use the `getFooter()` method:

Custom view:

```php
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

protected function getFooter(): null|string|Htmlable|View
{
    return view('custom-footer', ['text' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.']);
}
```

```html
<!--resources/views/custom-footer.blade.php-->
<div>
    <p class="text-danger-500">{{ $text }}</p>
</div>
```

Html string:

```php
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Support\HtmlString;

protected function getFooter(): null|string|Htmlable|View
{
    return new HtmlString('<p class="text-danger-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>');
}
```

## Hiding header content

You can hide header content by **NOT** providing these:

- `$heading` / `getHeading()`
- `$subheading` / `getSubheading()`

## Filtering chart data

You can set up chart filters to change the data shown on the chart. Commonly, this is used to change the time period that chart data is rendered for.

### Filter schema

You may use components from the [Schemas](https://filamentphp.com/docs/4.x/schemas/overview#available-components) package to create custom filter forms.
Use the `HasFiltersSchema` trait and implement the `filtersSchema()` method to define the filter form schema:

```php
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Widgets\ChartWidget\Concerns\HasFiltersSchema;
use Koassi\FilamentHighcharts\Widgets\HighchartsWidget;

class BlogPostsChart extends HighchartsWidget
{
    use HasFiltersSchema;

    public function filtersSchema(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('title')
                ->default('Blog Posts Chart'),

            DatePicker::make('date_start')
                ->default('2025-07-01'),

            DatePicker::make('date_end')
                ->default('2025-07-31'),
        ]);
    }

    /**
     * Use this method to update the chart options when the filter form is submitted.
     */
    public function updatedInteractsWithSchemas(string $statePath): void
    {
        $this->updateOptions();
    }
}
```

The data from the custom filter is available in the `$this->filters` array. You can use the active filter values within your `getOptions()` method:

```php
protected function getOptions(): array
{
    $title = $this->filters['title'];
    $dateStart = $this->filters['date_start'];
    $dateEnd = $this->filters['date_end'];

    return [
        //chart options
    ];
}
```

### Single select

To set a default filter value, set the `$filter` property:

```php
public ?string $filter = 'today';
```

Then, define the `getFilters()` method to return an array of values and labels for your filter:

```php
protected function getFilters(): ?array
{
    return [
        'today' => 'Today',
        'week' => 'Last week',
        'month' => 'Last month',
        'year' => 'This year',
    ];
}
```

You can use the active filter value within your `getOptions()` method:

```php
protected function getOptions(): array
{
    $activeFilter = $this->filter;

    return [
        //chart options
    ];
}
```

## Live updating (polling)

By default, chart widgets refresh their data every 5 seconds.

To customize this, you may override the `$pollingInterval` property on the class to a new interval:

```php
protected static ?string $pollingInterval = '10s';
```

Alternatively, you may disable polling altogether:

```php
protected static ?string $pollingInterval = null;
```

## Defer loading

This can be helpful when you have slow queries and you don't want to hold up the entire page load:

```php
protected static bool $deferLoading = true;

protected function getOptions(): array
{
    //showing a loading indicator immediately after the page load
    if (! $this->readyToLoad) {
        return [];
    }

    //slow query
    sleep(2);

    return [
        //chart options
    ];
}
```

## Loading indicator

You can change the loading indicator:

```php
protected static ?string $loadingIndicator = 'Loading...';
```

You can also use the `getLoadingIndicator()` method:

```php
use Illuminate\Contracts\View\View;

protected function getLoadingIndicator(): null|string|View
{
    return view('custom-loading-indicator');
}
```

```html
<!--resources/views/custom-loading-indicator.blade.php-->
<div>
    <p class="text-danger-500">Loading...</p>
</div>
```

## Dark mode

Dark mode is supported and enabled by default. It follows the Filament theme (light / dark / system) and reacts to theme changes in real time. For the best result, enable [styled mode](https://www.highcharts.com/docs/chart-design-and-style/style-by-css) in your chart options:

```php
'chart' => [
    'styledMode' => true,
],
```

## Extra options and Formatters

Chart options returned by `getOptions()` are converted to JSON, so they cannot contain JavaScript functions. Use the `extraJsOptions()` method to add raw JavaScript options (formatters, callbacks...) that are merged into the chart options on the client side:

```php
use Filament\Support\RawJs;

protected function extraJsOptions(): ?RawJs
{
    return RawJs::make(<<<'JS'
        {
            xAxis: {
                labels: {
                    formatter: function() {
                        const label = this.axis.defaultLabelFormatter.call(this);
                        // Use thousands separator for four-digit numbers too
                        if (/^[0-9]{4}$/.test(label)) {
                            return Highcharts.numberFormat(this.value, 0);
                        }
                        return label;
                    }
                }
            }
        }
    JS);
}
```

## Publishing config

Optionally, you can publish the config file (to customize the chart types offered by the generator command) using:

```bash
php artisan vendor:publish --tag="filament-highcharts-config"
```

## Publishing views

Optionally, you can publish the views using:

```bash
php artisan vendor:publish --tag="filament-highcharts-views"
```

## Publishing translations

Optionally, you can publish the translations using:

```bash
php artisan vendor:publish --tag="filament-highcharts-translations"
```

## Publishing stubs

Optionally, you can publish the widget stubs used by the `make:filament-highcharts` command using:

```bash
php artisan vendor:publish --tag="filament-highcharts-stubs"
```

## Testing

```bash
vendor/bin/pest
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](.github/SECURITY.md) on how to report security vulnerabilities.

## Credits

- [koassi](https://github.com/KoassiAkakpo)
- [All Contributors](https://github.com/KoassiAkakpo/filament-highcharts/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](LICENCE.md) for more information.
