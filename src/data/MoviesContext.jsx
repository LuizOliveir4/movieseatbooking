const url = "http://localhost:3000/movies/"
//const url = "https://luizoliveir4.github.io/movieseatbookingapi/movies.json?id=123"

export async function loadMovies() {
    const response = await fetch(url);
    const movies = await response.json();

    return movies
}

export async function sendMovieToServer(movie) {
    console.log(JSON.stringify(movie))
    const response = await fetch(url ,{
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:"POST",
       body:JSON.stringify(movie)
    });
    console.log(response)
  }  


  export async function updateMovieInServer(id, movie) {
    const response = await fetch(url+id,{
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method:"PUT",
       body:JSON.stringify(movie)
    });
    console.log(response)
  }
  
  export async function deleteMovieInServer(id) {
    const response = await fetch(url+id,{
        method:"DELETE",
    }).then(response => response.json());
    console.log(response)
  } 