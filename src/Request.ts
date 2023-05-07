import {SaveValue} from "./Value";
import {InitPage} from "./Value";
import {ISerializer} from "./__types__";
import {encodeSaveValue} from "./Value";
import {encodeInitPage} from "./Value";
import {IDeserializer} from "./__types__";
import {decodeSaveValue} from "./Value";
import {decodeInitPage} from "./Value";
import {defaultSaveValue} from "./Value";
import {compareSaveValue} from "./Value";
import {compareInitPage} from "./Value";
export type Request = Readonly<SaveValue> | Readonly<InitPage>;
export function encodeRequestTrait(__s: ISerializer,value: Request) {
    switch(value._name) {
        case 'value.SaveValue':
            encodeSaveValue(__s,value);
            break;
        case 'value.InitPage':
            encodeInitPage(__s,value);
            break;
    }
}
export function decodeRequestTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: SaveValue | InitPage;
    switch(__id) {
        case -618292882: {
            const tmp = decodeSaveValue(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1916033193: {
            const tmp = decodeInitPage(__d);
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
        case 'value.InitPage':
            if(__b._name !== "value.InitPage") return false;
            return compareInitPage(__a,__b);
    }
}
