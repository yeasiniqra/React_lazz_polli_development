const getToken = async () => {
  let user = localStorage.getItem("USER");
  if (user) {
    return JSON.parse(user).token;
  }
  return null;
};

export const getTokenSync = () => {
  let user = localStorage.getItem("USER");
  if (user) {
    return JSON.parse(user).token;
  }
  return null;
}

export default getToken;
