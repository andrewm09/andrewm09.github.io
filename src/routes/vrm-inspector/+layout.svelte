<script>
	import { onMount } from 'svelte';
	let { children } = $props();

	onMount(() => {
		// Al entrar, le ponemos una clase única al body
		document.body.classList.add('is-inspector');

		// Al salir, la quitamos obligatoriamente
		return () => {
			document.body.classList.remove('is-inspector');
		};
	});
</script>

<div class="inspector-wrapper">
	{@render children()}
</div>

<style>
	/* En lugar de pintar el body siempre, 
	   solo lo pintamos CUANDO tenga la clase activa.
	*/
	:global(body.is-inspector) {
		background-color: #eef2f6 !important;
		margin: 0;
		padding: 0;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
	}

	.inspector-wrapper {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}
</style>