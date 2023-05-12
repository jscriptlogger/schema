import {SaveValue} from "./../app/value";
import {GetValueById} from "./../app/value";
import {CreatePage} from "./../app/page";
import {AddPageLine} from "./../app/page";
import {GetFirstPageFromTitle} from "./../app/page";
import {GetPages} from "./../app/page";
import {GetPageLines} from "./../app/page";
import {ISerializer} from "./../__types__";
import {encodeSaveValue} from "./../app/value";
import {encodeGetValueById} from "./../app/value";
import {encodeCreatePage} from "./../app/page";
import {encodeAddPageLine} from "./../app/page";
import {encodeGetFirstPageFromTitle} from "./../app/page";
import {encodeGetPages} from "./../app/page";
import {encodeGetPageLines} from "./../app/page";
import {IDeserializer} from "./../__types__";
import {decodeSaveValue} from "./../app/value";
import {decodeGetValueById} from "./../app/value";
import {decodeCreatePage} from "./../app/page";
import {decodeAddPageLine} from "./../app/page";
import {decodeGetFirstPageFromTitle} from "./../app/page";
import {decodeGetPages} from "./../app/page";
import {decodeGetPageLines} from "./../app/page";
import {defaultSaveValue} from "./../app/value";
import {compareSaveValue} from "./../app/value";
import {compareGetValueById} from "./../app/value";
import {compareCreatePage} from "./../app/page";
import {compareAddPageLine} from "./../app/page";
import {compareGetFirstPageFromTitle} from "./../app/page";
import {compareGetPages} from "./../app/page";
import {compareGetPageLines} from "./../app/page";
export type Request = Readonly<SaveValue> | Readonly<GetValueById> | Readonly<CreatePage> | Readonly<AddPageLine> | Readonly<GetFirstPageFromTitle> | Readonly<GetPages> | Readonly<GetPageLines>;
export function encodeRequestTrait(__s: ISerializer,value: Request) {
  switch(value._name) {
    case 'app.value.SaveValue':
      encodeSaveValue(__s,value);
      break;
    case 'app.value.GetValueById':
      encodeGetValueById(__s,value);
      break;
    case 'app.page.CreatePage':
      encodeCreatePage(__s,value);
      break;
    case 'app.page.AddPageLine':
      encodeAddPageLine(__s,value);
      break;
    case 'app.page.GetFirstPageFromTitle':
      encodeGetFirstPageFromTitle(__s,value);
      break;
    case 'app.page.GetPages':
      encodeGetPages(__s,value);
      break;
    case 'app.page.GetPageLines':
      encodeGetPageLines(__s,value);
      break;
  }
}
export function decodeRequestTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: SaveValue | GetValueById | CreatePage | AddPageLine | GetFirstPageFromTitle | GetPages | GetPageLines;
  switch(__id) {
    case -1939500960: {
      const tmp = decodeSaveValue(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 970642241: {
      const tmp = decodeGetValueById(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -360929818: {
      const tmp = decodeCreatePage(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -844911121: {
      const tmp = decodeAddPageLine(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -622309095: {
      const tmp = decodeGetFirstPageFromTitle(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -308808357: {
      const tmp = decodeGetPages(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 932013476: {
      const tmp = decodeGetPageLines(__d);
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
    case 'app.value.SaveValue':
      if(__b._name !== "app.value.SaveValue") return false;
      return compareSaveValue(__a,__b);
    case 'app.value.GetValueById':
      if(__b._name !== "app.value.GetValueById") return false;
      return compareGetValueById(__a,__b);
    case 'app.page.CreatePage':
      if(__b._name !== "app.page.CreatePage") return false;
      return compareCreatePage(__a,__b);
    case 'app.page.AddPageLine':
      if(__b._name !== "app.page.AddPageLine") return false;
      return compareAddPageLine(__a,__b);
    case 'app.page.GetFirstPageFromTitle':
      if(__b._name !== "app.page.GetFirstPageFromTitle") return false;
      return compareGetFirstPageFromTitle(__a,__b);
    case 'app.page.GetPages':
      if(__b._name !== "app.page.GetPages") return false;
      return compareGetPages(__a,__b);
    case 'app.page.GetPageLines':
      if(__b._name !== "app.page.GetPageLines") return false;
      return compareGetPageLines(__a,__b);
  }
}
