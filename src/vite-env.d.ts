/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_HERMES_API_URL: string;
  readonly VITE_HERMES_API_KEY: string;
}
