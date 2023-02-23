
// Bse URL Service
export const CONFIG = {
    BASE_URL: 'https://client.lazzpolli.com',
    LOG_URL: 'https://client.lazzpolli.com',
    IMAGE_URL:'https://client.lazzpolli.com/files/images',
};


// export const CONFIG = {
//     BASE_URL: '',
//     LOG_URL: '',
//     IMAGE_URL:'',
// };



const init = () => {
    // const globalConfig = {...window.config}
    // CONFIG.BASE_URL = globalConfig["base_url"];
    // CONFIG.LOG_URL = globalConfig["log_url"];
    // CONFIG.IMAGE_URL = globalConfig["image_url"];
};

const configServiec = { CONFIG , init }

export default configServiec;

