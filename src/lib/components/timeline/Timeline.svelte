<script>
	import Clock from './sub-components/Clock.svelte';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Mosque from './sub-components/Mosque.svelte';
	import Task1 from './sub-components/Task1.svelte';
	import Task2 from './sub-components/Task2.svelte';
	import Task3 from './sub-components/Task3.svelte';
	import Task4 from './sub-components/Task4.svelte';
	import Task5 from './sub-components/Task5.svelte';
	import Task6 from './sub-components/Task6.svelte';
	import TaskWrapper from './sub-components/TaskWrapper.svelte';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let clockTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.time-line-clock',
				start: '0%',
				end: '1400%',
				scrub: 0.5,
				pin: true,
				anticipatePin: 1
			},
			defaults: {
				duration: 1
			}
		});

		clockTl.fromTo(
			'.clock',
			{ y: '50%', opacity: 0, scrollTrigger: { start: '-50%', end: '5%' }, duration: 0.5 },
			{ y: 0, opacity: 1 }
		);
		// Task 1 animation
		clockTl
			.fromTo(
				'#c-hour',
				{ transformOrigin: 'bottom', rotate: 0, scrollTrigger: { start: '0%', end: '150%' } },
				{ rotate: 120 }
			)
			.fromTo('#c-minute', { transformOrigin: 'bottom right', rotate: 0 }, { rotate: 765 }, '<')
			.fromTo(
				'.task1',
				{ display: 'block', x: '100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task1',
				{
					x: 0,
					opacity: 1,
					scrollTrigger: { start: '0%', end: '50%' }
				},
				{ x: '100%', opacity: 0 }
			);
		// Task 2 animation
		clockTl
			.fromTo(
				'#c-hour',
				{ transformOrigin: 'bottom', rotate: 120, scrollTrigger: { start: '0%', end: '50%' } },
				{ rotate: 150 }
			)
			.fromTo('#c-minute', { transformOrigin: 'bottom right', rotate: 765 }, { rotate: 1125 }, '<')
			.fromTo(
				'.task2',
				{ display: 'block', x: '-100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task2',
				{ x: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: '-100%', opacity: 0 }
			);
		// Task 3 animation
		clockTl
			.fromTo(
				'#c-hour',
				{ transformOrigin: 'bottom', rotate: 150, scrollTrigger: { start: '0%', end: '100%' } },
				{ rotate: 750 }
			)
			.fromTo('#c-minute', { transformOrigin: 'bottom right', rotate: 765 }, { rotate: 1125 }, '<')
			.fromTo(
				'.task3',
				{ display: 'block', x: '100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task3',
				{ x: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: '100%', opacity: 0 }
			);
		// Task 4 animation
		clockTl
			.fromTo(
				'#c-hour',
				{ transformOrigin: 'bottom', rotate: 750, scrollTrigger: { start: '0%', end: '100%' } },
				{ rotate: 870 }
			)
			.fromTo('#c-minute', { transformOrigin: 'bottom right', rotate: 1125 }, { rotate: 1485 }, '<')
			.fromTo(
				'.task4',
				{ display: 'block', x: '-100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task4',
				{ x: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: '-100%', opacity: 0 }
			);
		// Task 5 animation
		clockTl
			.fromTo(
				'#c-hour',
				{ transformOrigin: 'bottom', rotate: 870, scrollTrigger: { start: '0%', end: '100%' } },
				{ rotate: 900 }
			)
			.fromTo('#c-minute', { transformOrigin: 'bottom right', rotate: 1485 }, { rotate: 1905 }, '<')
			.fromTo(
				'.task5',
				{ display: 'block', x: '100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task5',
				{ x: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: '100%', opacity: 0 }
			);
		// Task 6 animation
		clockTl
			.fromTo(
				'#c-minute',
				{
					transformOrigin: 'bottom right',
					rotate: 1905,
					scrollTrigger: { start: '0%', end: '50%' }
				},
				{ rotate: 1950 }
			)
			.fromTo(
				'.task6',
				{ display: 'block', x: '-100%', opacity: 0, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: 0, opacity: 1 }
			)
			.fromTo(
				'.task6',
				{ x: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' } },
				{ x: '-100%', opacity: 0 }
			)
			.fromTo(
				'.clock',
				{ y: 0, opacity: 1, scrollTrigger: { start: '0%', end: '50%' }, duration: 0.5 },
				{ y: '-50%', opacity: 0 }
			)
			.fromTo(
				'.time-line-clock',
				{ scale: 1, opacity: 1, scrollTrigger: { start: '0%', end: '100%' } },
				{ scale: 0, opacity: 0.5 }
			)
			.fromTo('.bottom-mosque', { opacity: 0 }, { opacity: 1 }, '<');

		// Clock bottom line animation
		gsap.fromTo(
			'#C-line',
			{ rotate: 5, transformOrigin: 'top' },
			{
				rotate: -5,
				repeat: -1,
				duration: 2,
				delay: 0,
				ease: 'power1.inOut',
				yoyo: true
			}
		);
	});
</script>

<section class="overflow-hidden">
	<div
		class="min-h-screen flex items-center justify-center overflow-hidden bg-[#BE832F] time-line-clock py-24 time-line-clock"
	>
		<div class="container">
			<div class="w-full flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
				<div class="w-full relative flex items-center justify-center">
					<TaskWrapper taskName="task2">
						<Task2 />
					</TaskWrapper>
					<TaskWrapper taskName="task4">
						<Task4 />
					</TaskWrapper>
					<TaskWrapper taskName="task6">
						<Task6 />
					</TaskWrapper>
				</div>
				<div class="w-1/4 mx-auto clock flex-shrink-0">
					<Clock />
				</div>
				<div class="w-full relative flex items-center justify-center">
					<TaskWrapper taskName="task1">
						<Task1 />
					</TaskWrapper>
					<TaskWrapper taskName="task3">
						<Task3 />
					</TaskWrapper>
					<TaskWrapper taskName="task5">
						<Task5 />
					</TaskWrapper>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full max-h-screen absolute -translate-y-full opacity-0 bottom-mosque text-black">
		<Mosque />
	</div>
</section>
