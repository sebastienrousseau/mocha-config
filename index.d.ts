export interface MochaConfig {
  allowUncaught?: boolean;
  bail?: boolean;
  delay?: boolean;
  diff?: boolean;
  exit?: boolean;
  extension?: string[];
  package?: string;
  recursive?: boolean;
  reporter?: string;
  require?: string[];
  slow?: number;
  spec?: string[];
  timeout?: number;
  ui?: string;
}

declare const config: MochaConfig;
export default config;
