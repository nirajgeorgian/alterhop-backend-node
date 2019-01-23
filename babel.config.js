module.exports = {
  presets: [
    "@babel/preset-env",
    {
      targets: {
        node: "current"
      },
      useBuiltIns: "entry"
    }
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test"
        }
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-async-generators",
    "@babel/plugin-syntax-object-rest-spread"
  ]
};
