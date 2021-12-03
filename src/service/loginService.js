import axios from 'axios'
let login = {
    Login(that) {
        let apiURL = `http://localhost:5000/login`
        return axios.post(apiURL, that)
    },
}
export default login


