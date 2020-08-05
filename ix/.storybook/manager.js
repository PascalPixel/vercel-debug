import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import zerodownLight from "./zerodown-light.svg";
import zerodownDark from "./zerodown-dark.svg";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const mix = (percentage) => (prefersDark ? percentage : 100 - percentage / 2);
const logo = prefersDark ? zerodownDark : zerodownLight;
const brand = 257;

addons.setConfig({
  showPanel: true,
  sortStoriesByKind: true,
  showRoots: true,
  theme: create({
    base: prefersDark ? "dark" : "light",

    colorPrimary: "hsl(199, 81%, 44%)",
    colorSecondary: "hsl(213, 34%, 56%)",

    // UI
    appBg: `hsl(${brand}, 50%, ${mix(18)}%)`,
    appContentBg: `hsl(${brand}, 50%, ${mix(20)}%)`,
    appBorderColor: `hsl(${brand}, 50%, ${mix(30)}%)`,
    appBorderRadius: 2,

    // Typography
    fontBase:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontCode: "Fira Code, monospace",

    // Text colors
    textColor: `hsl(${brand}, 50%, ${mix(80)}%)`,
    textInverseColor: `hsl(${brand}, 50%, ${mix(10)}%)`,

    // Toolbar default and active colors
    barTextColor: `hsl(${brand}, 50%, ${mix(80)}%)`,
    barSelectedColor: `hsl(${brand}, 50%, ${mix(90)}%)`,
    barBg: `hsl(${brand}, 50%, ${mix(20)}%)`,

    // Form colors
    inputBg: `hsl(${brand}, 50%, ${mix(10)}%)`,
    inputBorder: `hsl(${brand}, 50%, ${mix(5)}%)`,
    inputTextColor: `hsl(${brand}, 50%, ${mix(90)}%)`,
    inputBorderRadius: 2,

    brandTitle: "ZeroDown",
    brandUrl: "https://zerodown.com",
    brandImage: logo,
  }),
});
