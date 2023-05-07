import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
export type Error = Readonly<errorMessageDecodingFailure> | Readonly<errorDatabaseFailure> | Readonly<errorUnknownFailure>;
export function encodeErrorTrait(__s: ISerializer,value: Error) {
    switch(value._name) {
        case 'error.errorMessageDecodingFailure':
            encodeErrorMessageDecodingFailure(__s,value);
            break;
        case 'error.errorDatabaseFailure':
            encodeErrorDatabaseFailure(__s,value);
            break;
        case 'error.errorUnknownFailure':
            encodeErrorUnknownFailure(__s,value);
            break;
    }
}
export function decodeErrorTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: errorMessageDecodingFailure | errorDatabaseFailure | errorUnknownFailure;
    switch(__id) {
        case -244340814: {
            const tmp = decodeErrorMessageDecodingFailure(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 973517373: {
            const tmp = decodeErrorDatabaseFailure(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case -2037436243: {
            const tmp = decodeErrorUnknownFailure(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultErrorTrait() {
    return defaultErrorMessageDecodingFailure();
}
export function compareErrorTrait(__a: Error, __b: Error) {
    switch(__a._name) {
        case 'error.errorMessageDecodingFailure':
            if(__b._name !== "error.errorMessageDecodingFailure") return false;
            return compareErrorMessageDecodingFailure(__a,__b);
        case 'error.errorDatabaseFailure':
            if(__b._name !== "error.errorDatabaseFailure") return false;
            return compareErrorDatabaseFailure(__a,__b);
        case 'error.errorUnknownFailure':
            if(__b._name !== "error.errorUnknownFailure") return false;
            return compareErrorUnknownFailure(__a,__b);
    }
}
export interface errorMessageDecodingFailureInputParams {
}
export function errorMessageDecodingFailure(_: errorMessageDecodingFailureInputParams = {}): errorMessageDecodingFailure {
    return {
        _name: 'error.errorMessageDecodingFailure'
    };
}
export function encodeErrorMessageDecodingFailure(__s: ISerializer, _: errorMessageDecodingFailure) {
    __s.writeInt32(-244340814);
}
export function decodeErrorMessageDecodingFailure(__d: IDeserializer): errorMessageDecodingFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -244340814) return null;
    return {
        _name: 'error.errorMessageDecodingFailure',
    };
}
export interface errorMessageDecodingFailure  {
    _name: 'error.errorMessageDecodingFailure';
}
export function defaultErrorMessageDecodingFailure(params: Partial<errorMessageDecodingFailureInputParams> = {}): errorMessageDecodingFailure {
    return errorMessageDecodingFailure({
        ...params
    });
}
export function compareErrorMessageDecodingFailure(__a: errorMessageDecodingFailure, __b: errorMessageDecodingFailure): boolean {
    return true;
}
export function updateErrorMessageDecodingFailure(value: errorMessageDecodingFailure, _: Partial<errorMessageDecodingFailureInputParams>) {
    return value;
}
export interface errorDatabaseFailureInputParams {
}
export function errorDatabaseFailure(_: errorDatabaseFailureInputParams = {}): errorDatabaseFailure {
    return {
        _name: 'error.errorDatabaseFailure'
    };
}
export function encodeErrorDatabaseFailure(__s: ISerializer, _: errorDatabaseFailure) {
    __s.writeInt32(973517373);
}
export function decodeErrorDatabaseFailure(__d: IDeserializer): errorDatabaseFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 973517373) return null;
    return {
        _name: 'error.errorDatabaseFailure',
    };
}
export interface errorDatabaseFailure  {
    _name: 'error.errorDatabaseFailure';
}
export function defaultErrorDatabaseFailure(params: Partial<errorDatabaseFailureInputParams> = {}): errorDatabaseFailure {
    return errorDatabaseFailure({
        ...params
    });
}
export function compareErrorDatabaseFailure(__a: errorDatabaseFailure, __b: errorDatabaseFailure): boolean {
    return true;
}
export function updateErrorDatabaseFailure(value: errorDatabaseFailure, _: Partial<errorDatabaseFailureInputParams>) {
    return value;
}
export interface errorUnknownFailureInputParams {
}
export function errorUnknownFailure(_: errorUnknownFailureInputParams = {}): errorUnknownFailure {
    return {
        _name: 'error.errorUnknownFailure'
    };
}
export function encodeErrorUnknownFailure(__s: ISerializer, _: errorUnknownFailure) {
    __s.writeInt32(-2037436243);
}
export function decodeErrorUnknownFailure(__d: IDeserializer): errorUnknownFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -2037436243) return null;
    return {
        _name: 'error.errorUnknownFailure',
    };
}
export interface errorUnknownFailure  {
    _name: 'error.errorUnknownFailure';
}
export function defaultErrorUnknownFailure(params: Partial<errorUnknownFailureInputParams> = {}): errorUnknownFailure {
    return errorUnknownFailure({
        ...params
    });
}
export function compareErrorUnknownFailure(__a: errorUnknownFailure, __b: errorUnknownFailure): boolean {
    return true;
}
export function updateErrorUnknownFailure(value: errorUnknownFailure, _: Partial<errorUnknownFailureInputParams>) {
    return value;
}
