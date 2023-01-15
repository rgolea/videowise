import { envsafe, str, port, url } from 'envsafe';

const safeEnv = envsafe({
  NODE_ENV: str({
    choices: ['development', 'production', 'test'],
    devDefault: 'development',
  }),
  PORT: port({ devDefault: 3333, desc: 'API port' }),
  PREFIX: str({ default: '', desc: 'API prefix', allowEmpty: true }),
  CLOUDINARY_URL: url({ desc: 'Cloudinary URL', example: 'cloudinary://**:**' }),
  MONGODB_URI: url({ desc: 'MongoDB URI', example: 'mongodb://**:**', devDefault: 'mongodb://localhost:27017/file-upload-api' }),
});

export const environment = {
  production: safeEnv.NODE_ENV === 'production',
  ...safeEnv,
} as const;
