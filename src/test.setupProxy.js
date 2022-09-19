// const {createProxyMiddleware} = require('http-proxy-middleware')

// const ENCODING_API_KEY = process.env.REACT_APP_API_KEY;

// const url =
//       "http://apis.data.go.kr/B552895/openapi/service/OrgPriceExaminService/getExaminPriceList?ServiceKey=";
// const reqURL = `${url}${ENCODING_API_KEY}&pageNo=1&numOfRows=10&examinDe=20150502&examinCd=6&prdlstCd=223`;


// module.exports = app => {
//     app.use('/proxy',
//         createProxyMiddleware(
//             {
//                 target: reqURL,
//                 changeOrigin: true,
//             }
//         )
//     )
// }