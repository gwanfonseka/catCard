import axios from "axios"
import config from '../utils/config.mjs'

const getCat = async (greeting, width, height, color, size) => {
    const response = await axios.get(`${config.BASE_PATH}${greeting}?width=${width}&height=${height}&color=${color}&s=${size}`, { responseType: 'arraybuffer' })
    return response.data
}

export default { getCat }