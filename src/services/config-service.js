
// Bse URL Service
// export const CONFIG = {
//     BASE_URL: 'https://test.boniksoftware.com',
//     LOG_URL: 'https://test.boniksoftware.com',
//     IMAGE_URL:'https://test.boniksoftware.com',
// };

export const CONFIG = {
    BASE_URL: 'http://localhost:5000',
    LOG_URL: 'http://localhost:5000',
    IMAGE_URL:'http://localhost:5000',
};



const init = () => {
    // const globalConfig = {...window.config}
    // CONFIG.BASE_URL = globalConfig["base_url"];
    // CONFIG.LOG_URL = globalConfig["log_url"];
    // CONFIG.IMAGE_URL = globalConfig["image_url"];
};

const configServiec = { CONFIG , init }

export default configServiec;

