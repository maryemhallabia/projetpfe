<template>
    <div id="carousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carousel" data-slide-to="0" class="active"></li>
					<li data-target="#carousel" data-slide-to="1"></li>
					<li data-target="#carousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
				
						<div class="carousel-caption">
							<h1 class="animated fadeInLeft">
								جمعية الاتحاد الثقافي يحي ابن عمر
							</h1>
							<!-- <p class="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p> -->
							<a class="btn animated fadeInUp" href="#"
								>للتبرع للجمعية اضغط هنا
							</a>
						</div>
					</div>

					<div class="carousel-item">
						<img src="asset/img/carousel-2.jpg" alt="Carousel Image" />
						<div class="carousel-caption">
							<h1 class="animated fadeInLeft">
								جمعية الاتحاد الثقافي يحي ابن عمر
							</h1>
							<!-- <p class="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p> -->
							<a class="btn animated fadeInUp" href="#"
								>للتبرع للجمعية اضغط هنا
							</a>
						</div>
					</div>

					<div class="carousel-item">
						<img src="asset/img/carousel-3.jpg" alt="Carousel Image" />
						<div class="carousel-caption">
							<h1 class="animated fadeInLeft">
								جمعية الاتحاد الثقافي يحي ابن عمر
							</h1>
							<!-- <p class="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p> -->
							<a class="btn animated fadeInUp" href="#"
								>للتبرع للجمعية اضغط هنا
							</a>
						</div>
					</div>
				</div>

				<a
					class="carousel-control-prev"
					href="#carousel"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carousel"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>

    
</template>

<script>
export default {
    name: 'Carousel',
}
</script>