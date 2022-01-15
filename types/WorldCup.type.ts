import { ResponsiveImage } from "./ResponsiveImage.type";
import { Video } from "./Video.type";

export type WorldCup = {
  id: string;
  country: string;
  year: number;
  video: Video;
  logo: {
    responsiveImage: ResponsiveImage;
  };
};
