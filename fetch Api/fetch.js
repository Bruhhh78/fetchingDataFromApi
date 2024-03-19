// console.log("Working");

// function fetch() {
//     fetch(`https://api.themoviedb.org/3/movie/157336?api_key=5331a8e025e11c4cb576caec476082a9`)
//     .then(function(raw){
//         return raw.json
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.error(err)
//     })
// }

// fetch();

console.log("Working");

async function fetchData() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=5331a8e025e11c4cb576caec476082a9&append_to_response=videos,images`);
        const data = await response.json();
        const movieData = {
            id: data.id,
            title: data.title,
            overview: data.overview,
            releaseDate: data.release_date,
            runtime: data.runtime,
            genres: data.genres.map(genre => genre.name),
            videos: data.videos.results,
            images: data.images
        };
        console.log(movieData);
    } catch (err) {
        console.error(err);
    }
}

fetchData();
