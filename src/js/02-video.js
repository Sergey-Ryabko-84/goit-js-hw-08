import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};
  
const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(load(LOCAL_STORAGE_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.error("the time was less than 0 or greater than the video’s duration");
            break;
        default:
            console.log("Get state error: ", error.message);
            break;
    }
});

player.on('timeupdate', throttle(saveTime, wait=1000));

function saveTime ({seconds}) {
    save(LOCAL_STORAGE_KEY, seconds);
}