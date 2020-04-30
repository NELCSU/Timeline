import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) {
			if (warning.code !== "CIRCULAR_DEPENDENCY") {
				rollupWarn(warning);
			}
		},
	  output: [
			{
				file: "docs/dist/timeline.js",
				format: "iife",
				name: "App",
			},
			{
				file: "docs/dist/timeline.mjs",
				format: "esm",
			},
	  ],
	  plugins: [
			resolve(),
			commonjs(),
			typescript()	
		]
	}
];