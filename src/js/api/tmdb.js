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
    page: 1,
  }) 
}


export async function getPoster(pageNum) {
    return request('/discover/movie', {
      language: 'en-US',
      page: pageNum,
  })
}

export async function getMovieDetails(id) {
  return request(`/movie/${id}`, {
    language: 'en-US'
  })
}

export async function getUpcoming() {
  return request('/movie/upcoming',{
    language: 'en-US'
  })
}

export async function getRated() {
  return request('/movie/top_rated',{
    language: 'en-US'
  })
}



export async function getShowGenres(){
  return request('/genre/tv/list', {
    language: 'en-US',
    page: 1,
  }) 
}


export async function getShowPopular(pageNum) {
    return request('/tv/popular', {
      language: 'en-US',
      page: pageNum,
  })
}

export async function getShowDetails(id) {
  return request(`/tv/${id}`, {
    language: 'en-US'
  })
}

export async function getUpcomingShow() {
  return request('/tv/airing_today',{
    language: 'en-US'
  })
}

export async function getRatedShow() {
  return request('/tv/top_rated',{
    language: 'en-US'
  })
}

export async function getCredits(id) {
  return request(`/movie/${id}/credits`, {
    language: 'en-US'
  })
}

export async function getReviews(id) {
  return request(`/movie/${id}/reviews`, {
    language: 'en-US'
  })
}

export async function getShowCredits(id) {
  return request(`/tv/${id}/credits`, {
    language: 'en-US'
  })
}

export async function getShowReviews(id) {
  return request(`/tv/${id}/reviews`, {
    language: 'en-US'
  })
}

export async function getSeasonDetails(tvId, seasonNumber) {
    return request(`/tv/${tvId}/season/${seasonNumber}`, {
        language: 'en-US'
    });
}