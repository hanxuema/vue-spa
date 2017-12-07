import {app} from './app';

// const config = {
//     entry: {
//         app: path.resolve(__dirname, "../src/client-entry.js")
//     },
//     output: {
//         path: path.resolve(__dirname, "../dist"),
//         publicPath: "/",
//         filename: 'assets/js/[name].js'
//     }
// };

app.$mount("#app");

// if(module.hot){
//     module.hot.accept();
// }