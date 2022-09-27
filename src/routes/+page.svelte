<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	export let data;
</script>

<main>
	<PopularMovies popular={data.popular} />
</main>
