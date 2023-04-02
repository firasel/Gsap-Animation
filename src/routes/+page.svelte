<script>
	import Hero from '$lib/components/hero/Hero.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main>
	<div class="bg-gradient-1">
		<Hero />
	</div>
	<div>
		<Timeline />
	</div>
</main>
