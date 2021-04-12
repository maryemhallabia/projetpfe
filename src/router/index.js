import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Navbar from "../components/Navbar.vue";
import Topbar from "../components/Topbar.vue";
import Carousel from "../components/Carousel.vue";
import Feature from "../components/Feature.vue";
import Def from "../components/Def.vue";
import Service from "../components/Service.vue";
import Blog from '../components/Blog.vue';
import Newsletter from '../components/Newsletter.vue';
import Footer from '../components/Footer.vue';
import Photos from '../components/Photos.vue';





Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/",
		name: "Navbar",
		component: Navbar,
	},
	{
		path: "/",
		name: "Topbar",
		component: Topbar,
	},
	{
		path: "/",
		name: "Carousel",
		component: Carousel,
	},
	{
		path: "/",
		name: "Feature",
		component: Feature,
	},
	{
		path: "/",
		name: "Def",
		component: Def,
	},
	{
		path: "/",
		name: "Service",
		component: Service,
	},
	{
		path: "/",
		name: "Blog",
		component: Blog,
	},
	{
		path: "/",
		name: "Newsletter",
		component: Newsletter,
	},
	{
		path: "/",
		name: "Footer",
		component: Footer,
	},
	{
		path: "/photos",
		name: "Photos",
		component: Photos,
	},
	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
