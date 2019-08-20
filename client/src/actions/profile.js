import axios from 'axios';
import {setAlert} from "./alert";

import {GET_PROFILE, PROFILE_ERROR} from "./types";

// GET 현재 유저 프로필
export const getCurrentUserProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.data.msg, status: err.response.status}
        })
    }
};
