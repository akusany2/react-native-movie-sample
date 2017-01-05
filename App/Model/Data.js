import axios from 'axios'

export default class Data {
  static getSearch(s){
    let query = s.toLowerCase().trim()
    let url = `http://www.omdbapi.com/?s=${query}&y=&plot=full&r=json`

    return axios.get(url)

  }

  static getimdb(id){
    let query = id.toLowerCase().trim()
    let url = `http://www.omdbapi.com/?i=${query}&y=&plot=full&r=json`

    return axios.get(url)
  }

}
