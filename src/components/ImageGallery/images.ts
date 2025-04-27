import axios from "axios";
import { FetchImagesResponse } from "../../types/types";

export const fetchImages = async (topic: string, page: number): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: '4tZABBp9ddRXxm6CcmGe1InvXS2Ig5C6vC9DtzFpFCA',
      query: topic,
      per_page: 12,
      page: page,
    },
  });
  return response.data;
};