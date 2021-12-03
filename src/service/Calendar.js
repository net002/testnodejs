import axios from 'axios'
let Calendar = {
    getDataCalendar() {
        let apiURL = `http://localhost:5000/getDataCalendar`;
        return axios.get(apiURL)
    },
    addDataCalendar(data) {
        console.log(data);
        let apiURL = `http://localhost:5000/addDataCalendar`
        return axios.post(apiURL,data)
    },
    updateDataCalendar(newdata,olddata) {
        console.log(newdata);
        let data={}
        data.newdata = newdata
        data.olddata = olddata
        console.log(data);
        let apiURL = `http://localhost:5000/updateDataCalendar`
        return axios.put(apiURL,data)
    },
    deleteDataCalendar(data) {
        console.log(data);
        let apiURL = `http://localhost:5000/deleteDataCalendar`
        return axios.put(apiURL,data)
    }
}
export default Calendar


