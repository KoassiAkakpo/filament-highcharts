import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "resources/dist",
        emptyOutDir: true,
        lib: {
            entry: {
                "filament-highcharts": "resources/js/index.js",
            },
            formats: ["es"],
            fileName: (format) => `filament-highcharts.js`,
        },
        rollupOptions: {
            input: {
                "filament-highcharts": "resources/js/index.js",
                style: "resources/css/index.css",
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "filament-highcharts.css";
                    }
                    return "[name].[ext]";
                },
            },
        },
        cssCodeSplit: true,
    },
});
