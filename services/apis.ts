import { request } from "../lib/datocms";

export const getAllWorldCups = async () => {
  const ALL_WORLD_CUPS = `query getAllWorldCups {
    allWorldCups(orderBy: year_DESC) {
      id
      country
      year
      video {
        height
        provider
        providerUid
        thumbnailUrl
        title
        url
        width
      }
      logo {
        responsiveImage(imgixParams: { h: 200, fit: max }) {
          alt
          base64
          bgColor
          title
          src
        }
      } 
  
    }
  }`;

  return await request({
    query: ALL_WORLD_CUPS,
  });
};

export const getWorldCupByYear = async (year: string) => {
  const GET_WORLD_CUP_BY_ID = `query getWorldCupById {
    worldCup(filter:{
      year: {
        eq: ${year}
      }
    }) {
        id
        country
        year
        video {
          height
          provider
          providerUid
          thumbnailUrl
          title
          url
          width
        }
        logo {
          responsiveImage(imgixParams: { h: 200, fit: max }) {
            alt
            base64
            bgColor
            title
            src
          }
        } 
    
      }
    }`;

  return await request({
    query: GET_WORLD_CUP_BY_ID,
  });
};
