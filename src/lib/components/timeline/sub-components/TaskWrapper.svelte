<script lang="ts">
	export let taskName: string;
</script>

<div class="w-full absolute hidden {taskName}">
	<slot />
</div>
