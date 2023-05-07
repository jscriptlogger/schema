import {SaveValue} from "./Value";
import {ISerializer} from "./__types__";
import {encodeSaveValue} from "./Value";
import {IDeserializer} from "./__types__";
import {decodeSaveValue} from "./Value";
import {defaultSaveValue} from "./Value";
import {compareSaveValue} from "./Value";
export type Request = Readonly<SaveValue>;
export function encodeRequestTrait(__s: ISerializer,value: Request) {
    switch(value._name) {
        case 'value.SaveValue':
            encodeSaveValue(__s,value);
            break;
    }
}
export function decodeRequestTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: SaveValue;
    switch(__id) {
        case -618292882: {
            const tmp = decodeSaveValue(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultRequestTrait() {
    return defaultSaveValue();
}
export function compareRequestTrait(__a: Request, __b: Request) {
    switch(__a._name) {
        case 'value.SaveValue':
            if(__b._name !== "value.SaveValue") return false;
            return compareSaveValue(__a,__b);
    }
}
