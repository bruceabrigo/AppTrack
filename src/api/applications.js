import apiUrl from "../apiConfig";
import axios from "axios";

// GET ALL applications saved to db
export const applicationsIndex = () => {    
    return axios(`${apiUrl}/applications`)
}

