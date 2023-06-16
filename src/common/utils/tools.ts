import { debug } from 'debug';

/**
 * It returns an object with three functions, each of which logs a message with a different color
 *
 * @param {string} namespace - This is the namespace of the logger.
 * @param [prefix=wenex-sdk] - This is the prefix that will be used for the debug module.
 *
 * @returns An object with three functions.
 */
export const logger = (namespace: string, prefix = 'wenex-sdk') => {
  const log = debug(`${prefix}:${namespace}`);

  return {
    error: (formatter: string, ...args: unknown[]) =>
      log(`\x1b[31m${'[ERROR]'} ` + formatter, ...args, '\x1b[0m'),
    warn: (formatter: string, ...args: unknown[]) =>
      log(`\x1b[33m${'[WARNING]'} ` + formatter, ...args, '\x1b[0m'),
    info: (formatter: string, ...args: unknown[]) =>
      log(`\x1b[34m${'[INFO]'} ` + formatter, ...args, '\x1b[0m'),
    debug: (formatter: string, ...args: unknown[]) =>
      log(`\x1b[36m${'[DEBUG]'} ` + formatter, ...args, '\x1b[0m'),
  };
};
