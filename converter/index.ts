import {
  Value,
  boolFalse,
  boolTrue,
  valueBoolean,
  valueNull,
  valueNumber,
  valueObject,
  valueString,
  valueUndefined,
  valueVector,
} from '../src/value';

export class ConversionException {}

export class UnsupportedValue extends ConversionException {
  public constructor(public readonly value: unknown) {
    super();
  }
}

function isObject(
  value: unknown
): value is Record<string | symbol | number, unknown> {
  return typeof value === 'object' && value !== null;
}

export default function convert(value: unknown): Value {
  if (typeof value === 'string') {
    return valueString({
      value,
    });
  } else if (value === null) {
    return valueNull();
  } else if (typeof value === 'undefined') {
    return valueUndefined();
  } else if (typeof value === 'boolean') {
    return valueBoolean({
      value: value ? boolTrue() : boolFalse(),
    });
  } else if (Array.isArray(value)) {
    return valueVector({
      value: value.map((l) => convert(l)),
    });
  } else if (isObject(value)) {
    return valueObject({
      value: Object.entries(value).map(([k, v]) => [convert(k), convert(v)]),
    });
  } else if (typeof value === 'number') {
    return valueNumber({
      value,
    });
  }
  throw new UnsupportedValue(value);
}
