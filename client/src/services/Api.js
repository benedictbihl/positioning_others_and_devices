import axios from 'axios'

/**
 * @description helper function for easy change of the base URL in case of a move to another domain
 */
export default () => {
  return axios.create({
    baseURL: `http://www.digital-companion.com/`
  })
}
