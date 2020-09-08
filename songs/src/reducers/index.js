import { selectSong } from "../actions"
import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'Beautiful', duration: '3:20' },
        { title: 'Only Human', duration: '2:12' },
        { title: 'Bad Guy', duration: '2:20' },
        { title: '21 Guns', duration: '3:26' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type == 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong

}


export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
})