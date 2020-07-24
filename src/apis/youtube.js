import axios from 'axios';

const KEY = 'AIzaSyCMmtlSfnQfCCTAVp_Qr07sQJ4T8yS0aiI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
