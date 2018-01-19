export default class Data {
  static get (url, cb) {
    fetch (url)
      .then(res => res.json())
      .then(res => {
        return res.movies
      })
      .then(cb)
  }
}
