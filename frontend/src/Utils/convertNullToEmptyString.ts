interface NullableCandidate {
  [x: string]: Nullable<string>;
}

interface ConvertedCandidate {
  [x: string]: string;
}

export const convertNullToEmptyString = (input: NullableCandidate): ConvertedCandidate => {
  const converted = new Map(Object.entries(input));

  for (const [key, value] of converted) {
    converted.set(key, value ? value : '')
  }

  return Object.fromEntries(converted) as ConvertedCandidate;
}