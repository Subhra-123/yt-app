import axios from 'axios';
const KEY='AIzaSyAMyTCh9oPyuBSy-5js-dJcUrTNqgDB8KA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxresults:5,
        key:KEY
    }
})