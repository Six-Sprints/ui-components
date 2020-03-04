import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    resolve(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react-is/index.js": ["isFragment", "ForwardRef"]
      }
    })
  ],
  external: [
    "@material-ui/core/Button",
    "@material-ui/core/Paper",
    "@material-ui/core/Button",
    "@material-ui/core/CssBaseline",
    "@material-ui/core/Grid",
    "@material-ui/core/Typography",
    "@material-ui/core/styles",
    "@material-ui/core",
    "informed"
  ]
};
