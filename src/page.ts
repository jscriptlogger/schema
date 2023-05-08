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
import {encodeObjectId as encodeObjectId13} from "./objectId";
import {decodeObjectId as decodeObjectId14} from "./objectId";
import {defaultObjectId as defaultObjectId15} from "./objectId";
import {compareObjectId as compareObjectId16} from "./objectId";
import {compareObjectId as compareObjectId17} from "./objectId";
import {encodeObjectId as encodeObjectId18} from "./objectId";
import {encodeValueTrait as encodeValueTrait19} from "./value";
import {decodeObjectId as decodeObjectId20} from "./objectId";
import {decodeValueTrait as decodeValueTrait21} from "./value";
import {defaultObjectId as defaultObjectId22} from "./objectId";
import {compareObjectId as compareObjectId23} from "./objectId";
import {compareValueTrait as compareValueTrait24} from "./value";
import {compareObjectId as compareObjectId25} from "./objectId";
import {compareValueTrait as compareValueTrait26} from "./value";
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
export interface pageInputParams {
    id: Readonly<objectId>;
    title: string;
}
export function page(params: pageInputParams): page {
    return {
        _name: 'page.page',
        id: params['id'],
        title: params['title']
    };
}
export function encodePage(__s: ISerializer, value: page) {
    __s.writeInt32(1103505213);
    /**
     * encoding param: id
     */
    const __pv0 = value['id'];
    encodeObjectId13(__s,__pv0);
    /**
     * encoding param: title
     */
    const __pv1 = value['title'];
    __s.writeString(__pv1);
}
export function decodePage(__d: IDeserializer): page | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1103505213) return null;
    let id: objectId;
    let title: string;
    /**
     * decoding param: id
     */
    const tmp2 = decodeObjectId14(__d);
    if(tmp2 === null) return null;
    id = tmp2;
    /**
     * decoding param: title
     */
    title = __d.readString();
    return {
        _name: 'page.page',
        id,
        title
    };
}
export interface page  {
    _name: 'page.page';
    id: Readonly<objectId>;
    title: string;
}
export function defaultPage(params: Partial<pageInputParams> = {}): page {
    return page({
        id: defaultObjectId(),
        title: "",
        ...params
    });
}
export function comparePage(__a: page, __b: page): boolean {
    return (
        /**
         * compare parameter id
         */
        compareObjectId16(__a['id'],__b['id']) &&
        /**
         * compare parameter title
         */
        __a['title'] === __b['title']
    );
}
export function updatePage(value: page, changes: Partial<pageInputParams>) {
    if(typeof changes['id'] !== 'undefined') {
        if(!(compareObjectId17(changes['id'],value['id']))) {
            value = page({
                ...value,
                id: changes['id'],
            });
        }
    }
    if(typeof changes['title'] !== 'undefined') {
        if(!(changes['title'] === value['title'])) {
            value = page({
                ...value,
                title: changes['title'],
            });
        }
    }
    return value;
}
export interface getPagesResultInputParams {
    list: ReadonlyArray<Readonly<page>>;
}
export function getPagesResult(params: getPagesResultInputParams): getPagesResult {
    return {
        _name: 'page.getPagesResult',
        list: params['list']
    };
}
export function encodeGetPagesResult(__s: ISerializer, value: getPagesResult) {
    __s.writeInt32(946495797);
    /**
     * encoding param: list
     */
    const __pv0 = value['list'];
    const __l1 = __pv0.length;
    __s.writeUint32(__l1);
    for(let __i1 = 0; __i1 < __l1; __i1++) {
        const __v__i1 = __pv0[__i1];
        encodePage(__s,__v__i1);
    }
}
export function decodeGetPagesResult(__d: IDeserializer): getPagesResult | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 946495797) return null;
    let list: Array<page>;
    /**
     * decoding param: list
     */
    const iindex1 = __d.readUint32();
    const oindex1 = new Array<page>(iindex1);
    list = oindex1;
    for(let index1 = 0; index1 < iindex1; index1++) {
        const __tmp2 = decodePage(__d);
        if(__tmp2 === null) return null;
        oindex1[index1] = __tmp2;
    }
    return {
        _name: 'page.getPagesResult',
        list
    };
}
export interface getPagesResult  {
    _name: 'page.getPagesResult';
    list: ReadonlyArray<Readonly<page>>;
}
export function defaultGetPagesResult(params: Partial<getPagesResultInputParams> = {}): getPagesResult {
    return getPagesResult({
        list: [],
        ...params
    });
}
export function compareGetPagesResult(__a: getPagesResult, __b: getPagesResult): boolean {
    return (
        /**
         * compare parameter list
         */
        __a['list'].length === __b['list'].length && __a['list'].every((__i,index) => (comparePage(__i,__b['list'][index])))
    );
}
export function updateGetPagesResult(value: getPagesResult, changes: Partial<getPagesResultInputParams>) {
    if(typeof changes['list'] !== 'undefined') {
        if(!(changes['list'].length === value['list'].length && changes['list'].every((__i,index) => (comparePage(__i,value['list'][index]))))) {
            value = getPagesResult({
                ...value,
                list: changes['list'],
            });
        }
    }
    return value;
}
export interface GetPagesInputParams {
    offset: number;
    limit: number;
}
export function GetPages(params: GetPagesInputParams): GetPages {
    return {
        _name: 'page.GetPages',
        offset: params['offset'],
        limit: params['limit']
    };
}
export function encodeGetPages(__s: ISerializer, value: GetPages) {
    __s.writeInt32(-1800035027);
    /**
     * encoding param: offset
     */
    const __pv0 = value['offset'];
    __s.writeUint32(__pv0);
    /**
     * encoding param: limit
     */
    const __pv1 = value['limit'];
    __s.writeUint32(__pv1);
}
export function decodeGetPages(__d: IDeserializer): GetPages | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1800035027) return null;
    let offset: number;
    let limit: number;
    /**
     * decoding param: offset
     */
    offset = __d.readUint32();
    /**
     * decoding param: limit
     */
    limit = __d.readUint32();
    return {
        _name: 'page.GetPages',
        offset,
        limit
    };
}
export interface GetPages extends IRequest<Readonly<getPagesResult>> {
    _name: 'page.GetPages';
    offset: number;
    limit: number;
}
export function defaultGetPages(params: Partial<GetPagesInputParams> = {}): GetPages {
    return GetPages({
        offset: 0,
        limit: 0,
        ...params
    });
}
export function compareGetPages(__a: GetPages, __b: GetPages): boolean {
    return (
        /**
         * compare parameter offset
         */
        __a['offset'] === __b['offset'] &&
        /**
         * compare parameter limit
         */
        __a['limit'] === __b['limit']
    );
}
export function updateGetPages(value: GetPages, changes: Partial<GetPagesInputParams>) {
    if(typeof changes['offset'] !== 'undefined') {
        if(!(changes['offset'] === value['offset'])) {
            value = GetPages({
                ...value,
                offset: changes['offset'],
            });
        }
    }
    if(typeof changes['limit'] !== 'undefined') {
        if(!(changes['limit'] === value['limit'])) {
            value = GetPages({
                ...value,
                limit: changes['limit'],
            });
        }
    }
    return value;
}
export interface pageLineInputParams {
    id: Readonly<objectId>;
    values: ReadonlyArray<Readonly<Value>>;
}
export function pageLine(params: pageLineInputParams): pageLine {
    return {
        _name: 'page.pageLine',
        id: params['id'],
        values: params['values']
    };
}
export function encodePageLine(__s: ISerializer, value: pageLine) {
    __s.writeInt32(1832741810);
    /**
     * encoding param: id
     */
    const __pv0 = value['id'];
    encodeObjectId18(__s,__pv0);
    /**
     * encoding param: values
     */
    const __pv1 = value['values'];
    const __l2 = __pv1.length;
    __s.writeUint32(__l2);
    for(let __i2 = 0; __i2 < __l2; __i2++) {
        const __v__i2 = __pv1[__i2];
        encodeValueTrait19(__s,__v__i2);
    }
}
export function decodePageLine(__d: IDeserializer): pageLine | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1832741810) return null;
    let id: objectId;
    let values: Array<Value>;
    /**
     * decoding param: id
     */
    const tmp2 = decodeObjectId20(__d);
    if(tmp2 === null) return null;
    id = tmp2;
    /**
     * decoding param: values
     */
    const iindex3 = __d.readUint32();
    const oindex3 = new Array<Value>(iindex3);
    values = oindex3;
    for(let index3 = 0; index3 < iindex3; index3++) {
        const tmp5 = decodeValueTrait21(__d);
        if(tmp5 === null) return null;
        oindex3[index3] = tmp5;
    }
    return {
        _name: 'page.pageLine',
        id,
        values
    };
}
export interface pageLine  {
    _name: 'page.pageLine';
    id: Readonly<objectId>;
    values: ReadonlyArray<Readonly<Value>>;
}
export function defaultPageLine(params: Partial<pageLineInputParams> = {}): pageLine {
    return pageLine({
        id: defaultObjectId(),
        values: [],
        ...params
    });
}
export function comparePageLine(__a: pageLine, __b: pageLine): boolean {
    return (
        /**
         * compare parameter id
         */
        compareObjectId23(__a['id'],__b['id']) &&
        /**
         * compare parameter values
         */
        __a['values'].length === __b['values'].length && __a['values'].every((__i,index) => (compareValueTrait24(__i,__b['values'][index])))
    );
}
export function updatePageLine(value: pageLine, changes: Partial<pageLineInputParams>) {
    if(typeof changes['id'] !== 'undefined') {
        if(!(compareObjectId25(changes['id'],value['id']))) {
            value = pageLine({
                ...value,
                id: changes['id'],
            });
        }
    }
    if(typeof changes['values'] !== 'undefined') {
        if(!(changes['values'].length === value['values'].length && changes['values'].every((__i,index) => (compareValueTrait26(__i,value['values'][index]))))) {
            value = pageLine({
                ...value,
                values: changes['values'],
            });
        }
    }
    return value;
}
export interface getPageLinesResultInputParams {
    list: ReadonlyArray<Readonly<pageLine>>;
}
export function getPageLinesResult(params: getPageLinesResultInputParams): getPageLinesResult {
    return {
        _name: 'page.getPageLinesResult',
        list: params['list']
    };
}
export function encodeGetPageLinesResult(__s: ISerializer, value: getPageLinesResult) {
    __s.writeInt32(-1385814249);
    /**
     * encoding param: list
     */
    const __pv0 = value['list'];
    const __l1 = __pv0.length;
    __s.writeUint32(__l1);
    for(let __i1 = 0; __i1 < __l1; __i1++) {
        const __v__i1 = __pv0[__i1];
        encodePageLine(__s,__v__i1);
    }
}
export function decodeGetPageLinesResult(__d: IDeserializer): getPageLinesResult | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1385814249) return null;
    let list: Array<pageLine>;
    /**
     * decoding param: list
     */
    const iindex1 = __d.readUint32();
    const oindex1 = new Array<pageLine>(iindex1);
    list = oindex1;
    for(let index1 = 0; index1 < iindex1; index1++) {
        const __tmp2 = decodePageLine(__d);
        if(__tmp2 === null) return null;
        oindex1[index1] = __tmp2;
    }
    return {
        _name: 'page.getPageLinesResult',
        list
    };
}
export interface getPageLinesResult  {
    _name: 'page.getPageLinesResult';
    list: ReadonlyArray<Readonly<pageLine>>;
}
export function defaultGetPageLinesResult(params: Partial<getPageLinesResultInputParams> = {}): getPageLinesResult {
    return getPageLinesResult({
        list: [],
        ...params
    });
}
export function compareGetPageLinesResult(__a: getPageLinesResult, __b: getPageLinesResult): boolean {
    return (
        /**
         * compare parameter list
         */
        __a['list'].length === __b['list'].length && __a['list'].every((__i,index) => (comparePageLine(__i,__b['list'][index])))
    );
}
export function updateGetPageLinesResult(value: getPageLinesResult, changes: Partial<getPageLinesResultInputParams>) {
    if(typeof changes['list'] !== 'undefined') {
        if(!(changes['list'].length === value['list'].length && changes['list'].every((__i,index) => (comparePageLine(__i,value['list'][index]))))) {
            value = getPageLinesResult({
                ...value,
                list: changes['list'],
            });
        }
    }
    return value;
}
export interface GetPageLinesInputParams {
    offset: number;
    limit: number;
}
export function GetPageLines(params: GetPageLinesInputParams): GetPageLines {
    return {
        _name: 'page.GetPageLines',
        offset: params['offset'],
        limit: params['limit']
    };
}
export function encodeGetPageLines(__s: ISerializer, value: GetPageLines) {
    __s.writeInt32(-326434732);
    /**
     * encoding param: offset
     */
    const __pv0 = value['offset'];
    __s.writeUint32(__pv0);
    /**
     * encoding param: limit
     */
    const __pv1 = value['limit'];
    __s.writeUint32(__pv1);
}
export function decodeGetPageLines(__d: IDeserializer): GetPageLines | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -326434732) return null;
    let offset: number;
    let limit: number;
    /**
     * decoding param: offset
     */
    offset = __d.readUint32();
    /**
     * decoding param: limit
     */
    limit = __d.readUint32();
    return {
        _name: 'page.GetPageLines',
        offset,
        limit
    };
}
export interface GetPageLines extends IRequest<Readonly<getPageLinesResult>> {
    _name: 'page.GetPageLines';
    offset: number;
    limit: number;
}
export function defaultGetPageLines(params: Partial<GetPageLinesInputParams> = {}): GetPageLines {
    return GetPageLines({
        offset: 0,
        limit: 0,
        ...params
    });
}
export function compareGetPageLines(__a: GetPageLines, __b: GetPageLines): boolean {
    return (
        /**
         * compare parameter offset
         */
        __a['offset'] === __b['offset'] &&
        /**
         * compare parameter limit
         */
        __a['limit'] === __b['limit']
    );
}
export function updateGetPageLines(value: GetPageLines, changes: Partial<GetPageLinesInputParams>) {
    if(typeof changes['offset'] !== 'undefined') {
        if(!(changes['offset'] === value['offset'])) {
            value = GetPageLines({
                ...value,
                offset: changes['offset'],
            });
        }
    }
    if(typeof changes['limit'] !== 'undefined') {
        if(!(changes['limit'] === value['limit'])) {
            value = GetPageLines({
                ...value,
                limit: changes['limit'],
            });
        }
    }
    return value;
}
