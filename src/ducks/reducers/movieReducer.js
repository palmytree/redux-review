const initialState = {
  title: '',
  poster: '',
  rating: null,
  movies: []
}

const SET_MOVIE_INFO = 'SET_MOVIE_INFO'
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

export const setMovieInfo = (title, poster, rating) => {
  return {
    type: SET_MOVIE_INFO,
    payload: { title, poster, rating }
  }
}

export const updateMovieList = movie => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: movie
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MOVIE_INFO:
      return { ...state, ...payload }
    case UPDATE_MOVIE_LIST:
      return { ...state, movies: [...state.movies, payload] }
    default:
      return state
  }
}
