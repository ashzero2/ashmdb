export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=f0d3a68d1452d7a6513fc11ca4c3749b&language=en-US&page=1`
	);
	const movies = await res.json();
	return {
		popular: movies.results
	};
}
