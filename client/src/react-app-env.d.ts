/// <reference types="react-scripts" />
import * as _d3 from 'd3';

declare global {
  const d3: typeof _d3;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COINBASE_CLIENT_ID: string;
      COINBASE_CLIENT_SECRET: string;
      SECURE_RANDOM: string;
      REACT_APP_AUTHORIZE_URL: string;
      PORT?: string;
      NODE_ENV: 'development' | 'production';
      BASE_URL: string;
      MONGO_URI: string;
      MONGO_PWD: string;
      MONGO_DB_NAME: string;
      MONGO_DB_USER: string;
    }
  }
}

export {}