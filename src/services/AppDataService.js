const APP_DATA = window.appData;

export const productTypes = {
  special: 0,
  featured: 1,
};

export const getAppData = () => {
  return APP_DATA;
};

// Banners
export const getBanners2 = () => {
  return APP_DATA[0].map(a => ({
      ImagePath : a.ImagePath, 
      AltText : a.AltText, 
      Rank : a.Rank, 
      URL : a.URL,  
      Viewport : a.Viewport,
      Heading : a.Heading,
      SubHeading : a.SubHeading,
      BtnText : a.BtnText
  }));
};

// getHomeMenuImages
export const getHomeMenuImages = () => {
  return APP_DATA[1].map(a => ({
      AltText : a.AltText,  
      Description : a.Description,
      DetailUrl : a.DetailUrl,
      ImagePath : a.ImagePath,
      Rank : a.Rank, 
      Slot : a.Slot,
      TitleText : a.TitleText
  }));
};

