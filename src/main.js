import { createApp } from "vue";
import uiComponents from "./ui-components";

import App from "@/components/app/App.vue";
import "./index.css";

const app = createApp(App);

uiComponents.map((component) => app.component(component.name, component));

app.mount("#app");
