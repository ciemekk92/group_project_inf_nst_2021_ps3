export const isDefined = <T>(candidate: Maybe<T>): candidate is T =>
  candidate !== undefined && candidate !== null;
