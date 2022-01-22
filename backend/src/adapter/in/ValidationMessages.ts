export enum ValidationMessage {
  NOT_EMPTY = 'Pole nie może być puste',
  DEFINED = 'Pole jest wymagane',
  STRING = 'Pole musi być tekstem',
  UUID = 'Pole musi być UUIDem',
  NUMBER = 'Pole musi być liczbą',
  ENUM = 'Pole musi być znana wartoscia enuma',
  EMAIL = 'Pole musi być prawidłowym emailem',
  LENGTH = 'Pole musi mieć długość od %s do %s znaków'
}
