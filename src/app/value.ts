import {objectId} from "./objectId";
import {Result} from "./../protocol/Result";
import {Request} from "./../protocol/Request";
import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
import {encodeObjectId} from "./objectId";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {encodeObjectId as encodeObjectId2} from "./objectId";
import {decodeObjectId as decodeObjectId3} from "./objectId";
import {defaultObjectId as defaultObjectId4} from "./objectId";
import {compareObjectId as compareObjectId5} from "./objectId";
import {compareObjectId as compareObjectId6} from "./objectId";
import {IRequest} from "./../__types__";
import {encodeObjectId as encodeObjectId7} from "./objectId";
import {decodeObjectId as decodeObjectId8} from "./objectId";
import {defaultObjectId as defaultObjectId9} from "./objectId";
import {compareObjectId as compareObjectId10} from "./objectId";
import {compareObjectId as compareObjectId11} from "./objectId";
export type ObjectKey = Readonly<valueNumber> | Readonly<valueString>;
export function encodeObjectKeyTrait(__s: ISerializer,value: ObjectKey) {
  switch(value._name) {
    case 'app.value.valueNumber':
      encodeValueNumber(__s,value);
      break;
    case 'app.value.valueString':
      encodeValueString(__s,value);
      break;
  }
}
export function decodeObjectKeyTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: valueNumber | valueString;
  switch(__id) {
    case 493932502: {
      const tmp = decodeValueNumber(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 813593623: {
      const tmp = decodeValueString(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultObjectKeyTrait() {
  return defaultValueNumber();
}
export function compareObjectKeyTrait(__a: ObjectKey, __b: ObjectKey) {
  switch(__a._name) {
    case 'app.value.valueNumber':
      if(__b._name !== "app.value.valueNumber") return false;
      return compareValueNumber(__a,__b);
    case 'app.value.valueString':
      if(__b._name !== "app.value.valueString") return false;
      return compareValueString(__a,__b);
  }
}
export type Value = Readonly<valueNumber> | Readonly<valueString> | Readonly<valueVector> | Readonly<valueObject> | Readonly<valueNaN> | Readonly<valueNull> | Readonly<valueUndefined> | Readonly<valueBoolean> | Readonly<valueValueRef>;
export function encodeValueTrait(__s: ISerializer,value: Value) {
  switch(value._name) {
    case 'app.value.valueNumber':
      encodeValueNumber(__s,value);
      break;
    case 'app.value.valueString':
      encodeValueString(__s,value);
      break;
    case 'app.value.valueVector':
      encodeValueVector(__s,value);
      break;
    case 'app.value.valueObject':
      encodeValueObject(__s,value);
      break;
    case 'app.value.valueNaN':
      encodeValueNaN(__s,value);
      break;
    case 'app.value.valueNull':
      encodeValueNull(__s,value);
      break;
    case 'app.value.valueUndefined':
      encodeValueUndefined(__s,value);
      break;
    case 'app.value.valueBoolean':
      encodeValueBoolean(__s,value);
      break;
    case 'app.value.valueValueRef':
      encodeValueValueRef(__s,value);
      break;
  }
}
export function decodeValueTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: valueNumber | valueString | valueVector | valueObject | valueNaN | valueNull | valueUndefined | valueBoolean | valueValueRef;
  switch(__id) {
    case 493932502: {
      const tmp = decodeValueNumber(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 813593623: {
      const tmp = decodeValueString(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -95521706: {
      const tmp = decodeValueVector(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1762245236: {
      const tmp = decodeValueObject(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1359831433: {
      const tmp = decodeValueNaN(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1958469205: {
      const tmp = decodeValueNull(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 917134265: {
      const tmp = decodeValueUndefined(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1564300798: {
      const tmp = decodeValueBoolean(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1025621645: {
      const tmp = decodeValueValueRef(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultValueTrait() {
  return defaultValueNumber();
}
export function compareValueTrait(__a: Value, __b: Value) {
  switch(__a._name) {
    case 'app.value.valueNumber':
      if(__b._name !== "app.value.valueNumber") return false;
      return compareValueNumber(__a,__b);
    case 'app.value.valueString':
      if(__b._name !== "app.value.valueString") return false;
      return compareValueString(__a,__b);
    case 'app.value.valueVector':
      if(__b._name !== "app.value.valueVector") return false;
      return compareValueVector(__a,__b);
    case 'app.value.valueObject':
      if(__b._name !== "app.value.valueObject") return false;
      return compareValueObject(__a,__b);
    case 'app.value.valueNaN':
      if(__b._name !== "app.value.valueNaN") return false;
      return compareValueNaN(__a,__b);
    case 'app.value.valueNull':
      if(__b._name !== "app.value.valueNull") return false;
      return compareValueNull(__a,__b);
    case 'app.value.valueUndefined':
      if(__b._name !== "app.value.valueUndefined") return false;
      return compareValueUndefined(__a,__b);
    case 'app.value.valueBoolean':
      if(__b._name !== "app.value.valueBoolean") return false;
      return compareValueBoolean(__a,__b);
    case 'app.value.valueValueRef':
      if(__b._name !== "app.value.valueValueRef") return false;
      return compareValueValueRef(__a,__b);
  }
}
export interface valueNumberInputParams {
  value: number;
}
export function valueNumber(params: valueNumberInputParams): valueNumber {
  return {
    _name: 'app.value.valueNumber',
    value: params['value']
  };
}
export function encodeValueNumber(__s: ISerializer, value: valueNumber) {
  __s.writeInt32(493932502);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  __s.writeDouble(__pv0);
}
export function decodeValueNumber(__d: IDeserializer): valueNumber | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 493932502) return null;
  let value: number;
  /**
   * decoding param: value
   */
  value = __d.readDouble();
  return {
    _name: 'app.value.valueNumber',
    value
  };
}
export interface valueNumber  {
  _name: 'app.value.valueNumber';
  value: number;
}
export function defaultValueNumber(params: Partial<valueNumberInputParams> = {}): valueNumber {
  return valueNumber({
    value: 0.0,
    ...params
  });
}
export function compareValueNumber(__a: valueNumber, __b: valueNumber): boolean {
  return (
    /**
     * compare parameter value
     */
    __a['value'] === __b['value']
  );
}
export function updateValueNumber(value: valueNumber, changes: Partial<valueNumberInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(changes['value'] === value['value'])) {
      value = valueNumber({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface valueStringInputParams {
  value: string;
}
export function valueString(params: valueStringInputParams): valueString {
  return {
    _name: 'app.value.valueString',
    value: params['value']
  };
}
export function encodeValueString(__s: ISerializer, value: valueString) {
  __s.writeInt32(813593623);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  __s.writeString(__pv0);
}
export function decodeValueString(__d: IDeserializer): valueString | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 813593623) return null;
  let value: string;
  /**
   * decoding param: value
   */
  value = __d.readString();
  return {
    _name: 'app.value.valueString',
    value
  };
}
export interface valueString  {
  _name: 'app.value.valueString';
  value: string;
}
export function defaultValueString(params: Partial<valueStringInputParams> = {}): valueString {
  return valueString({
    value: "",
    ...params
  });
}
export function compareValueString(__a: valueString, __b: valueString): boolean {
  return (
    /**
     * compare parameter value
     */
    __a['value'] === __b['value']
  );
}
export function updateValueString(value: valueString, changes: Partial<valueStringInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(changes['value'] === value['value'])) {
      value = valueString({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface valueVectorInputParams {
  value: ReadonlyArray<Readonly<Value>>;
}
export function valueVector(params: valueVectorInputParams): valueVector {
  return {
    _name: 'app.value.valueVector',
    value: params['value']
  };
}
export function encodeValueVector(__s: ISerializer, value: valueVector) {
  __s.writeInt32(-95521706);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  const __l1 = __pv0.length;
  __s.writeUint32(__l1);
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __v__i1 = __pv0[__i1];
    encodeValueTrait(__s,__v__i1);
  }
}
export function decodeValueVector(__d: IDeserializer): valueVector | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -95521706) return null;
  let value: Array<Value>;
  /**
   * decoding param: value
   */
  const iindex1 = __d.readUint32();
  const oindex1 = new Array<Value>(iindex1);
  value = oindex1;
  for(let index1 = 0; index1 < iindex1; index1++) {
    const __tmp2 = decodeValueTrait(__d);
    if(__tmp2 === null) return null;
    oindex1[index1] = __tmp2;
  }
  return {
    _name: 'app.value.valueVector',
    value
  };
}
export interface valueVector  {
  _name: 'app.value.valueVector';
  value: ReadonlyArray<Readonly<Value>>;
}
export function defaultValueVector(params: Partial<valueVectorInputParams> = {}): valueVector {
  return valueVector({
    value: [],
    ...params
  });
}
export function compareValueVector(__a: valueVector, __b: valueVector): boolean {
  return (
    /**
     * compare parameter value
     */
    __a['value'].length === __b['value'].length && __a['value'].every((__i,index) => (compareValueTrait(__i,__b['value'][index])))
  );
}
export function updateValueVector(value: valueVector, changes: Partial<valueVectorInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(changes['value'].length === value['value'].length && changes['value'].every((__i,index) => (compareValueTrait(__i,value['value'][index]))))) {
      value = valueVector({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface valueObjectInputParams {
  value: ReadonlyArray<[Readonly<Value>,Readonly<Value>]>;
}
export function valueObject(params: valueObjectInputParams): valueObject {
  return {
    _name: 'app.value.valueObject',
    value: params['value']
  };
}
export function encodeValueObject(__s: ISerializer, value: valueObject) {
  __s.writeInt32(1762245236);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  const __l1 = __pv0.length;
  __s.writeUint32(__l1);
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __v__i1 = __pv0[__i1];
    const __t22 = __v__i1[0];
    encodeValueTrait(__s,__t22);
    const __t33 = __v__i1[1];
    encodeValueTrait(__s,__t33);
  }
}
export function decodeValueObject(__d: IDeserializer): valueObject | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1762245236) return null;
  let value: Array<[Value,Value]>;
  /**
   * decoding param: value
   */
  const iindex1 = __d.readUint32();
  const oindex1 = new Array<[Value,Value]>(iindex1);
  value = oindex1;
  for(let index1 = 0; index1 < iindex1; index1++) {
    let __e2: Value;
    const __tmp3 = decodeValueTrait(__d);
    if(__tmp3 === null) return null;
    __e2 = __tmp3;
    let __e3: Value;
    const __tmp4 = decodeValueTrait(__d);
    if(__tmp4 === null) return null;
    __e3 = __tmp4;
    oindex1[index1] = [__e2,__e3];
  }
  return {
    _name: 'app.value.valueObject',
    value
  };
}
export interface valueObject  {
  _name: 'app.value.valueObject';
  value: ReadonlyArray<[Readonly<Value>,Readonly<Value>]>;
}
export function defaultValueObject(params: Partial<valueObjectInputParams> = {}): valueObject {
  return valueObject({
    value: [],
    ...params
  });
}
export function compareValueObject(__a: valueObject, __b: valueObject): boolean {
  return (
    /**
     * compare parameter value
     */
    __a['value'].length === __b['value'].length && __a['value'].every((__i,index) => (/* compare tuple item 0 of type Readonly<Value> */ ((__a10, __b10) => compareValueTrait(__a10,__b10))(__i[0],__b['value'][index][0]) && /* compare tuple item 1 of type Readonly<Value> */ ((__a11, __b11) => compareValueTrait(__a11,__b11))(__i[1],__b['value'][index][1])))
  );
}
export function updateValueObject(value: valueObject, changes: Partial<valueObjectInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(changes['value'].length === value['value'].length && changes['value'].every((__i,index) => (/* compare tuple item 0 of type Readonly<Value> */ ((__a10, __b10) => compareValueTrait(__a10,__b10))(__i[0],value['value'][index][0]) && /* compare tuple item 1 of type Readonly<Value> */ ((__a11, __b11) => compareValueTrait(__a11,__b11))(__i[1],value['value'][index][1]))))) {
      value = valueObject({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export type Bool = Readonly<boolTrue> | Readonly<boolFalse>;
export function encodeBoolTrait(__s: ISerializer,value: Bool) {
  switch(value._name) {
    case 'app.value.boolTrue':
      encodeBoolTrue(__s,value);
      break;
    case 'app.value.boolFalse':
      encodeBoolFalse(__s,value);
      break;
  }
}
export function decodeBoolTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: boolTrue | boolFalse;
  switch(__id) {
    case 1804762885: {
      const tmp = decodeBoolTrue(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 938106035: {
      const tmp = decodeBoolFalse(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultBoolTrait() {
  return defaultBoolTrue();
}
export function compareBoolTrait(__a: Bool, __b: Bool) {
  switch(__a._name) {
    case 'app.value.boolTrue':
      if(__b._name !== "app.value.boolTrue") return false;
      return compareBoolTrue(__a,__b);
    case 'app.value.boolFalse':
      if(__b._name !== "app.value.boolFalse") return false;
      return compareBoolFalse(__a,__b);
  }
}
export interface boolTrueInputParams {
}
export function boolTrue(_: boolTrueInputParams = {}): boolTrue {
  return {
    _name: 'app.value.boolTrue'
  };
}
export function encodeBoolTrue(__s: ISerializer, _: boolTrue) {
  __s.writeInt32(1804762885);
}
export function decodeBoolTrue(__d: IDeserializer): boolTrue | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1804762885) return null;
  return {
    _name: 'app.value.boolTrue',
  };
}
export interface boolTrue  {
  _name: 'app.value.boolTrue';
}
export function defaultBoolTrue(params: Partial<boolTrueInputParams> = {}): boolTrue {
  return boolTrue({
    ...params
  });
}
export function compareBoolTrue(__a: boolTrue, __b: boolTrue): boolean {
  return true;
}
export function updateBoolTrue(value: boolTrue, _: Partial<boolTrueInputParams>) {
  return value;
}
export interface boolFalseInputParams {
}
export function boolFalse(_: boolFalseInputParams = {}): boolFalse {
  return {
    _name: 'app.value.boolFalse'
  };
}
export function encodeBoolFalse(__s: ISerializer, _: boolFalse) {
  __s.writeInt32(938106035);
}
export function decodeBoolFalse(__d: IDeserializer): boolFalse | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 938106035) return null;
  return {
    _name: 'app.value.boolFalse',
  };
}
export interface boolFalse  {
  _name: 'app.value.boolFalse';
}
export function defaultBoolFalse(params: Partial<boolFalseInputParams> = {}): boolFalse {
  return boolFalse({
    ...params
  });
}
export function compareBoolFalse(__a: boolFalse, __b: boolFalse): boolean {
  return true;
}
export function updateBoolFalse(value: boolFalse, _: Partial<boolFalseInputParams>) {
  return value;
}
export interface valueNaNInputParams {
}
export function valueNaN(_: valueNaNInputParams = {}): valueNaN {
  return {
    _name: 'app.value.valueNaN'
  };
}
export function encodeValueNaN(__s: ISerializer, _: valueNaN) {
  __s.writeInt32(-1359831433);
}
export function decodeValueNaN(__d: IDeserializer): valueNaN | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1359831433) return null;
  return {
    _name: 'app.value.valueNaN',
  };
}
export interface valueNaN  {
  _name: 'app.value.valueNaN';
}
export function defaultValueNaN(params: Partial<valueNaNInputParams> = {}): valueNaN {
  return valueNaN({
    ...params
  });
}
export function compareValueNaN(__a: valueNaN, __b: valueNaN): boolean {
  return true;
}
export function updateValueNaN(value: valueNaN, _: Partial<valueNaNInputParams>) {
  return value;
}
export interface valueNullInputParams {
}
export function valueNull(_: valueNullInputParams = {}): valueNull {
  return {
    _name: 'app.value.valueNull'
  };
}
export function encodeValueNull(__s: ISerializer, _: valueNull) {
  __s.writeInt32(1958469205);
}
export function decodeValueNull(__d: IDeserializer): valueNull | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1958469205) return null;
  return {
    _name: 'app.value.valueNull',
  };
}
export interface valueNull  {
  _name: 'app.value.valueNull';
}
export function defaultValueNull(params: Partial<valueNullInputParams> = {}): valueNull {
  return valueNull({
    ...params
  });
}
export function compareValueNull(__a: valueNull, __b: valueNull): boolean {
  return true;
}
export function updateValueNull(value: valueNull, _: Partial<valueNullInputParams>) {
  return value;
}
export interface valueUndefinedInputParams {
}
export function valueUndefined(_: valueUndefinedInputParams = {}): valueUndefined {
  return {
    _name: 'app.value.valueUndefined'
  };
}
export function encodeValueUndefined(__s: ISerializer, _: valueUndefined) {
  __s.writeInt32(917134265);
}
export function decodeValueUndefined(__d: IDeserializer): valueUndefined | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 917134265) return null;
  return {
    _name: 'app.value.valueUndefined',
  };
}
export interface valueUndefined  {
  _name: 'app.value.valueUndefined';
}
export function defaultValueUndefined(params: Partial<valueUndefinedInputParams> = {}): valueUndefined {
  return valueUndefined({
    ...params
  });
}
export function compareValueUndefined(__a: valueUndefined, __b: valueUndefined): boolean {
  return true;
}
export function updateValueUndefined(value: valueUndefined, _: Partial<valueUndefinedInputParams>) {
  return value;
}
export interface valueBooleanInputParams {
  value: Readonly<Bool>;
}
export function valueBoolean(params: valueBooleanInputParams): valueBoolean {
  return {
    _name: 'app.value.valueBoolean',
    value: params['value']
  };
}
export function encodeValueBoolean(__s: ISerializer, value: valueBoolean) {
  __s.writeInt32(1564300798);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  encodeBoolTrait(__s,__pv0);
}
export function decodeValueBoolean(__d: IDeserializer): valueBoolean | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1564300798) return null;
  let value: Bool;
  /**
   * decoding param: value
   */
  const __tmp1 = decodeBoolTrait(__d);
  if(__tmp1 === null) return null;
  value = __tmp1;
  return {
    _name: 'app.value.valueBoolean',
    value
  };
}
export interface valueBoolean  {
  _name: 'app.value.valueBoolean';
  value: Readonly<Bool>;
}
export function defaultValueBoolean(params: Partial<valueBooleanInputParams> = {}): valueBoolean {
  return valueBoolean({
    value: defaultBoolTrait(),
    ...params
  });
}
export function compareValueBoolean(__a: valueBoolean, __b: valueBoolean): boolean {
  return (
    /**
     * compare parameter value
     */
    compareBoolTrait(__a['value'],__b['value'])
  );
}
export function updateValueBoolean(value: valueBoolean, changes: Partial<valueBooleanInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(compareBoolTrait(changes['value'],value['value']))) {
      value = valueBoolean({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface valueValueRefInputParams {
  id: Readonly<objectId>;
}
export function valueValueRef(params: valueValueRefInputParams): valueValueRef {
  return {
    _name: 'app.value.valueValueRef',
    id: params['id']
  };
}
export function encodeValueValueRef(__s: ISerializer, value: valueValueRef) {
  __s.writeInt32(-1025621645);
  /**
   * encoding param: id
   */
  const __pv0 = value['id'];
  encodeObjectId(__s,__pv0);
}
export function decodeValueValueRef(__d: IDeserializer): valueValueRef | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1025621645) return null;
  let id: objectId;
  /**
   * decoding param: id
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  id = tmp2;
  return {
    _name: 'app.value.valueValueRef',
    id
  };
}
export interface valueValueRef  {
  _name: 'app.value.valueValueRef';
  id: Readonly<objectId>;
}
export function defaultValueValueRef(params: Partial<valueValueRefInputParams> = {}): valueValueRef {
  return valueValueRef({
    id: defaultObjectId(),
    ...params
  });
}
export function compareValueValueRef(__a: valueValueRef, __b: valueValueRef): boolean {
  return (
    /**
     * compare parameter id
     */
    compareObjectId(__a['id'],__b['id'])
  );
}
export function updateValueValueRef(value: valueValueRef, changes: Partial<valueValueRefInputParams>) {
  if(typeof changes['id'] !== 'undefined') {
    if(!(compareObjectId1(changes['id'],value['id']))) {
      value = valueValueRef({
        ...value,
        id: changes['id'],
      });
    }
  }
  return value;
}
export interface saveValueResultInputParams {
  id: Readonly<objectId>;
}
export function saveValueResult(params: saveValueResultInputParams): saveValueResult {
  return {
    _name: 'app.value.saveValueResult',
    id: params['id']
  };
}
export function encodeSaveValueResult(__s: ISerializer, value: saveValueResult) {
  __s.writeInt32(1403490142);
  /**
   * encoding param: id
   */
  const __pv0 = value['id'];
  encodeObjectId2(__s,__pv0);
}
export function decodeSaveValueResult(__d: IDeserializer): saveValueResult | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1403490142) return null;
  let id: objectId;
  /**
   * decoding param: id
   */
  const tmp2 = decodeObjectId3(__d);
  if(tmp2 === null) return null;
  id = tmp2;
  return {
    _name: 'app.value.saveValueResult',
    id
  };
}
export interface saveValueResult  {
  _name: 'app.value.saveValueResult';
  id: Readonly<objectId>;
}
export function defaultSaveValueResult(params: Partial<saveValueResultInputParams> = {}): saveValueResult {
  return saveValueResult({
    id: defaultObjectId(),
    ...params
  });
}
export function compareSaveValueResult(__a: saveValueResult, __b: saveValueResult): boolean {
  return (
    /**
     * compare parameter id
     */
    compareObjectId5(__a['id'],__b['id'])
  );
}
export function updateSaveValueResult(value: saveValueResult, changes: Partial<saveValueResultInputParams>) {
  if(typeof changes['id'] !== 'undefined') {
    if(!(compareObjectId6(changes['id'],value['id']))) {
      value = saveValueResult({
        ...value,
        id: changes['id'],
      });
    }
  }
  return value;
}
export interface SaveValueInputParams {
  value: Readonly<Value>;
}
export function SaveValue(params: SaveValueInputParams): SaveValue {
  return {
    _name: 'app.value.SaveValue',
    value: params['value']
  };
}
export function encodeSaveValue(__s: ISerializer, value: SaveValue) {
  __s.writeInt32(-1939500960);
  /**
   * encoding param: value
   */
  const __pv0 = value['value'];
  encodeValueTrait(__s,__pv0);
}
export function decodeSaveValue(__d: IDeserializer): SaveValue | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1939500960) return null;
  let value: Value;
  /**
   * decoding param: value
   */
  const __tmp1 = decodeValueTrait(__d);
  if(__tmp1 === null) return null;
  value = __tmp1;
  return {
    _name: 'app.value.SaveValue',
    value
  };
}
export interface SaveValue extends IRequest<Readonly<saveValueResult>> {
  _name: 'app.value.SaveValue';
  value: Readonly<Value>;
}
export function defaultSaveValue(params: Partial<SaveValueInputParams> = {}): SaveValue {
  return SaveValue({
    value: defaultValueTrait(),
    ...params
  });
}
export function compareSaveValue(__a: SaveValue, __b: SaveValue): boolean {
  return (
    /**
     * compare parameter value
     */
    compareValueTrait(__a['value'],__b['value'])
  );
}
export function updateSaveValue(value: SaveValue, changes: Partial<SaveValueInputParams>) {
  if(typeof changes['value'] !== 'undefined') {
    if(!(compareValueTrait(changes['value'],value['value']))) {
      value = SaveValue({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface GetValueByIdInputParams {
  valueId: Readonly<objectId>;
}
export function GetValueById(params: GetValueByIdInputParams): GetValueById {
  return {
    _name: 'app.value.GetValueById',
    valueId: params['valueId']
  };
}
export function encodeGetValueById(__s: ISerializer, value: GetValueById) {
  __s.writeInt32(970642241);
  /**
   * encoding param: valueId
   */
  const __pv0 = value['valueId'];
  encodeObjectId7(__s,__pv0);
}
export function decodeGetValueById(__d: IDeserializer): GetValueById | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 970642241) return null;
  let valueId: objectId;
  /**
   * decoding param: valueId
   */
  const tmp2 = decodeObjectId8(__d);
  if(tmp2 === null) return null;
  valueId = tmp2;
  return {
    _name: 'app.value.GetValueById',
    valueId
  };
}
export interface GetValueById extends IRequest<Readonly<Value>> {
  _name: 'app.value.GetValueById';
  valueId: Readonly<objectId>;
}
export function defaultGetValueById(params: Partial<GetValueByIdInputParams> = {}): GetValueById {
  return GetValueById({
    valueId: defaultObjectId(),
    ...params
  });
}
export function compareGetValueById(__a: GetValueById, __b: GetValueById): boolean {
  return (
    /**
     * compare parameter valueId
     */
    compareObjectId10(__a['valueId'],__b['valueId'])
  );
}
export function updateGetValueById(value: GetValueById, changes: Partial<GetValueByIdInputParams>) {
  if(typeof changes['valueId'] !== 'undefined') {
    if(!(compareObjectId11(changes['valueId'],value['valueId']))) {
      value = GetValueById({
        ...value,
        valueId: changes['valueId'],
      });
    }
  }
  return value;
}
