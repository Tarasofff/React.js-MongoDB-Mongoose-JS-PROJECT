import axios from "axios";
import axiosRetry from "axios-retry";
import {url} from './PORT.js';
import {ObjectControlStyles} from "./Styles";

axiosRetry(axios, {retries: 3})

//Main class with API logic
export class FrontAPI {

    //POST DATA
    static async postDataFunction(noteObj) {
        return await axios.post(url.MongoDBPost, noteObj)
            .then(res => {
                console.log("RESPONSE RECEIVED: ", res, '\n', 'Note id: ', res?.data?.createNote?._id)
                ObjectControlStyles.DataValidStyle(res?.data?.Background)
            })
            .catch(err => console.log("POST DATA ERROR: ", err))
    }

    //GET DATA
    static async getDataFunction() {
        return await axios.get(url.MongoDBGet)
            .catch(err => console.log("GET DATA ERROR: ", '\n', err))
    }

    //DELETE DATA
    static async deleteDataFunction(deleteObj) {
        await axios.delete(url.MongoDBDelete, deleteObj)
            .then(res => console.log(res))
            .catch(err => console.log("DELETE DATA ERROR: ", '\n', err))
        return await this.getDataFunction()
    }

    //UPDATE DATA
    static async updateDataFunction(updateObj) {
        return await axios.put(url.MongoDBUpdate, updateObj)
            .then(res => {
                console.log("Current object: ", updateObj, '\n', "was updated on new: ", res, res?.data?.Visibility)
                ObjectControlStyles.DataUpdateValidStyle(res?.data?.Visibility)
            })
            .catch(err => console.log("PUT DATA ERROR: ", '\n', err))
    }
}


