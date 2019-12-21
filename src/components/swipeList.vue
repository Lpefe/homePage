<template>
	<div class="list">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="item in imgArr" :key="item.src"><img :src="item.src"/></swiper-slide>
			<!-- <div class="swiper-pagination" slot="pagination"></div> -->
		</swiper>
	</div>	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const imgArr = [{
		src:'/static/img/share_img.png'
	},{
		src:'/static/img/event_img.png'
	},{
		src:'/static/img/family_img.png'
	},{
		src:'/static/img/active_img.jpg'
	}];
	export default {
		name: 'swipeList',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				// swiperOption: {
                //     slidesPerView: 4,
                //     spaceBetween: 10,
				// },
				swiperOption: {
					// pagination: {
					// 	el: ".swiper-pagination",
					// 	clickable: true,
					// 	type: "bullets"
					// },
					slidesPerView: 4,
					autoplay: {
						delay: 1500,
						stopOnLastSlide: false,
						disableOnInteraction: false
					},
					 loop: true  //开启轮播图前后循环模式
				},
				imgArr: imgArr
			}
		}
  }
</script>

<style lang='scss'>
	.list {
		width:100%;
		left: 0;
		top: 790px;
		height: 222px;
        margin-bottom: -16px;
		img {
	        height: 210px;
	        left: 0;
			width: 100%;
	    }
	}
</style>
