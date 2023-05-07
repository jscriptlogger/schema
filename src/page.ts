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
import {encodeObjectId as encodeObjectId2} from "./objectId";
import {decodeObjectId as decodeObjectId3} from "./objectId";
import {defaultObjectId as defaultObjectId4} from "./objectId";
import {compareObjectId as compareObjectId5} from "./objectId";
import {compareObjectId as compareObjectId6} from "./objectId";
import {encodeObjectId as encodeObjectId7} from "./objectId";
import {encodeValueTrait} from "./value";
import {decodeObjectId as decodeObjectId8} from "./objectId";
import {decodeValueTrait} from "./value";
import {defaultObjectId as defaultObjectId9} from "./objectId";
import {compareObjectId as compareObjectId10} from "./objectId";
import {compareValueTrait} from "./value";
import {compareObjectId as compareObjectId11} from "./objectId";
import {compareValueTrait as compareValueTrait12} from "./value";
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
export type LineType = Readonly<lineTypeLog> | Readonly<lineTypeError>;
export function encodeLineTypeTrait(__s: ISerializer,value: LineType) {
    switch(value._name) {
        case 'page.lineTypeLog':
            encodeLineTypeLog(__s,value);
            break;
        case 'page.lineTypeError':
            encodeLineTypeError(__s,value);
            break;
    }
}
export function decodeLineTypeTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: lineTypeLog | lineTypeError;
    switch(__id) {
        case -1559882635: {
            const tmp = decodeLineTypeLog(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -640492351: {
            const tmp = decodeLineTypeError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultLineTypeTrait() {
    return defaultLineTypeLog();
}
export function compareLineTypeTrait(__a: LineType, __b: LineType) {
    switch(__a._name) {
        case 'page.lineTypeLog':
            if(__b._name !== "page.lineTypeLog") return false;
            return compareLineTypeLog(__a,__b);
        case 'page.lineTypeError':
            if(__b._name !== "page.lineTypeError") return false;
            return compareLineTypeError(__a,__b);
    }
}
export interface lineTypeLogInputParams {
}
export function lineTypeLog(_: lineTypeLogInputParams = {}): lineTypeLog {
    return {
        _name: 'page.lineTypeLog'
    };
}
export function encodeLineTypeLog(__s: ISerializer, _: lineTypeLog) {
    __s.writeInt32(-1559882635);
}
export function decodeLineTypeLog(__d: IDeserializer): lineTypeLog | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1559882635) return null;
    return {
        _name: 'page.lineTypeLog',
    };
}
export interface lineTypeLog  {
    _name: 'page.lineTypeLog';
}
export function defaultLineTypeLog(params: Partial<lineTypeLogInputParams> = {}): lineTypeLog {
    return lineTypeLog({
        ...params
    });
}
export function compareLineTypeLog(__a: lineTypeLog, __b: lineTypeLog): boolean {
    return true;
}
export function updateLineTypeLog(value: lineTypeLog, _: Partial<lineTypeLogInputParams>) {
    return value;
}
export interface lineTypeErrorInputParams {
}
export function lineTypeError(_: lineTypeErrorInputParams = {}): lineTypeError {
    return {
        _name: 'page.lineTypeError'
    };
}
export function encodeLineTypeError(__s: ISerializer, _: lineTypeError) {
    __s.writeInt32(-640492351);
}
export function decodeLineTypeError(__d: IDeserializer): lineTypeError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -640492351) return null;
    return {
        _name: 'page.lineTypeError',
    };
}
export interface lineTypeError  {
    _name: 'page.lineTypeError';
}
export function defaultLineTypeError(params: Partial<lineTypeErrorInputParams> = {}): lineTypeError {
    return lineTypeError({
        ...params
    });
}
export function compareLineTypeError(__a: lineTypeError, __b: lineTypeError): boolean {
    return true;
}
export function updateLineTypeError(value: lineTypeError, _: Partial<lineTypeErrorInputParams>) {
    return value;
}
export interface addPageLineResultInputParams {
    id: Readonly<objectId>;
}
export function addPageLineResult(params: addPageLineResultInputParams): addPageLineResult {
    return {
        _name: 'page.addPageLineResult',
        id: params['id']
    };
}
export function encodeAddPageLineResult(__s: ISerializer, value: addPageLineResult) {
    __s.writeInt32(1696328515);
    /**
     * encoding param: id
     */
    const __pv0 = value['id'];
    encodeObjectId2(__s,__pv0);
}
export function decodeAddPageLineResult(__d: IDeserializer): addPageLineResult | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1696328515) return null;
    let id: objectId;
    /**
     * decoding param: id
     */
    const tmp2 = decodeObjectId3(__d);
    if(tmp2 === null) return null;
    id = tmp2;
    return {
        _name: 'page.addPageLineResult',
        id
    };
}
export interface addPageLineResult  {
    _name: 'page.addPageLineResult';
    id: Readonly<objectId>;
}
export function defaultAddPageLineResult(params: Partial<addPageLineResultInputParams> = {}): addPageLineResult {
    return addPageLineResult({
        id: defaultObjectId(),
        ...params
    });
}
export function compareAddPageLineResult(__a: addPageLineResult, __b: addPageLineResult): boolean {
    return (
        /**
         * compare parameter id
         */
        compareObjectId5(__a['id'],__b['id'])
    );
}
export function updateAddPageLineResult(value: addPageLineResult, changes: Partial<addPageLineResultInputParams>) {
    if(typeof changes['id'] !== 'undefined') {
        if(!(compareObjectId6(changes['id'],value['id']))) {
            value = addPageLineResult({
                ...value,
                id: changes['id'],
            });
        }
    }
    return value;
}
export interface AddPageLineInputParams {
    pageId: Readonly<objectId>;
    lineType: Readonly<LineType>;
    line: ReadonlyArray<Readonly<Value>>;
}
export function AddPageLine(params: AddPageLineInputParams): AddPageLine {
    return {
        _name: 'page.AddPageLine',
        pageId: params['pageId'],
        lineType: params['lineType'],
        line: params['line']
    };
}
export function encodeAddPageLine(__s: ISerializer, value: AddPageLine) {
    __s.writeInt32(-1837308354);
    /**
     * encoding param: pageId
     */
    const __pv0 = value['pageId'];
    encodeObjectId7(__s,__pv0);
    /**
     * encoding param: lineType
     */
    const __pv1 = value['lineType'];
    encodeLineTypeTrait(__s,__pv1);
    /**
     * encoding param: line
     */
    const __pv2 = value['line'];
    const __l3 = __pv2.length;
    __s.writeUint32(__l3);
    for(let __i3 = 0; __i3 < __l3; __i3++) {
        const __v__i3 = __pv2[__i3];
        encodeValueTrait(__s,__v__i3);
    }
}
export function decodeAddPageLine(__d: IDeserializer): AddPageLine | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1837308354) return null;
    let pageId: objectId;
    let lineType: LineType;
    let line: Array<Value>;
    /**
     * decoding param: pageId
     */
    const tmp2 = decodeObjectId8(__d);
    if(tmp2 === null) return null;
    pageId = tmp2;
    /**
     * decoding param: lineType
     */
    const __tmp3 = decodeLineTypeTrait(__d);
    if(__tmp3 === null) return null;
    lineType = __tmp3;
    /**
     * decoding param: line
     */
    const iindex4 = __d.readUint32();
    const oindex4 = new Array<Value>(iindex4);
    line = oindex4;
    for(let index4 = 0; index4 < iindex4; index4++) {
        const tmp6 = decodeValueTrait(__d);
        if(tmp6 === null) return null;
        oindex4[index4] = tmp6;
    }
    return {
        _name: 'page.AddPageLine',
        pageId,
        lineType,
        line
    };
}
export interface AddPageLine extends IRequest<Readonly<addPageLineResult>> {
    _name: 'page.AddPageLine';
    pageId: Readonly<objectId>;
    lineType: Readonly<LineType>;
    line: ReadonlyArray<Readonly<Value>>;
}
export function defaultAddPageLine(params: Partial<AddPageLineInputParams> = {}): AddPageLine {
    return AddPageLine({
        pageId: defaultObjectId(),
        lineType: defaultLineTypeTrait(),
        line: [],
        ...params
    });
}
export function compareAddPageLine(__a: AddPageLine, __b: AddPageLine): boolean {
    return (
        /**
         * compare parameter pageId
         */
        compareObjectId10(__a['pageId'],__b['pageId']) &&
        /**
         * compare parameter lineType
         */
        compareLineTypeTrait(__a['lineType'],__b['lineType']) &&
        /**
         * compare parameter line
         */
        __a['line'].length === __b['line'].length && __a['line'].every((__i,index) => (compareValueTrait(__i,__b['line'][index])))
    );
}
export function updateAddPageLine(value: AddPageLine, changes: Partial<AddPageLineInputParams>) {
    if(typeof changes['pageId'] !== 'undefined') {
        if(!(compareObjectId11(changes['pageId'],value['pageId']))) {
            value = AddPageLine({
                ...value,
                pageId: changes['pageId'],
            });
        }
    }
    if(typeof changes['lineType'] !== 'undefined') {
        if(!(compareLineTypeTrait(changes['lineType'],value['lineType']))) {
            value = AddPageLine({
                ...value,
                lineType: changes['lineType'],
            });
        }
    }
    if(typeof changes['line'] !== 'undefined') {
        if(!(changes['line'].length === value['line'].length && changes['line'].every((__i,index) => (compareValueTrait12(__i,value['line'][index]))))) {
            value = AddPageLine({
                ...value,
                line: changes['line'],
            });
        }
    }
    return value;
}
