export type Variable = {
  name: string;
  defaultValue: string;
  defaultColors?: Record<number, string>;
};

export const variables: Variable[] = [
  { name: "--stork-input-width", defaultValue: "100%" },
  { name: "--stork-input-height", defaultValue: "auto" },
  {
    name: "--stork-input-font-size",
    defaultValue: "1em",
  },
  {
    name: "--stork-input-y-padding",
    defaultValue: "0.6em",
  },
  {
    name: "--stork-input-x-padding",
    defaultValue: "0.6em",
  },
  {
    name: "--stork-input-box-shadow",
    defaultValue: "inset 0 0.1em 0.3em [color]",
    defaultColors: { 4: "hsla(0, 0%, 0%, 0.1)" },
  },
  {
    name: "--stork-input-border",
    defaultValue: "1px solid [color]",
    defaultColors: { 2: "hsl(0, 0%, 65%)" },
  },
  {
    name: "--stork-input-border-radius",
    defaultValue: "8px",
  },
  {
    name: "--stork-input-background",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(0, 0%, 97%)" },
  },
  {
    name: "--stork-text-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(210, 11%, 15%)" },
  },
  {
    name: "--stork-font-family",
    defaultValue: "inherit",
  },
  {
    name: "--stork-input-focus-outline",
    defaultValue: "none",
  },
  {
    name: "--stork-progress-display",
    defaultValue: "block",
  },
  {
    name: "--stork-progress-background",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(207, 86%, 57%)" },
  },
  {
    name: "--stork-progress-glow-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(207, 91%, 64%)" },
  },
  {
    name: "--stork-progress-height",
    defaultValue: "1px",
  },
  {
    name: "--stork-progress-border-radius",
    defaultValue: "0",
  },
  {
    name: "--stork-progress-transition",
    defaultValue: "width 0.25s ease, opacity 0.4s ease 0.4s",
  },
  {
    name: "--stork-progress-x-margin",
    defaultValue: "1em",
  },
  {
    name: "--stork-output-width",
    defaultValue: "100%",
  },
  {
    name: "--stork-output-margin-top",
    defaultValue: "0.5em",
  },
  {
    name: "--stork-output-border-radius",
    defaultValue: "4px",
  },
  {
    name: "--stork-output-internal-border-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(0, 0%, 65%)" },
  },
  {
    name: "--stork-results-background",
    defaultValue: "[color]",
    defaultColors: { 0: "hsla(0, 0%, 100%, 0)" },
  },
  {
    name: "--stork-results-max-height",
    defaultValue: "25em",
  },
  {
    name: "--stork-results-box-shadow",
    defaultValue: "inset 0em 0.7em 0.2em -0.5em [color]",
    defaultColors: { 5: "hsla(0, 0%, 0%, 0.08)" },
  },
  {
    name: "--stork-result-separator-width",
    defaultValue: "1px",
  },
  {
    name: "--stork-result-separator-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(0, 0%, 55%)" },
  },
  {
    name: "--stork-result-selected-background",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(206, 100%, 82%)" },
  },
  {
    name: "--stork-excerpt-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(210, 10%, 23%)" },
  },
  {
    name: "--stork-highlight-background-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(49, 100%, 80%)" },
  },
  {
    name: "--stork-highlight-text-color",
    defaultValue: "[color]",
    defaultColors: { 0: "inherit" },
  },
  {
    name: "--stork-message-font-size",
    defaultValue: "1em",
  },
  {
    name: "--stork-attribution-link-color",
    defaultValue: "[color]",
    defaultColors: { 0: "hsl(208, 77%, 47%)" },
  },
  {
    name: "--stork-attribution-display",
    defaultValue: "block",
  },
];
