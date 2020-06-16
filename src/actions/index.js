import { FETCH_DATA, IS_LOAD } from '../types'
import axios from 'axios'

export const getData = () => async dispatch => {
        const URI = 'http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
        await axios.get(URI)
                .then(res => {
                    const data = res.data
                    dispatch(setData(data))
                    dispatch(setLoad(true))
                })
                .catch(rej => console.log(rej))
}

const setData = data => {
    return { type: FETCH_DATA, payload: data }
}

const setLoad = isLoad => {
    return { type: IS_LOAD, payload: isLoad }
}