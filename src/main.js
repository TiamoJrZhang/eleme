import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import sellers from 'components/sellers/sellers';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'
});

router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'/sellers': {
		component: sellers
	}
});

router.start(app, '#app');

router.go('/goods');