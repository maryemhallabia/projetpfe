<template>
	<div id="app">
		<div class="wrapper">
			<!-- Top Bar Start -->
	     	<Topbar />
			<!-- Top Bar End -->

			<!-- Nav Bar Start -->
			<Navbar />
			<!-- Nav Bar End -->

			<!-- Carousel Start -->
			<Carousel />
			<!-- Carousel End -->

			<!-- Top Feature Start-->
			<Feature />
			<!-- Top Feature End-->

			<!-- About Start -->
			<Def/>
			<!-- About End -->

			<!-- Service Start -->
			<Service />
			<!-- Service End -->

			<!-- Blog Start -->
			<Blog />
			<!-- Blog End -->

			<!-- Newsletter Start -->
			<Newsletter />
			<!-- Newsletter End -->

			<!-- Footer Start -->
			<Footer />
			<!-- Footer End -->

			

			<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		</div>
	
	</div>
</template>

<script>
	import Navbar from "./components/Navbar.vue";
    import Topbar from "./components/Topbar.vue";
	import Carousel from "./components/Carousel.vue";
    import Feature from './components/Feature.vue';
    import Def from './components/Def.vue';
    import Service from './components/Service.vue';
    import Blog from './components/Blog.vue';
    import Newsletter from './components/Newsletter.vue';
	import Footer from './components/Footer.vue';
	


	export default {
	name: "App",
	components: {
		Navbar,
        Topbar,
		Carousel,
        Feature,
		Def,
		Service,
		Blog,
		Newsletter,
		Footer,
	
	},
	};
</script>

<style></style>
