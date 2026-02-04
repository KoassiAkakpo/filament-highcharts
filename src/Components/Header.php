<?php

namespace Koassi\FilamentHighcharts\Components;

use Illuminate\View\Component;

class Header extends Component
{
    public function __construct(
        public $heading,
        public $subheading,
        public $filters,
        public $indicatorsCount,
        public $width,
        public $filterFormAccessible
    ) {}

    /**
     * Renders the view for the header component.
     */
    public function render(): \Illuminate\Contracts\View\View
    {
        return view('filament-highcharts::widgets.components.header');
    }
}
