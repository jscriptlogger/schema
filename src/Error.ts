import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
export type Error = Readonly<ErrorMessageDecodingFailure> | Readonly<ErrorDatabaseFailure> | Readonly<ErrorUnknownFailure>;
export function encodeErrorTrait(__s: ISerializer,value: Error) {
    switch(value._name) {
        case 'error.ErrorMessageDecodingFailure':
            encodeErrorMessageDecodingFailure(__s,value);
            break;
        case 'error.ErrorDatabaseFailure':
            encodeErrorDatabaseFailure(__s,value);
            break;
        case 'error.ErrorUnknownFailure':
            encodeErrorUnknownFailure(__s,value);
            break;
    }
}
export function decodeErrorTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: ErrorMessageDecodingFailure | ErrorDatabaseFailure | ErrorUnknownFailure;
    switch(__id) {
        case 280485814: {
            const tmp = decodeErrorMessageDecodingFailure(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 954449573: {
            const tmp = decodeErrorDatabaseFailure(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 235971182: {
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
        case 'error.ErrorMessageDecodingFailure':
            if(__b._name !== "error.ErrorMessageDecodingFailure") return false;
            return compareErrorMessageDecodingFailure(__a,__b);
        case 'error.ErrorDatabaseFailure':
            if(__b._name !== "error.ErrorDatabaseFailure") return false;
            return compareErrorDatabaseFailure(__a,__b);
        case 'error.ErrorUnknownFailure':
            if(__b._name !== "error.ErrorUnknownFailure") return false;
            return compareErrorUnknownFailure(__a,__b);
    }
}
export interface ErrorMessageDecodingFailureInputParams {
}
export function ErrorMessageDecodingFailure(_: ErrorMessageDecodingFailureInputParams = {}): ErrorMessageDecodingFailure {
    return {
        _name: 'error.ErrorMessageDecodingFailure'
    };
}
export function encodeErrorMessageDecodingFailure(__s: ISerializer, _: ErrorMessageDecodingFailure) {
    __s.writeInt32(280485814);
}
export function decodeErrorMessageDecodingFailure(__d: IDeserializer): ErrorMessageDecodingFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 280485814) return null;
    return {
        _name: 'error.ErrorMessageDecodingFailure',
    };
}
export interface ErrorMessageDecodingFailure  {
    _name: 'error.ErrorMessageDecodingFailure';
}
export function defaultErrorMessageDecodingFailure(params: Partial<ErrorMessageDecodingFailureInputParams> = {}): ErrorMessageDecodingFailure {
    return ErrorMessageDecodingFailure({
        ...params
    });
}
export function compareErrorMessageDecodingFailure(__a: ErrorMessageDecodingFailure, __b: ErrorMessageDecodingFailure): boolean {
    return true;
}
export function updateErrorMessageDecodingFailure(value: ErrorMessageDecodingFailure, _: Partial<ErrorMessageDecodingFailureInputParams>) {
    return value;
}
export interface ErrorDatabaseFailureInputParams {
}
export function ErrorDatabaseFailure(_: ErrorDatabaseFailureInputParams = {}): ErrorDatabaseFailure {
    return {
        _name: 'error.ErrorDatabaseFailure'
    };
}
export function encodeErrorDatabaseFailure(__s: ISerializer, _: ErrorDatabaseFailure) {
    __s.writeInt32(954449573);
}
export function decodeErrorDatabaseFailure(__d: IDeserializer): ErrorDatabaseFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 954449573) return null;
    return {
        _name: 'error.ErrorDatabaseFailure',
    };
}
export interface ErrorDatabaseFailure  {
    _name: 'error.ErrorDatabaseFailure';
}
export function defaultErrorDatabaseFailure(params: Partial<ErrorDatabaseFailureInputParams> = {}): ErrorDatabaseFailure {
    return ErrorDatabaseFailure({
        ...params
    });
}
export function compareErrorDatabaseFailure(__a: ErrorDatabaseFailure, __b: ErrorDatabaseFailure): boolean {
    return true;
}
export function updateErrorDatabaseFailure(value: ErrorDatabaseFailure, _: Partial<ErrorDatabaseFailureInputParams>) {
    return value;
}
export interface ErrorUnknownFailureInputParams {
}
export function ErrorUnknownFailure(_: ErrorUnknownFailureInputParams = {}): ErrorUnknownFailure {
    return {
        _name: 'error.ErrorUnknownFailure'
    };
}
export function encodeErrorUnknownFailure(__s: ISerializer, _: ErrorUnknownFailure) {
    __s.writeInt32(235971182);
}
export function decodeErrorUnknownFailure(__d: IDeserializer): ErrorUnknownFailure | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 235971182) return null;
    return {
        _name: 'error.ErrorUnknownFailure',
    };
}
export interface ErrorUnknownFailure  {
    _name: 'error.ErrorUnknownFailure';
}
export function defaultErrorUnknownFailure(params: Partial<ErrorUnknownFailureInputParams> = {}): ErrorUnknownFailure {
    return ErrorUnknownFailure({
        ...params
    });
}
export function compareErrorUnknownFailure(__a: ErrorUnknownFailure, __b: ErrorUnknownFailure): boolean {
    return true;
}
export function updateErrorUnknownFailure(value: ErrorUnknownFailure, _: Partial<ErrorUnknownFailureInputParams>) {
    return value;
}
