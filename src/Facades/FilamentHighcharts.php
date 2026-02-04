<?php

namespace Koassi\FilamentHighcharts\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Koassi\FilamentHighcharts\FilamentHighcharts
 */
class FilamentHighcharts extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \Koassi\FilamentHighcharts\FilamentHighcharts::class;
    }
}
