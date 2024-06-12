import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  generates: {
    "resolvers.ts": {
      plugins: {
        typescript: { immutableTypes: false, avoidOptionals: true },
        "typescript-resolvers": {
          immutableTypes: false,
          makeResolverTypeCallable: true,
        },
      },
    },
  },
};
export default config;
