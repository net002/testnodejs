import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        positionID: undefined,
        login : false,
        ID : undefined ,
        admin:[],
        positionName :undefined,
        Department_ID : undefined,
        
    },
    mutations: {
        setPositionID(state,positionID) {
            state.positionID = positionID
        },
        setLogin(state,login) {
            state.login = login
        },
        setID(state,ID) {
            state.ID = ID
        },
        setadmin(state,admin) {
            state.admin = admin
        },
        setpositionName(state,positionName) {
            state.positionName = positionName
        },
        setDepartment_ID(state,Department_ID) {
            state.Department_ID = Department_ID
        }
    },
    getters :{
        positionID:state => state.positionID,
        login:state => state.login,
        ID:state => state.ID,
        admin:state => state.admin,
        positionName:state => state.positionName,
        Department_ID:state => state.Department_ID,
    }

})