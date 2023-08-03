const device = {
  desktop: "@media screen and (min-width: 1241px)",
  tablet: "@media screen and (max-width: 1240px)",
  mobile: "@media screen and (max-width:500px)"
};

const color = {
  mainColor: '#212529',
  grey1: '#ced4da',
  white: '#fff',
};

const fontSize = {
  normal: "18px"
}

const fontWeight = {
  extraBold: 800,
  semiBold: 600,
  regular: 400,
  light: 300,
}
const theme = {
  device
  ,color
  ,fontSize
  ,fontWeight
}

export default theme;