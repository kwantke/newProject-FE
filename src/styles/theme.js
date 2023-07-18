const device = {
  desktop: "@media screen and (min-width: 1241px)",
  tablet: "@media screen and (max-width: 1240px)",
  mobile: "@media screen and (max-width:500px)"
};

const colors = {
  white: "#FFFFFF",
  black: "#222222",
  headerBgColor: "#F9F9F9",
  subTitle: "#9297A0",
  lightGrey: "#F4F6F9",
  lightestGrey: "#F9F9F9",

  // 4 main colors
  main: "#567FE8",
  mainHover: "#7599F3",
  secondary: "#0A3190",
  secondary2: "#EAB90D",
  secondary3: "#DADEFE",
  errorMsg: "#EC5959",
  error: "#EC5959",

  info: "#0778E1",

  grey5: "#F4F6F9",
  grey10: "#E6E9F1",
  grey20: "#DCE0E9",
  grey30: "#D3D8E1",
  grey40: "#C2C7D0",
  grey50: "#B2B7C0",
  grey60: "#9297A0",
  grey70: "#6D727C",
  grey80: "#50555E",
  grey90: "#2D3037",

  like: "#EA617A",
  chip: "#8F5F01",

  green: "#92A094",
  blue: "#567FE8",

  warmGrey: "#A8A9AB",
  pink: "#EA617A",
  yellow: "#EAB90D",
  lightPurple: "#DADEFE",

  //btn
  mediumGrey: "#888888",

  // add btn
  darkGrey: "#505050",
  placeHolder: "#666666",
};

const theme = {
  device,
  colors
}

export default theme;