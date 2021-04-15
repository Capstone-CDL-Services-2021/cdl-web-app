/**
 * import axios dependencies
 */
import axios from 'axios'

/**
 * axios grabs the backend-api port and
 * connects the front-end with the back-end
 *
 * @type {string}
 */
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');