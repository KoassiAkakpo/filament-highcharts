import mergeWith from "lodash.mergewith";

// Arrays (series data, categories...) must be replaced, not merged by
// index: merging [1, 2, 3] with [9] would otherwise produce [9, 2, 3].
const replaceArrays = (objValue, srcValue) => {
    if (Array.isArray(srcValue)) {
        return srcValue;
    }
};

// ---- Dark mode ----------------------------------------------------------
// Module scope: this file is loaded once per page (on demand, via x-load),
// so the listeners below are registered once, not once per widget.

const CHART_CONTAINER_SELECTOR = ".filament-highcharts-chart-container";
const DARK_CLASS = "highcharts-dark";
const LIGHT_CLASS = "highcharts-light";

const mediaQuery = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

const getStoredTheme = () => {
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

const applyTheme = (theme) => {
    const charts = document.querySelectorAll(CHART_CONTAINER_SELECTOR);
    if (!charts.length) return;

    const dark = isDarkTheme(theme ?? getStoredTheme());

    charts.forEach((el) => {
        el.classList.toggle(DARK_CLASS, dark);
        el.classList.toggle(LIGHT_CLASS, !dark);
    });
};

// Live switching: Filament dispatches `theme-changed` when the user picks a
// theme, and the media query fires when the OS theme changes — without these
// listeners, charts would only pick up the theme on a full page reload.
document.addEventListener("theme-changed", (event) =>
    applyTheme(event?.detail),
);

mediaQuery?.addEventListener("change", () => applyTheme("system"));

// ---- Alpine component ---------------------------------------------------

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
                applyTheme();
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
            applyTheme();
        },

        updateChart(options) {
            chart.update(options, true, true);
        },
    };
}
