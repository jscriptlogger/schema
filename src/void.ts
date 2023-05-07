import {Result} from "./Result";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
export interface void_tInputParams {
}
export function void_t(_: void_tInputParams = {}): void_t {
    return {
        _name: 'void.void_t'
    };
}
export function encodeVoid_t(__s: ISerializer, _: void_t) {
    __s.writeInt32(-106002399);
}
export function decodeVoid_t(__d: IDeserializer): void_t | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -106002399) return null;
    return {
        _name: 'void.void_t',
    };
}
export interface void_t  {
    _name: 'void.void_t';
}
export function defaultVoid_t(params: Partial<void_tInputParams> = {}): void_t {
    return void_t({
        ...params
    });
}
export function compareVoid_t(__a: void_t, __b: void_t): boolean {
    return true;
}
export function updateVoid_t(value: void_t, _: Partial<void_tInputParams>) {
    return value;
}
