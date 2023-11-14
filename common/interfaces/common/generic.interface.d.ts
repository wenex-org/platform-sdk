export type Metadata = Record<string, any>;
export type Properties = Record<string, any>;
export type Optional<T> = {
    [P in keyof T]?: T[P];
};
export type Required<T> = {
    [P in keyof T]-?: T[P];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Optional<Pick<T, K>>;
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
