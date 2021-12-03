import axios from 'axios'
import positionService from './positionService'
import departmentService from './departmentService'
let usrs = {
    ViewuserByDepartment_ID(data) {
        let apiURL = `http://localhost:5000/ViewuserByDepartment_ID`
        return axios.post(apiURL, data)
    },
    ViewuserAll() {
        let apiURL = `http://localhost:5000/ViewuserAll`
        return axios.get(apiURL)
    },
    async Createusrs(data) {
        await departmentService.ViewdepartmentIDbyName(data.deparmentName).then((res) => {
            data.Department_ID = res.data[0].Department_ID
        })
        await positionService.ViewpositionIDbyName(data.positionName, data.Department_ID).then((res) => {
            data.Position_ID = res.data[0].Position_ID
        })
        
        let apiURL = `http://localhost:5000/Createusrs`
        return axios.post(apiURL, data)
    },
    async Editusrs(data,updatedBy,id) {
        
        await departmentService.ViewdepartmentIDbyName(data.deparmentName).then((res) => {
            data.Department_ID = res.data[0].Department_ID
        })
        await positionService.ViewpositionIDbyName(data.positionName, data.Department_ID).then((res) => {
            data.Position_ID = res.data[0].Position_ID
        })
        data.updatedBy = updatedBy
        await console.log(data);
       
        let apiURL = `http://localhost:5000/Editusrs/${id}`
        return axios.put(apiURL, data)
    },



    Deleteuser(id,usrsID) {
        
        let data ={}
        data.Employee_ID = id
        data.updatedBy = usrsID
        console.log(data);
        let apiURL = `http://localhost:5000/deleteUser`
        return axios.put(apiURL,data)
    },
    ViewuserByid(id) {
        let apiURL = `http://localhost:5000/ViewuserByid/${id}`
        return axios.get(apiURL)
    },
}
export default usrs


