import {SaveValue} from "./value";
import {GetValueById} from "./value";
import {CreatePage} from "./page";
import {AddPageLine} from "./page";
import {ISerializer} from "./__types__";
import {encodeSaveValue} from "./value";
import {encodeGetValueById} from "./value";
import {encodeCreatePage} from "./page";
import {encodeAddPageLine} from "./page";
import {IDeserializer} from "./__types__";
import {decodeSaveValue} from "./value";
import {decodeGetValueById} from "./value";
import {decodeCreatePage} from "./page";
import {decodeAddPageLine} from "./page";
import {defaultSaveValue} from "./value";
import {compareSaveValue} from "./value";
import {compareGetValueById} from "./value";
import {compareCreatePage} from "./page";
import {compareAddPageLine} from "./page";
export type Request = Readonly<SaveValue> | Readonly<GetValueById> | Readonly<CreatePage> | Readonly<AddPageLine>;
export function encodeRequestTrait(__s: ISerializer,value: Request) {
    switch(value._name) {
        case 'value.SaveValue':
            encodeSaveValue(__s,value);
            break;
        case 'value.GetValueById':
            encodeGetValueById(__s,value);
            break;
        case 'page.CreatePage':
            encodeCreatePage(__s,value);
            break;
        case 'page.AddPageLine':
            encodeAddPageLine(__s,value);
            break;
    }
}
export function decodeRequestTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: SaveValue | GetValueById | CreatePage | AddPageLine;
    switch(__id) {
        case -1279092661: {
            const tmp = decodeSaveValue(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -1689588124: {
            const tmp = decodeGetValueById(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 87968832: {
            const tmp = decodeCreatePage(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -1837308354: {
            const tmp = decodeAddPageLine(__d);
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
        case 'value.GetValueById':
            if(__b._name !== "value.GetValueById") return false;
            return compareGetValueById(__a,__b);
        case 'page.CreatePage':
            if(__b._name !== "page.CreatePage") return false;
            return compareCreatePage(__a,__b);
        case 'page.AddPageLine':
            if(__b._name !== "page.AddPageLine") return false;
            return compareAddPageLine(__a,__b);
    }
}
