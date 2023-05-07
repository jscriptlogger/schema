import {Request} from "./Request";
import {Result} from "./Result";
import {Error} from "./Error";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeRequestTrait} from "./Request";
import {decodeRequestTrait} from "./Request";
import {defaultRequestTrait} from "./Request";
import {compareRequestTrait} from "./Request";
import {compareRequestTrait as compareRequestTrait1} from "./Request";
import {encodeResultTrait} from "./Result";
import {decodeResultTrait} from "./Result";
import {defaultResultTrait} from "./Result";
import {compareResultTrait} from "./Result";
import {compareResultTrait as compareResultTrait2} from "./Result";
import {encodeErrorTrait} from "./Error";
import {decodeErrorTrait} from "./Error";
import {defaultErrorTrait} from "./Error";
import {compareErrorTrait} from "./Error";
import {compareErrorTrait as compareErrorTrait3} from "./Error";
import {encodeErrorTrait as encodeErrorTrait4} from "./Error";
import {decodeErrorTrait as decodeErrorTrait5} from "./Error";
import {defaultErrorTrait as defaultErrorTrait6} from "./Error";
import {compareErrorTrait as compareErrorTrait7} from "./Error";
import {compareErrorTrait as compareErrorTrait8} from "./Error";
export type Message = Readonly<messageRequest> | Readonly<messageResultSuccess> | Readonly<messageResultError> | Readonly<messageProtocolError>;
export function encodeMessageTrait(__s: ISerializer,value: Message) {
    switch(value._name) {
        case 'protocol.messageRequest':
            encodeMessageRequest(__s,value);
            break;
        case 'protocol.messageResultSuccess':
            encodeMessageResultSuccess(__s,value);
            break;
        case 'protocol.messageResultError':
            encodeMessageResultError(__s,value);
            break;
        case 'protocol.messageProtocolError':
            encodeMessageProtocolError(__s,value);
            break;
    }
}
export function decodeMessageTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: messageRequest | messageResultSuccess | messageResultError | messageProtocolError;
    switch(__id) {
        case -1155148981: {
            const tmp = decodeMessageRequest(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -1223033196: {
            const tmp = decodeMessageResultSuccess(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1695954647: {
            const tmp = decodeMessageResultError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -1084468548: {
            const tmp = decodeMessageProtocolError(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultMessageTrait() {
    return defaultMessageRequest();
}
export function compareMessageTrait(__a: Message, __b: Message) {
    switch(__a._name) {
        case 'protocol.messageRequest':
            if(__b._name !== "protocol.messageRequest") return false;
            return compareMessageRequest(__a,__b);
        case 'protocol.messageResultSuccess':
            if(__b._name !== "protocol.messageResultSuccess") return false;
            return compareMessageResultSuccess(__a,__b);
        case 'protocol.messageResultError':
            if(__b._name !== "protocol.messageResultError") return false;
            return compareMessageResultError(__a,__b);
        case 'protocol.messageProtocolError':
            if(__b._name !== "protocol.messageProtocolError") return false;
            return compareMessageProtocolError(__a,__b);
    }
}
export interface messageRequestInputParams {
    requestId: string;
    sessionId: string;
    request: Readonly<Request>;
}
export function messageRequest(params: messageRequestInputParams): messageRequest {
    return {
        _name: 'protocol.messageRequest',
        requestId: params['requestId'],
        sessionId: params['sessionId'],
        request: params['request']
    };
}
export function encodeMessageRequest(__s: ISerializer, value: messageRequest) {
    __s.writeInt32(-1155148981);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    __s.writeUnsignedLong(__pv0);
    /**
     * encoding param: sessionId
     */
    const __pv1 = value['sessionId'];
    __s.writeUnsignedLong(__pv1);
    /**
     * encoding param: request
     */
    const __pv2 = value['request'];
    encodeRequestTrait(__s,__pv2);
}
export function decodeMessageRequest(__d: IDeserializer): messageRequest | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1155148981) return null;
    let requestId: string;
    let sessionId: string;
    let request: Request;
    /**
     * decoding param: requestId
     */
    requestId = __d.readUnsignedLong();
    /**
     * decoding param: sessionId
     */
    sessionId = __d.readUnsignedLong();
    /**
     * decoding param: request
     */
    const tmp4 = decodeRequestTrait(__d);
    if(tmp4 === null) return null;
    request = tmp4;
    return {
        _name: 'protocol.messageRequest',
        requestId,
        sessionId,
        request
    };
}
export interface messageRequest  {
    _name: 'protocol.messageRequest';
    requestId: string;
    sessionId: string;
    request: Readonly<Request>;
}
export function defaultMessageRequest(params: Partial<messageRequestInputParams> = {}): messageRequest {
    return messageRequest({
        requestId: "0",
        sessionId: "0",
        request: defaultRequestTrait(),
        ...params
    });
}
export function compareMessageRequest(__a: messageRequest, __b: messageRequest): boolean {
    return (
        /**
         * compare parameter requestId
         */
        __a['requestId'] === __b['requestId'] &&
        /**
         * compare parameter sessionId
         */
        __a['sessionId'] === __b['sessionId'] &&
        /**
         * compare parameter request
         */
        compareRequestTrait(__a['request'],__b['request'])
    );
}
export function updateMessageRequest(value: messageRequest, changes: Partial<messageRequestInputParams>) {
    if(typeof changes['requestId'] !== 'undefined') {
        if(!(changes['requestId'] === value['requestId'])) {
            value = messageRequest({
                ...value,
                requestId: changes['requestId'],
            });
        }
    }
    if(typeof changes['sessionId'] !== 'undefined') {
        if(!(changes['sessionId'] === value['sessionId'])) {
            value = messageRequest({
                ...value,
                sessionId: changes['sessionId'],
            });
        }
    }
    if(typeof changes['request'] !== 'undefined') {
        if(!(compareRequestTrait1(changes['request'],value['request']))) {
            value = messageRequest({
                ...value,
                request: changes['request'],
            });
        }
    }
    return value;
}
export interface messageResultSuccessInputParams {
    requestId: string;
    result: Readonly<Result>;
}
export function messageResultSuccess(params: messageResultSuccessInputParams): messageResultSuccess {
    return {
        _name: 'protocol.messageResultSuccess',
        requestId: params['requestId'],
        result: params['result']
    };
}
export function encodeMessageResultSuccess(__s: ISerializer, value: messageResultSuccess) {
    __s.writeInt32(-1223033196);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    __s.writeUnsignedLong(__pv0);
    /**
     * encoding param: result
     */
    const __pv1 = value['result'];
    encodeResultTrait(__s,__pv1);
}
export function decodeMessageResultSuccess(__d: IDeserializer): messageResultSuccess | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1223033196) return null;
    let requestId: string;
    let result: Result;
    /**
     * decoding param: requestId
     */
    requestId = __d.readUnsignedLong();
    /**
     * decoding param: result
     */
    const tmp3 = decodeResultTrait(__d);
    if(tmp3 === null) return null;
    result = tmp3;
    return {
        _name: 'protocol.messageResultSuccess',
        requestId,
        result
    };
}
export interface messageResultSuccess  {
    _name: 'protocol.messageResultSuccess';
    requestId: string;
    result: Readonly<Result>;
}
export function defaultMessageResultSuccess(params: Partial<messageResultSuccessInputParams> = {}): messageResultSuccess {
    return messageResultSuccess({
        requestId: "0",
        result: defaultResultTrait(),
        ...params
    });
}
export function compareMessageResultSuccess(__a: messageResultSuccess, __b: messageResultSuccess): boolean {
    return (
        /**
         * compare parameter requestId
         */
        __a['requestId'] === __b['requestId'] &&
        /**
         * compare parameter result
         */
        compareResultTrait(__a['result'],__b['result'])
    );
}
export function updateMessageResultSuccess(value: messageResultSuccess, changes: Partial<messageResultSuccessInputParams>) {
    if(typeof changes['requestId'] !== 'undefined') {
        if(!(changes['requestId'] === value['requestId'])) {
            value = messageResultSuccess({
                ...value,
                requestId: changes['requestId'],
            });
        }
    }
    if(typeof changes['result'] !== 'undefined') {
        if(!(compareResultTrait2(changes['result'],value['result']))) {
            value = messageResultSuccess({
                ...value,
                result: changes['result'],
            });
        }
    }
    return value;
}
export interface messageResultErrorInputParams {
    requestId: string;
    error: Readonly<Error>;
}
export function messageResultError(params: messageResultErrorInputParams): messageResultError {
    return {
        _name: 'protocol.messageResultError',
        requestId: params['requestId'],
        error: params['error']
    };
}
export function encodeMessageResultError(__s: ISerializer, value: messageResultError) {
    __s.writeInt32(1695954647);
    /**
     * encoding param: requestId
     */
    const __pv0 = value['requestId'];
    __s.writeUnsignedLong(__pv0);
    /**
     * encoding param: error
     */
    const __pv1 = value['error'];
    encodeErrorTrait(__s,__pv1);
}
export function decodeMessageResultError(__d: IDeserializer): messageResultError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1695954647) return null;
    let requestId: string;
    let error: Error;
    /**
     * decoding param: requestId
     */
    requestId = __d.readUnsignedLong();
    /**
     * decoding param: error
     */
    const tmp3 = decodeErrorTrait(__d);
    if(tmp3 === null) return null;
    error = tmp3;
    return {
        _name: 'protocol.messageResultError',
        requestId,
        error
    };
}
export interface messageResultError  {
    _name: 'protocol.messageResultError';
    requestId: string;
    error: Readonly<Error>;
}
export function defaultMessageResultError(params: Partial<messageResultErrorInputParams> = {}): messageResultError {
    return messageResultError({
        requestId: "0",
        error: defaultErrorTrait(),
        ...params
    });
}
export function compareMessageResultError(__a: messageResultError, __b: messageResultError): boolean {
    return (
        /**
         * compare parameter requestId
         */
        __a['requestId'] === __b['requestId'] &&
        /**
         * compare parameter error
         */
        compareErrorTrait(__a['error'],__b['error'])
    );
}
export function updateMessageResultError(value: messageResultError, changes: Partial<messageResultErrorInputParams>) {
    if(typeof changes['requestId'] !== 'undefined') {
        if(!(changes['requestId'] === value['requestId'])) {
            value = messageResultError({
                ...value,
                requestId: changes['requestId'],
            });
        }
    }
    if(typeof changes['error'] !== 'undefined') {
        if(!(compareErrorTrait3(changes['error'],value['error']))) {
            value = messageResultError({
                ...value,
                error: changes['error'],
            });
        }
    }
    return value;
}
export interface messageProtocolErrorInputParams {
    error: Readonly<Error>;
}
export function messageProtocolError(params: messageProtocolErrorInputParams): messageProtocolError {
    return {
        _name: 'protocol.messageProtocolError',
        error: params['error']
    };
}
export function encodeMessageProtocolError(__s: ISerializer, value: messageProtocolError) {
    __s.writeInt32(-1084468548);
    /**
     * encoding param: error
     */
    const __pv0 = value['error'];
    encodeErrorTrait4(__s,__pv0);
}
export function decodeMessageProtocolError(__d: IDeserializer): messageProtocolError | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1084468548) return null;
    let error: Error;
    /**
     * decoding param: error
     */
    const tmp2 = decodeErrorTrait5(__d);
    if(tmp2 === null) return null;
    error = tmp2;
    return {
        _name: 'protocol.messageProtocolError',
        error
    };
}
export interface messageProtocolError  {
    _name: 'protocol.messageProtocolError';
    error: Readonly<Error>;
}
export function defaultMessageProtocolError(params: Partial<messageProtocolErrorInputParams> = {}): messageProtocolError {
    return messageProtocolError({
        error: defaultErrorTrait(),
        ...params
    });
}
export function compareMessageProtocolError(__a: messageProtocolError, __b: messageProtocolError): boolean {
    return (
        /**
         * compare parameter error
         */
        compareErrorTrait7(__a['error'],__b['error'])
    );
}
export function updateMessageProtocolError(value: messageProtocolError, changes: Partial<messageProtocolErrorInputParams>) {
    if(typeof changes['error'] !== 'undefined') {
        if(!(compareErrorTrait8(changes['error'],value['error']))) {
            value = messageProtocolError({
                ...value,
                error: changes['error'],
            });
        }
    }
    return value;
}
