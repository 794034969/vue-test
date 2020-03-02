import axios from 'axios'
import qs from 'qs'
import { URL } from './requestUrl'

axios.defaults.withCredentials = true // 设置跨域携带cookie

// let api: string = "/"
let api: string = "http://www.99-yinhe.com/"
axios.defaults.baseURL = api

export let Fetch: any = async (url: any = '', data: {} = {}, type: string = 'POST') => {
    let result: any
    let type2 = type.toUpperCase()
    // @ts-ignore
    let newurl = URL[url]
    if (type2 === 'GET') {
        await axios.get(newurl, { params: data })
        .then(res => {
            result = res.data
        })
    } else if (type === 'POST') {
        await axios.post(newurl, qs.stringify(data))
        .then(res => {
            result = res.data
        })
    }
    return result
}
