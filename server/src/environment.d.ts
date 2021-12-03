declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COINBASE_CLIENT_ID: string;
      COINBASE_CLIENT_SECRET: string;
      SECURE_RANDOM: string;
      AUTHORIZE_URL: string;
      PORT?: string;
      NODE_ENV: 'development' | 'production';
      BASE_URL: string;
      MONGO_URI: string;
    }
  }
}
export {}