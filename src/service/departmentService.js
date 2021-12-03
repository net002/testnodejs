import axios from 'axios'
let department = {
    viewAllDepartment() {
        let apiURL = `http://localhost:5000/Viewdepartment`;
        return axios.get(apiURL)
    },
    ViewdepartmentIDbyName(data) {
        let departmentName ={}
        departmentName.Department_Name = data
        let apiURL = `http://localhost:5000/ViewdepartmentIDbyName`;
        return axios.post(apiURL,departmentName)
    },
    ViewdepartmentNamebyID(id) {      
       let apiURLe = `http://localhost:5000/ViewdepartmentNamebyID/${id}`;
        return axios.get(apiURLe)
    }
}
export default department


