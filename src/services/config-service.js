
// Bse URL Service
export const CONFIG = {
    BASE_URL: 'https://test.boniksoftware.com',
    LOG_URL: 'https://test.boniksoftware.com',
    IMAGE_URL:'https://test.boniksoftware.com',
};


const init = () => {
    // const globalConfig = {...window.config}
    // CONFIG.BASE_URL = globalConfig["base_url"];
    // CONFIG.LOG_URL = globalConfig["log_url"];
    // CONFIG.IMAGE_URL = globalConfig["image_url"];
};

const configServiec = { CONFIG , init }

export default configServiec;

