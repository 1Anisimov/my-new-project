import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigueation } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfigueation {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}