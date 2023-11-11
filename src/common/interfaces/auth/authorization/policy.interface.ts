export interface PolicyTime {
  duration: number;
  cron_exp: string;
}

export interface Policy {
  subject: string;

  action: string;
  object: string;

  field?: string[];
  filter?: string[];

  location?: string[];

  time?: PolicyTime[];
}
