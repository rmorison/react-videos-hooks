import axios from 'axios';

const KEY = 'AIzaSyBlFLbNfXmGMQX22iD5VmPoux-RmydBL3k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
