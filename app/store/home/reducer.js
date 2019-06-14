import * as types from './actionTypes'

const initialState = {
    loading: false,
    data: {
        dummyMarkers: [
            {
                name: 'matt', type: 'SHOP', latlang: {
                    latitude: 37.78825,
                    longitude: -90.4324,

                },
                address: 'sample address',
                discount: '15%'
            },
            {
                name: 'pete', type: 'EVENT', latlang: {
                    latitude: 38.78825,
                    longitude: -50.4324,

                },
                address: 'sample address', discount: '15%'
            },
            {
                name: 'mikey', type: 'FOOD', latlang: {
                    latitude: 39.78825,
                    longitude: -80.4324,

                },
                address: 'sample address', discount: '15%'
            },
            {
                name: 'matt', type: 'SHOP', latlang: {
                    latitude: 35.78825,
                    longitude: -85.4324,

                },
                address: 'sample address', discount: '15%'
            },
            {
                name: 'pete', type: 'EVENT', latlang: {
                    latitude: 36.78825,
                    longitude: -80.4324,

                },
                address: 'sample address', discount: '15%'
            },
            {
                name: 'mikey', type: 'FOOD', latlang: {
                    latitude: 37.78825,
                    longitude: -75.4324,
                },
                address: 'sample address', discount: '15%'
            },
            {
                name: 'matt', type: 'SHOP', latlang: {
                    latitude: 35.78825,
                    longitude: -70.4324,
                }, address: 'sample address', discount: '15%'

            },
            {
                name: 'pete', type: 'EVENT', latlang: {
                    latitude: 34.78825,
                    longitude: -65.4324,
                }, address: 'sample address', discount: '15%'
            },
            {
                name: 'mikey', type: 'FOOD', latlang: {
                    latitude: 33.78825,
                    longitude: -60.4324,
                }, address: 'sample address', discount: '15%'
            },

        ]
    },
    message: ''
}
const home = (state = initialState, action) => {
    console.log("action=>>", JSON.stringify(action));
    switch (action.type) {

        case types.API_LOADING:
            return {...state, loading: true};
        case types.API_LOADING_STOP:
            return {...state, loading: false};
        case types.API_FAILED:
            return {...state, loading: false, message: action.payload};
        case types.ON_ERROR_MESSAGE:
            return {...state, loading: false, message: action.payload};
        case types.API_SUCCESS:
            return {...state, loading: false, data: action.payload};
        default:
            return state
    }
}

export default home
