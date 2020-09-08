import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tsEwHPcQSe2VP8RLmxv9b5JiIeMdjiPTQ_4gFvBs4qc'
    }
})