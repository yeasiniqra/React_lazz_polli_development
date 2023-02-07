import { CONFIG } from "../services/config-service";

var BASE_URL = CONFIG.IMAGE_URL;

export const IMAGE_CATEGORY = {
    RANIYA_HOUSE : 'RANIYA HOUSE',
    DOUBLE_DOM : 'DOUBLE DOM',
    MUD_HOUSE : 'MUD HOUSE',
    ICHAMOTI_HOUSE : 'ICHAMOTI HOUSE',
}

export const PAGE_SIZE = {
    PAGE_ONE : '1',
    PAGE_TWO : '2',
    PAGE_THREE : '3',
    PAGE_FOUR : '4',
}

export const GALLERY_PAGE = {
    ONE : '1',
    TWO : '2',
    THREE : '3',
    FOUR : '4',
}

export const GET_GALLERY = (category, pageSize, page) =>  {
    return `${BASE_URL}/Gallery?category=${category}&pageSize=${pageSize}&page=${page}`
}
