// const commentForm = document.getElementById('comment-form');
// const commentRep = nodecg.Replicant('comment');
// document.getElementById('apply-button')?.addEventListener('click', () => {
//     console.log(commentForm?.);
//     commentRep.value = commentForm.val();
// });
// commentRep.on('change', function (comm) {
//     console.log(comm);
//     commentForm.val(comm);
// })
/* eslint no-new: off, @typescript-eslint/explicit-function-return-type: off */

import Vue from 'vue';
import store from '../plugin/store';
import vuetify from '../plugin/vuetify';
import App from './comment.vue';

new Vue({
    store,
    vuetify,
    el: '#app',
    render: (h) => h(App),
});
