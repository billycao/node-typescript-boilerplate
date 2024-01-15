import 'dotenv/config';

// import config from 'config';
import { pino } from 'pino';

const logger = pino();

if (import.meta.url.endsWith(process.argv[1])) {
  logger.info('hello');
  console.log('hello');
}
