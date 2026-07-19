# Examples

Ready-to-use widgets showcasing the plugin's features — these are the widgets behind the screenshots in the main README. Copy one into `app/Filament/Widgets/` of your app (or any widget directory registered in your panel) and adjust the namespace if needed.

| Widget | Demonstrates |
| --- | --- |
| [DemoAreaChart](DemoAreaChart.php) | Basic widget as scaffolded by `php artisan make:filament-highcharts` |
| [DemoLineChart](DemoLineChart.php) | Simple select filter (`getFilters()`) + live polling (`$pollingInterval`) |
| [DemoColumnChart](DemoColumnChart.php) | Schema-based filter form (Filament's `HasFiltersSchema` trait) |
| [DemoPieChart](DemoPieChart.php) | Deferred loading (`$deferLoading`) + raw JS options (`extraJsOptions()`) |

All examples use `'styledMode' => true` so charts follow the panel's light/dark theme automatically.
