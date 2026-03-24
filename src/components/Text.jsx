import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.body,
    color: theme.color.textPrimary,
    fontFamily: Platform.select({
      ios: theme.fonts.ios,
      android: theme.fonts.android,
      default: theme.fonts.main,
    }),
    fontWeight: theme.fontWeight.normal,
  },
  colorPrimary: {
    color: theme.color.primary,
  },
  colorBackground: {
    color: theme.color.background,
  },
  colorLight: {
    color: theme.color.light,
  },
  colorFade: {
    color: theme.color.fade,
  },
  colorDanger: {
    color: theme.color.danger,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSize.subheading,
  },
  fontWeightBold: {
    fontFamily: Platform.select({
      ios: theme.fonts.iosBold,
      android: theme.fonts.androidBold,
      default: theme.fonts.main,
    }),
    fontWeight: Platform.select({
      ios: undefined,
      android: undefined,
      default: theme.fontWeight.bold,
    }),
  },
});

const Text = ({ fontSize, fontWeight, color, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "background" && styles.colorBackground,
    color === "light" && styles.colorLight,
    color === "fade" && styles.colorFade,
    color === "danger" && styles.colorDanger,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;
