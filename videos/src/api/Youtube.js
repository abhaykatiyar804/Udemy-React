import axios from 'axios'

const KEY = "AIzaSyBWt8p-aSZX1SyReb7x14jXhwlYVcnHuXg"


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    // params:{
    //     part:'snippet',
    //     maxResults:5,
    //     key:KEY
    // }

})