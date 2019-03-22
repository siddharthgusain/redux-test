import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        { title:'Perfect', duration:'5:02' },
        { title:'High Hopes', duration:'4:02' },
        { title:'Brother' , duration:'3:42' },
        { title:'All I want', duration:'3:50' }
    ];
};

const SelectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
});