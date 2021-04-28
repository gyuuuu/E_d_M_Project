import * as Joi from 'joi';

export function envConfig() {
  return {
    isGlobal: true,
    envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
    validationSchema: Joi.object({
      NODE_ENV: Joi.string().valid('dev', 'prod', 'test').required(),
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.string().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      DB_NAME: Joi.string().required(),
    }),
  };
}
