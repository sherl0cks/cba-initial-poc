import { defineCustomElements } from '../ui-components/amf-sl-stencil/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}