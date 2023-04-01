// export const humanizeDate = (enData) => {
//     const timestamp = new Date(enData);
//      return `${timestamp.getDate()}-${timestamp.getMonth()+1}-${timestamp.getFullYear()}`
// };

export const humanizeDate = (enData) => {
    const timestamp = new Date(enData);
    const day = timestamp.getDate().toString().padStart(2, '0');
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
    const year = timestamp.getFullYear();
    return `${day}-${month}-${year}`;
  };
  

export const humanizeTime = (enData) => {
    const timestamp = new Date(enData);
    return `${timestamp.getHours()}.${timestamp.getMinutes()}`
};

