// eslint-disable-next-line @typescript-eslint/no-var-requires
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/default
import CopyPlugin from "copy-webpack-plugin";

export const plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure',
    }),
    new CopyPlugin({
        patterns: [
            {from: "node_modules/scichart/_wasm/scichart2d.wasm", to: "main_window"},
            {from: "node_modules/scichart/_wasm/scichart2d.data", to: "main_window"},
            {from: "node_modules/scichart/_wasm/scichart2d.data", to: ""},
            {from: "node_modules/scichart/_wasm/scichart3d.wasm", to: "main_window"},
            {from: "node_modules/scichart/_wasm/scichart3d.data", to: "main_window"},
            {from: "node_modules/scichart/_wasm/scichart3d.data", to: ""},
        ],
    }),
];
