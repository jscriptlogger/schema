import {saveValueResult} from "./../app/value";
import {createPageResult} from "./../app/page";
import {addPageLineResult} from "./../app/page";
import {getFirstPageFromTitleResult} from "./../app/page";
import {getPagesResult} from "./../app/page";
import {getPageLinesResult} from "./../app/page";
import {void_t} from "./void";
import {ISerializer} from "./../__types__";
import {encodeSaveValueResult} from "./../app/value";
import {encodeCreatePageResult} from "./../app/page";
import {encodeAddPageLineResult} from "./../app/page";
import {encodeGetFirstPageFromTitleResult} from "./../app/page";
import {encodeGetPagesResult} from "./../app/page";
import {encodeGetPageLinesResult} from "./../app/page";
import {encodeVoid_t} from "./void";
import {IDeserializer} from "./../__types__";
import {decodeSaveValueResult} from "./../app/value";
import {decodeCreatePageResult} from "./../app/page";
import {decodeAddPageLineResult} from "./../app/page";
import {decodeGetFirstPageFromTitleResult} from "./../app/page";
import {decodeGetPagesResult} from "./../app/page";
import {decodeGetPageLinesResult} from "./../app/page";
import {decodeVoid_t} from "./void";
import {defaultSaveValueResult} from "./../app/value";
import {compareSaveValueResult} from "./../app/value";
import {compareCreatePageResult} from "./../app/page";
import {compareAddPageLineResult} from "./../app/page";
import {compareGetFirstPageFromTitleResult} from "./../app/page";
import {compareGetPagesResult} from "./../app/page";
import {compareGetPageLinesResult} from "./../app/page";
import {compareVoid_t} from "./void";
export type Result = Readonly<saveValueResult> | Readonly<createPageResult> | Readonly<addPageLineResult> | Readonly<getFirstPageFromTitleResult> | Readonly<getPagesResult> | Readonly<getPageLinesResult> | Readonly<void_t>;
export function encodeResultTrait(__s: ISerializer,value: Result) {
  switch(value._name) {
    case 'app.value.saveValueResult':
      encodeSaveValueResult(__s,value);
      break;
    case 'app.page.createPageResult':
      encodeCreatePageResult(__s,value);
      break;
    case 'app.page.addPageLineResult':
      encodeAddPageLineResult(__s,value);
      break;
    case 'app.page.getFirstPageFromTitleResult':
      encodeGetFirstPageFromTitleResult(__s,value);
      break;
    case 'app.page.getPagesResult':
      encodeGetPagesResult(__s,value);
      break;
    case 'app.page.getPageLinesResult':
      encodeGetPageLinesResult(__s,value);
      break;
    case 'protocol.void.void_t':
      encodeVoid_t(__s,value);
      break;
  }
}
export function decodeResultTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: saveValueResult | createPageResult | addPageLineResult | getFirstPageFromTitleResult | getPagesResult | getPageLinesResult | void_t;
  switch(__id) {
    case 1403490142: {
      const tmp = decodeSaveValueResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -190540765: {
      const tmp = decodeCreatePageResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 882537124: {
      const tmp = decodeAddPageLineResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 142654375: {
      const tmp = decodeGetFirstPageFromTitleResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -581286104: {
      const tmp = decodeGetPagesResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1289300006: {
      const tmp = decodeGetPageLinesResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1641569182: {
      const tmp = decodeVoid_t(__d);
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
    case 'app.value.saveValueResult':
      if(__b._name !== "app.value.saveValueResult") return false;
      return compareSaveValueResult(__a,__b);
    case 'app.page.createPageResult':
      if(__b._name !== "app.page.createPageResult") return false;
      return compareCreatePageResult(__a,__b);
    case 'app.page.addPageLineResult':
      if(__b._name !== "app.page.addPageLineResult") return false;
      return compareAddPageLineResult(__a,__b);
    case 'app.page.getFirstPageFromTitleResult':
      if(__b._name !== "app.page.getFirstPageFromTitleResult") return false;
      return compareGetFirstPageFromTitleResult(__a,__b);
    case 'app.page.getPagesResult':
      if(__b._name !== "app.page.getPagesResult") return false;
      return compareGetPagesResult(__a,__b);
    case 'app.page.getPageLinesResult':
      if(__b._name !== "app.page.getPageLinesResult") return false;
      return compareGetPageLinesResult(__a,__b);
    case 'protocol.void.void_t':
      if(__b._name !== "protocol.void.void_t") return false;
      return compareVoid_t(__a,__b);
  }
}
