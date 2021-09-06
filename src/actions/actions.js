import * as actions from "../types/types";
import {service} from '../service/service';

export const getPeople = async (dispatch) => {
    try {
        const response = await service.getPeople();
        const res = await response.json();
        dispatch({ type: actions.GET_PEOPLE, payload: res });
    } catch (e) {
        console.log(e)
    }
}

export const getPlanets = async (dispatch) => {
    try {
        const response = await service.getPlanets();
        const res = await response.json();
        dispatch({ type: actions.GET_PEOPLE, payload: res });
    } catch (e) {
       console.log(e)
    }
}

export const getPeopleFunc = dispatch => {
    return () => getPeople(dispatch);
}
export const getPlanetsFunc = dispatch => {
    return () => getPlanets(dispatch);
}
