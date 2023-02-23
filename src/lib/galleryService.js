import { CONFIG } from "../services/config-service";

var BASE_URL = CONFIG.IMAGE_URL;

export const IMAGE_CATEGORY = {
    HOUSE : 'house',
    BANNER : 'banners',
    MENU_IMAGE : 'menuimages',
    GALLERY : 'gallerys'
}


export const imageURL = (category, imagePath) =>  {
    return `${BASE_URL}/${category}/${imagePath}`;
}
