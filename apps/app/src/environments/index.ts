import { environment } from './environment';
import { z } from 'zod';

export const envSchema = z.object({
  production: z.boolean(),
  CLOUDINARY_BASE: z.string().url(),
  API_ENDPOINT: z.string().url()
});

export const env = envSchema.parse(environment);
