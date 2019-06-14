import * as types from './actionTypes'

export const createNewPost = (data) => {
    return async (dispatch) => {
        dispatch(apiLoading())
        dispatch(apiLoadingSuccess(result));
    }
};


const apiLoading = () => ({
    type: types.API_LOADING
});
const apiLoadingStop = () => ({
    type: types.API_LOADING_STOP
});
const apiLoadingSuccess = (data) => ({
    type: types.API_SUCCESS,
    payload: data
});


const apiLoadingFailer = (message) => ({
    type: types.API_FAILED,
    payload: message
});






