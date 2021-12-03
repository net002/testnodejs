import axios from 'axios'
let position = {
    checkadmin(data) {
        let apiURL = 'http://localhost:5000/Checkadmin';
        return axios.post(apiURL, data)
    },
    viewAllPosition() {
        let apiURL = `http://localhost:5000/Viewposition`;
        return axios.get(apiURL)
    },
    ViewpositionIDbyName(data,Department_ID) {
        let position ={}
        position.Position_Name = data
        position.Department_ID = Department_ID
        let apiURL = `http://localhost:5000/ViewpositionIDbyName`;
        return axios.post(apiURL,position)
    }

}
export default position


