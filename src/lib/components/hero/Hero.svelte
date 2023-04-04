<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import BgBottom from './sub-components/BgBottom.svelte';
	import BgStars from './sub-components/BgStars.svelte';
	import BgTop from './sub-components/BgTop.svelte';

	onMount(() => {
		// Show background layer and text content
		gsap.to('.bgLayerTop', { display: 'block' });
		gsap.to('.content', { display: 'flex' });

		// Light scale animation
		function animateLightScale() {
			let lightTl = gsap.timeline({
				defaults: { duration: 3, stagger: 0.1 },
				repeat: -1,
				yoyo: true,
				delay: 0.1
			});
			lightTl.fromTo('.light', { scaleY: 1 }, { scaleY: 0.95 });
		}

		let homeTl = gsap.timeline({ defaults: { duration: 1.5 }, onComplete: animateLightScale });
		// Lights animation
		homeTl.fromTo('.light', { y: '-100%', scaleY: 0 }, { y: 0, scaleY: 1, stagger: 0.2 });
		gsap.fromTo('.chain', { y: '-100%' }, { y: 0, duration: 1, stagger: 0.2 });

		// Animate hero title
		// Split title word and letter
		var heroTitle = document.querySelectorAll('.hero_title');
		heroTitle.forEach((node) => {
			node.innerHTML = node.innerHTML
				.split('<br>')
				.map((word) => {
					return word
						.split(' ')
						.map(
							(word) =>
								`<span class='hero_word'>${word.replace(
									/\S/g,
									"<span class='hero_letter inline-block -translate-y-full'>$&</span>"
								)}</span>`
						)
						.join(' ');
				})
				.join('<br>');
		});

		// Title initial animation
		let heroTextTimeLine = gsap.timeline({
			duration: 1,
			ease: 'expo.in',
			delay: 0
		});

		heroTextTimeLine.fromTo(
			'.hero_letter',
			{ y: '100%', opacity: 0 },
			{
				y: 0,
				stagger: 0.02,
				opacity: 1,
				delay: 0
			}
		);

		// Letter animation
		let letterTl = gsap.timeline({
			defaults: { duration: 1.5, stagger: 0.3 },
			repeat: -1,
			yoyo: true
		});

		letterTl.fromTo('.hero_letter', { rotate: -3 }, { rotate: 0 });

		// Background star and dots animation
		gsap.fromTo(
			'.bg_star',
			{ opacity: 0.5, rotate: 0, scale: 0.2 },
			{ opacity: 1, rotate: 10, scale: 1, duration: 1, delay: 0.1, repeat: -1, yoyo: true }
		);
		gsap.fromTo(
			'.bg_dot',
			{ opacity: 1, rotate: 10, scale: 1 },
			{ opacity: 0.5, rotate: 0, scale: 0.5, duration: 1, delay: 0.1, repeat: -1, yoyo: true }
		);

		gsap.fromTo('#right-mosque', { x: '100%' }, { x: 0, duration: 2 });
		gsap.fromTo('#left-mosque', { x: '-100%' }, { x: 0, duration: 2 });
		gsap.fromTo('#bgTop', { y: '100%' }, { y: 0, duration: 1.5 });

		gsap.fromTo(
			'.moon',
			{ attr: { fill: '#201033' } },
			{
				attr: { fill: 'rgba(32, 16, 51, 0.3)' },
				duration: 0.8,
				repeat: -1,
				yoyo: true,
				stagger: 0.5
			}
		);
	});
</script>

<section class="w-full min-h-screen relative overflow-hidden">
	<div class="py-[10rem] min-h-[80vh] items-center justify-center hidden content">
		<div class="container relative z-[100]">
			<h2
				class="w-full text-center text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] text-secondary font-primary font-normal leading-[1] overflow-hidden hero_title"
			>
				Ramadan<br />Mubarak
			</h2>
		</div>
	</div>
	<div class="z-0 hidden bgLayerTop">
		<div class="absolute top-0 w-[140%] md:w-full z-10">
			<BgTop />
		</div>
		<div class="absolute top-0 w-full z-20">
			<BgStars />
		</div>
		<div class="absolute bottom-0 w-[200%] md:w-full z-[5]">
			<BgBottom />
		</div>
	</div>
</section>
