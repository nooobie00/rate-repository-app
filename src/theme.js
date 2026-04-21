import { StyleSheet } from "react-native";

const theme = {
  color: {
    primary: "#0366d6",
    textPrimary: "#000",
    background: "#e1e4e8",
    light: "#fff",
    fade: "#24292e",
    danger: "#d73a4a",
    grey: "rgba(171, 164, 164, 0.46)",
  },
  fontSize: {
    subheading: 20,
    body: 16,
  },
  fonts: {
    main: "System",
    android: "Roboto",
    androidBold: "RobotoBold",
    ios: "Arial",
    iosBold: "ArialBold",
  },
  fontWeight: {
    normal: "400",
    bold: "900",
  },
};

export const Formstyles = StyleSheet.create({
  conatiner: {
    gap: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: theme.color.light,
  },
  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.color.fade,
  },
  button: {
    backgroundColor: theme.color.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 3,
  },
});

export default theme;
