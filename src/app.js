import Vue from 'vue';


const app = new Vue({
    data:{
        hello: "hi aaa"
    },
    template: ' <div id="app">{{hello}}</div>'
});

export {app};