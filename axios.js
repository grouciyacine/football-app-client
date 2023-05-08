import axios from 'axios'
import Constants from "expo-constants";
const { manifest } = Constants;
export const makeRequest=axios.create({
    baseURL:`http://${manifest.debuggerHost.split(':').shift()}:5000/api/v1`,
    withCredentials:true
})