export interface RawFilter {
  query: string;
  projection?: string;
  pagination?: string;
}
export type RawOneFilter = Omit<RawFilter, 'pagination'>;
export type RawQueryFilter = Pick<RawFilter, 'query'>;
export type RawUniqueFilter = Pick<RawFilter, 'projection'> & {
  query: { id: string };
};

export type RawFilterInterface = RawFilter;
export type RawOneFilterInterface = RawOneFilter;
export type RawQueryFilterInterface = RawQueryFilter;
export type RawUniqueFilterInterface = RawUniqueFilter;
