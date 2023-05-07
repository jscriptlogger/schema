import {saveValueResult} from "./value";
import {void_t} from "./void";
import {createPageResult} from "./page";
import {addPageLineResult} from "./page";
import {ISerializer} from "./__types__";
import {encodeSaveValueResult} from "./value";
import {encodeVoid_t} from "./void";
import {encodeCreatePageResult} from "./page";
import {encodeAddPageLineResult} from "./page";
import {IDeserializer} from "./__types__";
import {decodeSaveValueResult} from "./value";
import {decodeVoid_t} from "./void";
import {decodeCreatePageResult} from "./page";
import {decodeAddPageLineResult} from "./page";
import {defaultSaveValueResult} from "./value";
import {compareSaveValueResult} from "./value";
import {compareVoid_t} from "./void";
import {compareCreatePageResult} from "./page";
import {compareAddPageLineResult} from "./page";
export type Result = Readonly<saveValueResult> | Readonly<void_t> | Readonly<createPageResult> | Readonly<addPageLineResult>;
export function encodeResultTrait(__s: ISerializer,value: Result) {
    switch(value._name) {
        case 'value.saveValueResult':
            encodeSaveValueResult(__s,value);
            break;
        case 'void.void_t':
            encodeVoid_t(__s,value);
            break;
        case 'page.createPageResult':
            encodeCreatePageResult(__s,value);
            break;
        case 'page.addPageLineResult':
            encodeAddPageLineResult(__s,value);
            break;
    }
}
export function decodeResultTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: saveValueResult | void_t | createPageResult | addPageLineResult;
    switch(__id) {
        case 205410927: {
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
        case -1422046958: {
            const tmp = decodeCreatePageResult(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1696328515: {
            const tmp = decodeAddPageLineResult(__d);
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
        case 'page.createPageResult':
            if(__b._name !== "page.createPageResult") return false;
            return compareCreatePageResult(__a,__b);
        case 'page.addPageLineResult':
            if(__b._name !== "page.addPageLineResult") return false;
            return compareAddPageLineResult(__a,__b);
    }
}
