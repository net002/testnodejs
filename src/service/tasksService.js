import axios from 'axios'
let taksk = {
    Createtasks(that) {
        let apiURL = 'http://localhost:5000/Createtasks';
        axios.post(apiURL, that).then(() => {
        })

    },
    ViewtasksAll() {
        let apiURL = 'http://localhost:5000/ViewtasksAll';
        return axios.get(apiURL)

    },

    ViewtasksById(id) {
        let apiURL = `http://localhost:5000/ViewtasksByiD/${id}`;
        return axios.get(apiURL)
    },
    ViewtasksbyCreateBy(id) {
        console.log('123456789')
        let apiURL = `http://localhost:5000/ViewtasksBycreateBy/${id}`;
        return axios.get(apiURL)
    },
    Edittasks(that, id, updatedBy) {
        let data = {}
        data.updatedBy = updatedBy
        const returnedTarget = Object.assign(that, data);
        console.log(returnedTarget);
        let apiURL = `http://localhost:5000/Edittasks/${id}`;
        axios.put(apiURL, that).then(() => {

        })


    },
    Deletetasks(id) {
        let apiURL = `http://localhost:5000/Deletetasks/${id}`

        if (window.confirm("Do you really want to delete?")) {
            axios.put(apiURL).then(() => {
            })
        }

    },

}
export default taksk


