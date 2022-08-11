import { App } from "vue";
import registerElement from "./register-element";
import registerProperties from "./register-properties";
import registerElementIcon from "./register-element-icon";
export default function (app: App): void {
  registerElement(app);
  registerProperties(app);
  registerElementIcon(app);
}
