import { Header } from './components/header/header.js'
import { Movies } from './components/movies/movies.js'
import { Grid } from './components/grid/grid.js'
import Data from './components/data/movies-data.js'

/* eslint-disable */
const URL = 'https://api.myjson.com/bins/13nux1'

Data.get(URL, data => {
  const container = '.movies-container'
  const dataMovies = data
  const movies = data.map(movie => new Movies(movie))
  const grid = new Grid(container, movies, dataMovies)
  const header = new Header('.main-header', 
                            grid.filterByCategory.bind(grid),
                            grid.reset.bind(grid),
                            dataMovies)
})
/* eslint-enable */
