<script>
	let { children } = $props(); // Sintaxis Svelte 5
</script>

<div class="inspector-wrapper">
	{@render children()}
</div>

<style>
	:global(body, html) {
		margin: 0;
		padding: 0;
		overflow: hidden; /* Evita scrolls dobles */
		width: 100vw;
		height: 100vh;
	}

	.inspector-wrapper {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999; /* Asegura que esté por encima de cualquier cosa global */
		background: #eef2f6;
	}
</style>