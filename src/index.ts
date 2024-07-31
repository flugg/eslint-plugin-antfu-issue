import type { Linter } from "eslint";
import pluginAntfu from "eslint-plugin-antfu";

export default [
  {
    plugins: {
      pluginAntfu,
    },
  },
] satisfies Linter.Config[];
