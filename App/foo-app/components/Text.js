// import React from 'react'
// import { StyleSheet, Text as NativeText } from 'react-native'

// import screen from './screen'

// const defaultProps = {
//   h1_noto: {
//     fontSize: 32 * screen.pxDp,
//     lineHeight: 47 * screen.pxDp
//   },
//   h1_din: {
//     fontSize: 32 * screen.pxDp,
//     lineHeight: 39 * screen.pxDp
//   },
//   h2_noto: {
//     fontSize: 18 * screen.pxDp,
//     lineHeight: 27 * screen.pxDp
//   },
//   h2_din: {
//     fontSize: 18 * screen.pxDp,
//     lineHeight: 22 * screen.pxDp
//   },
//   normal_noto: {
//     fontSize: 16 * screen.pxDp,
//     lineHeight: 24 * screen.pxDp
//   },
//   normal_din: {
//     fontSize: 16 * screen.pxDp,
//     lineHeight: 20 * screen.pxDp
//   },
//   s1_noto: {
//     fontSize: 14 * screen.pxDp,
//     lineHeight: 20 * screen.pxDp
//   },
//   s1_din: {
//     fontSize: 14 * screen.pxDp,
//     lineHeight: 17 * screen.pxDp
//   },
//   s2_noto: {
//     fontSize: 12 * screen.pxDp,
//     lineHeight: 18 * screen.pxDp
//   },
//   s2_din: {
//     fontSize: 12 * screen.pxDp,
//     lineHeight: 15 * screen.pxDp
//   },
//   s3_noto: {
//     fontSize: 10 * screen.pxDp,
//     lineHeight: 15 * screen.pxDp
//   },
//   s3_din: {
//     fontSize: 10 * screen.pxDp,
//     lineHeight: 12 * screen.pxDp
//   }
// }

// export default class Text extends React.PureComponent {
//   render () {
//     const { mode, color, lineHeight, style, ...rest } = this.props
//     return (
//       <NativeText
//         {...rest}
//         allowFontScaling={false}
//         style={[
//           styles[mode || "normal_noto"],
//           lineHeight && { lineHeight },
//           { color: color || "#262626" },
//           style
//         ]}
//       />
//     )
//   }
// }

// const styles = StyleSheet.create({
//   h1_noto: {
//     ...defaultProps.h1_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   h1_noto_medium: {
//     ...defaultProps.h1_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   h1_din: {
//     ...defaultProps.h1_din,
//     fontFamily: "DIN-Regular"
//   },
//   h1_din_medium: {
//     ...defaultProps.h1_din,
//     fontFamily: "DIN-Medium"
//   },
//   h2_noto: {
//     ...defaultProps.h2_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   h2_noto_medium: {
//     ...defaultProps.h2_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   h2_din: {
//     ...defaultProps.h2_din,
//     fontFamily: "DIN-Regular"
//   },
//   h2_din_medium: {
//     ...defaultProps.h2_din,
//     fontFamily: "DIN-Medium"
//   },
//   normal_noto: {
//     ...defaultProps.normal_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   normal_noto_medium: {
//     ...defaultProps.normal_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   normal_din: {
//     ...defaultProps.normal_din,
//     fontFamily: "DIN-Regular"
//   },
//   normal_din_medium: {
//     ...defaultProps.normal_din,
//     fontFamily: "DIN-Medium"
//   },
//   s1_noto: {
//     ...defaultProps.s1_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   s1_noto_medium: {
//     ...defaultProps.s1_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   s1_din: {
//     ...defaultProps.s1_din,
//     fontFamily: "DIN-Regular"
//   },
//   s1_din_medium: {
//     ...defaultProps.s1_din,
//     fontFamily: "DIN-Medium"
//   },
//   s2_noto: {
//     ...defaultProps.s2_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   s2_noto_medium: {
//     ...defaultProps.s2_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   s2_din: {
//     ...defaultProps.s2_din,
//     fontFamily: "DIN-Regular"
//   },
//   s2_din_medium: {
//     ...defaultProps.s2_din,
//     fontFamily: "DIN-Medium"
//   },
//   s3_noto: {
//     ...defaultProps.s3_noto,
//     fontFamily: "NotoSansSC-Regular"
//   },
//   s3_noto_medium: {
//     ...defaultProps.s3_noto,
//     fontFamily: "NotoSansSC-Medium"
//   },
//   s3_din: {
//     ...defaultProps.s3_din,
//     fontFamily: "DIN-Regular"
//   },
//   s3_din_medium: {
//     ...defaultProps.s3_din,
//     fontFamily: "DIN-Medium"
//   }
// })