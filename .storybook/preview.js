import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../styles/globals.css";

export const parameters = {
  controls: { expanded: false, hideNoControlsWarning: true },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
