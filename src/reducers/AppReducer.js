import { FETCH_DATA, IS_LOAD } from '../types'

const INIT_STATE = {
    data: [],
    isLoad: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        case IS_LOAD:
            return {
                ...state,
                isLoad: action.payload
            }
        default: return state
    }
}