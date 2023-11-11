/* eslint-disable @typescript-eslint/no-explicit-any */

export function toJSON<T = any>(val: string): T {
  try {
    return JSON.parse(val);
  } catch {
    return val as T;
  }
}

export function toDate(val: string | number | Date): Date {
  try {
    return new Date(val);
  } catch {
    return val as Date;
  }
}
