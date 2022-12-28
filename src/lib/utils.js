export const humanizeDate = (enData) => {
    const timestamp = new Date(enData);
     return `${timestamp.getDate()}-${timestamp.getMonth()+1}-${timestamp.getFullYear()}`
};

export const humanizeTime = (enData) => {
    const timestamp = new Date(enData);
     return `${timestamp.getHours()}`
};
