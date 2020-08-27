import data from './data.json'
import { News } from '../../../typings/data.d'

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
async function queryNews(_page = 1, _size = 10) {
  return data.articles as News[]
}

export { queryNews }
