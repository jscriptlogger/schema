import {saveValueResult} from "./Value";
import {void_t} from "./void";
import {ISerializer} from "./__types__";
import {encodeSaveValueResult} from "./Value";
import {encodeVoid_t} from "./void";
import {IDeserializer} from "./__types__";
import {decodeSaveValueResult} from "./Value";
import {decodeVoid_t} from "./void";
import {defaultSaveValueResult} from "./Value";
import {compareSaveValueResult} from "./Value";
import {compareVoid_t} from "./void";
export type Result = Readonly<saveValueResult> | Readonly<void_t>;
export function encodeResultTrait(__s: ISerializer,value: Result) {
    switch(value._name) {
        case 'value.saveValueResult':
            encodeSaveValueResult(__s,value);
            break;
        case 'void.void_t':
            encodeVoid_t(__s,value);
            break;
    }
}
export function decodeResultTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: saveValueResult | void_t;
    switch(__id) {
        case 710049971: {
            const tmp = decodeSaveValueResult(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -106002399: {
            const tmp = decodeVoid_t(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultResultTrait() {
    return defaultSaveValueResult();
}
export function compareResultTrait(__a: Result, __b: Result) {
    switch(__a._name) {
        case 'value.saveValueResult':
            if(__b._name !== "value.saveValueResult") return false;
            return compareSaveValueResult(__a,__b);
        case 'void.void_t':
            if(__b._name !== "void.void_t") return false;
            return compareVoid_t(__a,__b);
    }
}
