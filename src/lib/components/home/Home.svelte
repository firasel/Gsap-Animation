<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import BgBottom from './sub-components/BgBottom.svelte';
	import BgStars from './sub-components/BgStars.svelte';
	import BgTop from './sub-components/BgTop.svelte';

	let homeTl = gsap.timeline({ defaults: { duration: 1.5 } });

	onMount(() => {
		// Lights animation
		homeTl.fromTo('#light1', { y: '-100%', scaleY: 0 }, { y: '0', scaleY: 1 });
		homeTl.fromTo('#light2', { y: '-100%', scaleY: 0 }, { y: '0', scaleY: 1 }, '<10%');
		homeTl.fromTo('#light3', { y: '-100%', scaleY: 0 }, { y: '0', scaleY: 1 }, '<-5%');
		homeTl.fromTo('#light4', { y: '-100%', scaleY: 0 }, { y: '0', scaleY: 1 }, '<20%');
	});
</script>

<section class="w-full min-h-screen relative bg-gradient-1">
	<div class="py-[10rem] min-h-[80vh] flex items-center justify-center">
		<div class="container relative z-[100]">
			<h2
				class="w-full text-center text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] text-secondary font-primary font-normal leading-[1]"
			>
				Ramadan<br />Mubarak
			</h2>
		</div>
	</div>
	<div class="z-0">
		<div class="absolute top-0 w-full z-10">
			<BgTop />
		</div>
		<div class="absolute top-0 w-full z-20">
			<BgStars />
		</div>
		<div class="absolute bottom-0 w-full z-[5]">
			<BgBottom />
		</div>
	</div>
</section>
