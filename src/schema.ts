import {Error} from "./Error";
import {Value} from "./Value";
import {Result} from "./Result";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeValueTrait} from "./Value";
import {decodeValueTrait} from "./Value";
import {compareValueTrait} from "./Value";
import {compareValueTrait as compareValueTrait1} from "./Value";
import {encodeValueTrait as encodeValueTrait2} from "./Value";
import {decodeValueTrait as decodeValueTrait3} from "./Value";
import {compareValueTrait as compareValueTrait4} from "./Value";
import {compareValueTrait as compareValueTrait5} from "./Value";
export type Operation = Readonly<operationLog> | Readonly<operationError>;
export function encodeOperationTrait(__s: ISerializer,value: Operation) {
    switch(value._name) {
        case 'schema.operationLog':
            encodeOperationLog(__s,value);
            break;
        case 'schema.operationError':
            encodeOperationError(__s,value);
            break;
    }
}
export function decodeOperationTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: operationLog | operationError;
    switch(__id) {
        case -1520996480: {
            const tmp = decodeOperationLog(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -1546408058: {
            const tmp = decodeOperationError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultOperationTrait() {
    return defaultOperationLog();
}
export function compareOperationTrait(__a: Operation, __b: Operation) {
    switch(__a._name) {
        case 'schema.operationLog':
            if(__b._name !== "schema.operationLog") return false;
            return compareOperationLog(__a,__b);
        case 'schema.operationError':
            if(__b._name !== "schema.operationError") return false;
            return compareOperationError(__a,__b);
    }
}
export interface operationLogInputParams {
    args: ReadonlyArray<Readonly<Value>>;
}
export function operationLog(params: operationLogInputParams): operationLog {
    return {
        _name: 'schema.operationLog',
        args: params['args']
    };
}
export function encodeOperationLog(__s: ISerializer, value: operationLog) {
    __s.writeInt32(-1520996480);
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
export function decodeOperationLog(__d: IDeserializer): operationLog | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1520996480) return null;
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
        _name: 'schema.operationLog',
        args
    };
}
export interface operationLog  {
    _name: 'schema.operationLog';
    args: ReadonlyArray<Readonly<Value>>;
}
export function defaultOperationLog(params: Partial<operationLogInputParams> = {}): operationLog {
    return operationLog({
        args: [],
        ...params
    });
}
export function compareOperationLog(__a: operationLog, __b: operationLog): boolean {
    return (
        /**
         * compare parameter args
         */
        __a['args'].length === __b['args'].length && __a['args'].every((__i,index) => (compareValueTrait(__i,__b['args'][index])))
    );
}
export function updateOperationLog(value: operationLog, changes: Partial<operationLogInputParams>) {
    if(typeof changes['args'] !== 'undefined') {
        if(!(changes['args'].length === value['args'].length && changes['args'].every((__i,index) => (compareValueTrait1(__i,value['args'][index]))))) {
            value = operationLog({
                ...value,
                args: changes['args'],
            });
        }
    }
    return value;
}
export interface operationErrorInputParams {
    args: ReadonlyArray<Readonly<Value>>;
}
export function operationError(params: operationErrorInputParams): operationError {
    return {
        _name: 'schema.operationError',
        args: params['args']
    };
}
export function encodeOperationError(__s: ISerializer, value: operationError) {
    __s.writeInt32(-1546408058);
    /**
     * encoding param: args
     */
    const __pv0 = value['args'];
    const __l1 = __pv0.length;
    __s.writeUint32(__l1);
    for(let __i1 = 0; __i1 < __l1; __i1++) {
        const __v__i1 = __pv0[__i1];
        encodeValueTrait2(__s,__v__i1);
    }
}
export function decodeOperationError(__d: IDeserializer): operationError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1546408058) return null;
    let args: Array<Value>;
    /**
     * decoding param: args
     */
    const iindex1 = __d.readUint32();
    const oindex1 = new Array<Value>(iindex1);
    args = oindex1;
    for(let index1 = 0; index1 < iindex1; index1++) {
        const tmp3 = decodeValueTrait3(__d);
        if(tmp3 === null) return null;
        oindex1[index1] = tmp3;
    }
    return {
        _name: 'schema.operationError',
        args
    };
}
export interface operationError  {
    _name: 'schema.operationError';
    args: ReadonlyArray<Readonly<Value>>;
}
export function defaultOperationError(params: Partial<operationErrorInputParams> = {}): operationError {
    return operationError({
        args: [],
        ...params
    });
}
export function compareOperationError(__a: operationError, __b: operationError): boolean {
    return (
        /**
         * compare parameter args
         */
        __a['args'].length === __b['args'].length && __a['args'].every((__i,index) => (compareValueTrait4(__i,__b['args'][index])))
    );
}
export function updateOperationError(value: operationError, changes: Partial<operationErrorInputParams>) {
    if(typeof changes['args'] !== 'undefined') {
        if(!(changes['args'].length === value['args'].length && changes['args'].every((__i,index) => (compareValueTrait5(__i,value['args'][index]))))) {
            value = operationError({
                ...value,
                args: changes['args'],
            });
        }
    }
    return value;
}
