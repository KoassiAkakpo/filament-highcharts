import mergeWith from "lodash.mergewith";

// Arrays (series data, categories...) must be replaced, not merged by
// index: merging [1, 2, 3] with [9] would otherwise produce [9, 2, 3].
const replaceArrays = (objValue, srcValue) => {
    if (Array.isArray(srcValue)) {
        return srcValue;
    }
};

export default function highcharts({ chartOptions, chartId, extraJsOptions }) {
    let chart = null;
    return {
        chartOptions,
        chartId,
        extraJsOptions,
        init() {
            this.$wire.$on("updateOptions", ({ options }) => {
                this.chartOptions = mergeWith(
                    {},
                    this.chartOptions,
                    options,
                    extraJsOptions,
                    replaceArrays,
                );
                this.updateChart(this.chartOptions);
                this.highchartsDarkMode();
            });

            Alpine.effect(() => {
                this.$nextTick(() => {
                    if (chart === null) {
                        this.initChart();
                    } else {
                        this.updateChart(this.chartOptions);
                    }
                });
            });
        },

        initChart: function () {
            this.chartOptions = mergeWith(
                {},
                this.chartOptions,
                extraJsOptions,
                replaceArrays,
            );
            chart = Highcharts.chart(
                document.querySelector(this.chartId),
                this.chartOptions,
            );
            this.highchartsDarkMode();
        },

        updateChart(options) {
            chart.update(options, true, true);
        },

        highchartsDarkMode() {
            const CHART_SELECTOR = ".filament-highcharts-chart-container";
            const DARK_CLASS = "highcharts-dark";
            const LIGHT_CLASS = "highcharts-light";
            const MEDIA_QUERY = "(prefers-color-scheme: dark)";

            const mediaQuery = window.matchMedia
                ? window.matchMedia(MEDIA_QUERY)
                : null;

            const getTheme = () => {
                try {
                    return localStorage.getItem("theme") || "system";
                } catch {
                    return "system";
                }
            };

            const isDarkTheme = (theme) => {
                if (theme === "dark") return true;
                if (theme === "light") return false;
                return mediaQuery ? mediaQuery.matches : false;
            };

            const charts = document.querySelectorAll(CHART_SELECTOR);
            if (!charts.length) return;

            const dark = isDarkTheme(getTheme());

            charts.forEach((el) => {
                el.classList.toggle(DARK_CLASS, dark);
                el.classList.toggle(LIGHT_CLASS, !dark);
            });
        },
    };
}
