import TerserPlugin from "terser-webpack-plugin";

export function buildMinimizers() {
    return [
        new TerserPlugin({
            extractComments: false,
        }),
    ];
}
