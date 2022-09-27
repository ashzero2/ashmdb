export async function load({ fetch, params }) {
	console.log(params.slug);
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}?api_key=f0d3a68d1452d7a6513fc11ca4c3749b&language=en-US`
	);
	const movieDetail = await res.json();
	console.log(movieDetail);
	return {
		movieDetail: movieDetail
	};
}
