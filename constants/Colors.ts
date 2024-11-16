/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#2f95dc"
const tintColorDark = "#fff"

// cool gradient tool: https://cssgradient.io/
export const FlowColors = ["#fff", "#ffafaf", "#ff6666", "#da2020", "#990000"]
export const Colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
  flowLight: {
    none: "#fff",
    spotting: "#FFC0CB",
    light: "#FFA07A",
    medium: "#FF6347",
    heavy: "#FF4500",
  },
  flowDark: {
    none: "#151718",
    spotting: "#FFC0CB",
    light: "#FFA07A",
    medium: "#FF6347",
    heavy: "#FF4500",
  },
}
