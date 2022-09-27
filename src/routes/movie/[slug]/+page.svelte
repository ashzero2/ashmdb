<script>
	export let data;
	let movieDetail = data.movieDetail;
	let imgPath = 'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path;
	console.log(movieDetail);
	console.log(movieDetail.backdrop_path);
</script>

<main>
	<div class="movie-details">
		<div class="img-container">
			<img src={imgPath} alt={movieDetail.title} />
		</div>
		<div class="txt-container" />
	</div>
</main>
