import {Request} from "./Request";
import {Result} from "./Result";
import {void_t} from "./void";
import {objectId} from "./objectId";
import {Value} from "./value";
import {ISerializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {IDeserializer} from "./__types__";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {IRequest} from "./__types__";
import {encodeValueTrait} from "./value";
import {decodeValueTrait} from "./value";
import {compareValueTrait} from "./value";
import {compareValueTrait as compareValueTrait2} from "./value";
import {encodeObjectId as encodeObjectId3} from "./objectId";
import {decodeObjectId as decodeObjectId4} from "./objectId";
import {defaultObjectId as defaultObjectId5} from "./objectId";
import {compareObjectId as compareObjectId6} from "./objectId";
import {compareObjectId as compareObjectId7} from "./objectId";
export interface createPageResultInputParams {
    id: Readonly<objectId>;
}
export function createPageResult(params: createPageResultInputParams): createPageResult {
    return {
        _name: 'page.createPageResult',
        id: params['id']
    };
}
export function encodeCreatePageResult(__s: ISerializer, value: createPageResult) {
    __s.writeInt32(-1422046958);
    /**
     * encoding param: id
     */
    const __pv0 = value['id'];
    encodeObjectId(__s,__pv0);
}
export function decodeCreatePageResult(__d: IDeserializer): createPageResult | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1422046958) return null;
    let id: objectId;
    /**
     * decoding param: id
     */
    const tmp2 = decodeObjectId(__d);
    if(tmp2 === null) return null;
    id = tmp2;
    return {
        _name: 'page.createPageResult',
        id
    };
}
export interface createPageResult  {
    _name: 'page.createPageResult';
    id: Readonly<objectId>;
}
export function defaultCreatePageResult(params: Partial<createPageResultInputParams> = {}): createPageResult {
    return createPageResult({
        id: defaultObjectId(),
        ...params
    });
}
export function compareCreatePageResult(__a: createPageResult, __b: createPageResult): boolean {
    return (
        /**
         * compare parameter id
         */
        compareObjectId(__a['id'],__b['id'])
    );
}
export function updateCreatePageResult(value: createPageResult, changes: Partial<createPageResultInputParams>) {
    if(typeof changes['id'] !== 'undefined') {
        if(!(compareObjectId1(changes['id'],value['id']))) {
            value = createPageResult({
                ...value,
                id: changes['id'],
            });
        }
    }
    return value;
}
export interface CreatePageInputParams {
    title: string;
}
export function CreatePage(params: CreatePageInputParams): CreatePage {
    return {
        _name: 'page.CreatePage',
        title: params['title']
    };
}
export function encodeCreatePage(__s: ISerializer, value: CreatePage) {
    __s.writeInt32(87968832);
    /**
     * encoding param: title
     */
    const __pv0 = value['title'];
    __s.writeString(__pv0);
}
export function decodeCreatePage(__d: IDeserializer): CreatePage | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 87968832) return null;
    let title: string;
    /**
     * decoding param: title
     */
    title = __d.readString();
    return {
        _name: 'page.CreatePage',
        title
    };
}
export interface CreatePage extends IRequest<Readonly<createPageResult>> {
    _name: 'page.CreatePage';
    title: string;
}
export function defaultCreatePage(params: Partial<CreatePageInputParams> = {}): CreatePage {
    return CreatePage({
        title: "",
        ...params
    });
}
export function compareCreatePage(__a: CreatePage, __b: CreatePage): boolean {
    return (
        /**
         * compare parameter title
         */
        __a['title'] === __b['title']
    );
}
export function updateCreatePage(value: CreatePage, changes: Partial<CreatePageInputParams>) {
    if(typeof changes['title'] !== 'undefined') {
        if(!(changes['title'] === value['title'])) {
            value = CreatePage({
                ...value,
                title: changes['title'],
            });
        }
    }
    return value;
}
export type InputPageItem = Readonly<inputPageItemLog>;
export function encodeInputPageItemTrait(__s: ISerializer,value: InputPageItem) {
    switch(value._name) {
        case 'page.inputPageItemLog':
            encodeInputPageItemLog(__s,value);
            break;
    }
}
export function decodeInputPageItemTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: inputPageItemLog;
    switch(__id) {
        case -1591913739: {
            const tmp = decodeInputPageItemLog(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultInputPageItemTrait() {
    return defaultInputPageItemLog();
}
export function compareInputPageItemTrait(__a: InputPageItem, __b: InputPageItem) {
    switch(__a._name) {
        case 'page.inputPageItemLog':
            if(__b._name !== "page.inputPageItemLog") return false;
            return compareInputPageItemLog(__a,__b);
    }
}
export interface inputPageItemLogInputParams {
    args: ReadonlyArray<Readonly<Value>>;
}
export function inputPageItemLog(params: inputPageItemLogInputParams): inputPageItemLog {
    return {
        _name: 'page.inputPageItemLog',
        args: params['args']
    };
}
export function encodeInputPageItemLog(__s: ISerializer, value: inputPageItemLog) {
    __s.writeInt32(-1591913739);
    /**
     * encoding param: args
     */
    const __pv0 = value['args'];
    const __l1 = __pv0.length;
    __s.writeUint32(__l1);
    for(let __i1 = 0; __i1 < __l1; __i1++) {
        const __v__i1 = __pv0[__i1];
        encodeValueTrait(__s,__v__i1);
    }
}
export function decodeInputPageItemLog(__d: IDeserializer): inputPageItemLog | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1591913739) return null;
    let args: Array<Value>;
    /**
     * decoding param: args
     */
    const iindex1 = __d.readUint32();
    const oindex1 = new Array<Value>(iindex1);
    args = oindex1;
    for(let index1 = 0; index1 < iindex1; index1++) {
        const tmp3 = decodeValueTrait(__d);
        if(tmp3 === null) return null;
        oindex1[index1] = tmp3;
    }
    return {
        _name: 'page.inputPageItemLog',
        args
    };
}
export interface inputPageItemLog  {
    _name: 'page.inputPageItemLog';
    args: ReadonlyArray<Readonly<Value>>;
}
export function defaultInputPageItemLog(params: Partial<inputPageItemLogInputParams> = {}): inputPageItemLog {
    return inputPageItemLog({
        args: [],
        ...params
    });
}
export function compareInputPageItemLog(__a: inputPageItemLog, __b: inputPageItemLog): boolean {
    return (
        /**
         * compare parameter args
         */
        __a['args'].length === __b['args'].length && __a['args'].every((__i,index) => (compareValueTrait(__i,__b['args'][index])))
    );
}
export function updateInputPageItemLog(value: inputPageItemLog, changes: Partial<inputPageItemLogInputParams>) {
    if(typeof changes['args'] !== 'undefined') {
        if(!(changes['args'].length === value['args'].length && changes['args'].every((__i,index) => (compareValueTrait2(__i,value['args'][index]))))) {
            value = inputPageItemLog({
                ...value,
                args: changes['args'],
            });
        }
    }
    return value;
}
export interface AddPageItemInputParams {
    pageId: Readonly<objectId>;
    item: Readonly<InputPageItem>;
}
export function AddPageItem(params: AddPageItemInputParams): AddPageItem {
    return {
        _name: 'page.AddPageItem',
        pageId: params['pageId'],
        item: params['item']
    };
}
export function encodeAddPageItem(__s: ISerializer, value: AddPageItem) {
    __s.writeInt32(-1542453560);
    /**
     * encoding param: pageId
     */
    const __pv0 = value['pageId'];
    encodeObjectId3(__s,__pv0);
    /**
     * encoding param: item
     */
    const __pv1 = value['item'];
    encodeInputPageItemTrait(__s,__pv1);
}
export function decodeAddPageItem(__d: IDeserializer): AddPageItem | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1542453560) return null;
    let pageId: objectId;
    let item: InputPageItem;
    /**
     * decoding param: pageId
     */
    const tmp2 = decodeObjectId4(__d);
    if(tmp2 === null) return null;
    pageId = tmp2;
    /**
     * decoding param: item
     */
    const __tmp3 = decodeInputPageItemTrait(__d);
    if(__tmp3 === null) return null;
    item = __tmp3;
    return {
        _name: 'page.AddPageItem',
        pageId,
        item
    };
}
export interface AddPageItem extends IRequest<Readonly<void_t>> {
    _name: 'page.AddPageItem';
    pageId: Readonly<objectId>;
    item: Readonly<InputPageItem>;
}
export function defaultAddPageItem(params: Partial<AddPageItemInputParams> = {}): AddPageItem {
    return AddPageItem({
        pageId: defaultObjectId(),
        item: defaultInputPageItemTrait(),
        ...params
    });
}
export function compareAddPageItem(__a: AddPageItem, __b: AddPageItem): boolean {
    return (
        /**
         * compare parameter pageId
         */
        compareObjectId6(__a['pageId'],__b['pageId']) &&
        /**
         * compare parameter item
         */
        compareInputPageItemTrait(__a['item'],__b['item'])
    );
}
export function updateAddPageItem(value: AddPageItem, changes: Partial<AddPageItemInputParams>) {
    if(typeof changes['pageId'] !== 'undefined') {
        if(!(compareObjectId7(changes['pageId'],value['pageId']))) {
            value = AddPageItem({
                ...value,
                pageId: changes['pageId'],
            });
        }
    }
    if(typeof changes['item'] !== 'undefined') {
        if(!(compareInputPageItemTrait(changes['item'],value['item']))) {
            value = AddPageItem({
                ...value,
                item: changes['item'],
            });
        }
    }
    return value;
}
