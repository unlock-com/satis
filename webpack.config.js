import Encore from "@symfony/webpack-encore";
import { PurgeCSSPlugin } from "purgecss-webpack-plugin";
import { glob } from "glob";

Encore.addEntry("app", "./views/assets/js/app.js")
    .addStyleEntry("style", "./views/assets/css/style.scss")
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .setOutputPath("views/build/")
    .setPublicPath("/build")
    .addPlugin(
        new PurgeCSSPlugin({
            paths: () =>
                glob.sync([`views/*.html.twig`, `views/assets/js/**/*.js`], {
                    nodir: true,
                }),
        }),
    );

export default Encore.getWebpackConfig();
