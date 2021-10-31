declare global {
  export type Unrestricted = any;
  export type Nullable<T> = null | T;
  export type Maybe<T> = null | undefined | T;
  export type EmptyArray = never[];
  export type EmptyObject = Record<string, never>;
  export type EmptyString = '';
  export type VoidFunctionNoArgs = () => void;
}

export {};
