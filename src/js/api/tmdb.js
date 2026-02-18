const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzVkYmI5ZmEwOGJmYzMxZWIxYmE4NzFlZTNjYjU4MyIsIm5iZiI6MTc3MTE3OTIzNS40NTgsInN1YiI6IjY5OTIwY2UzMTViN2NmNzk4MzZmNjdkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ATsZDbDUMtHyjXMICLhkRJ_bJ9QEbbOCdh3nBkzdPd0';

async function request(path, params = {}) {
  const url = new URL(BASE_URL + path)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value);
    }
  })

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8'
    } 
  })

  return response.json()
}


export async function getGenres(){
    return request('/genre/movie/list', {
      language: 'en-US',
    })

  }


export async function getPoster() {
    return request('/discover/movie', {
      language: 'en-US',
  })
}
