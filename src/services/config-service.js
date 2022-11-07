
// // LOCAL
// export const CONFIG= {
//     BASE_URL: "http://localhost:12222",
//     LOG_URL: "https://lazzpharma.boniksoftware.com",
//     // IMAGE_URL: "https://lazzpharma.boniksoftware.com",
//     IMAGE_URL: "https://www.lazzpharma.com",
// };

// TEST
export const CONFIG = {
    BASE_URL: "https://lazzpharma.boniksoftware.com",
    LOG_URL: "https://lazzpharma.boniksoftware.com",
    IMAGE_URL: "https://lazzpharma.boniksoftware.com",
};

// //PRODUCTION
// export const CONFIG = {
//     BASE_URL: "https://www.lazzpharma.com",
//     LOG_URL: "https://www.lazzpharma.com",
//     IMAGE_URL: "https://www.lazzpharma.com",
// };



const init = () => {
    // const globalConfig = {...window.config}

    // CONFIG.BASE_URL = globalConfig["base_url"];
    // CONFIG.LOG_URL = globalConfig["log_url"];
    // CONFIG.IMAGE_URL = globalConfig["image_url"];
};

const configServiec = { CONFIG , init }

export default configServiec;

// ["abc", "d", "defg"]
// ["abcddefg"]