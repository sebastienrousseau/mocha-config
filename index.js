module.exports = {
  "allowUncaught": false,
  "bail": false,
  "delay": false,
  "diff": true,
  "exit": true,
  "extensions": [".test.js",".test.ts"],
  "package": "./package.json",
  "recursive": true,
  "reporter": "min",
  "require": ["ts-node/register"],
  "slow": "75",
  "spec": ["./test/**/*", "./__tests__/**/*"],
  "timeout": "60000",
  "useStrict": true,
  "ui": "bdd"
};
