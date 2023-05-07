import {void_t} from "./schema";
import {saveValueResult} from "./Value";
import {ISerializer} from "./__types__";
import {encodeVoid_t} from "./schema";
import {encodeSaveValueResult} from "./Value";
import {IDeserializer} from "./__types__";
import {decodeVoid_t} from "./schema";
import {decodeSaveValueResult} from "./Value";
import {defaultVoid_t} from "./schema";
import {compareVoid_t} from "./schema";
import {compareSaveValueResult} from "./Value";
export type Result = Readonly<void_t> | Readonly<saveValueResult>;
export function encodeResultTrait(__s: ISerializer,value: Result) {
    switch(value._name) {
        case 'schema.void_t':
            encodeVoid_t(__s,value);
            break;
        case 'value.saveValueResult':
            encodeSaveValueResult(__s,value);
            break;
    }
}
export function decodeResultTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: void_t | saveValueResult;
    switch(__id) {
        case 413189331: {
            const tmp = decodeVoid_t(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 710049971: {
            const tmp = decodeSaveValueResult(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultResultTrait() {
    return defaultVoid_t();
}
export function compareResultTrait(__a: Result, __b: Result) {
    switch(__a._name) {
        case 'schema.void_t':
            if(__b._name !== "schema.void_t") return false;
            return compareVoid_t(__a,__b);
        case 'value.saveValueResult':
            if(__b._name !== "value.saveValueResult") return false;
            return compareSaveValueResult(__a,__b);
    }
}
