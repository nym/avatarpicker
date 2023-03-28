import { createApi } from "unsplash-js";
import { useEffect, useState } from "react";

const unsplashApi = createApi({
  accessKey: "SiYUbVcmPN4o1obPBQv4nh7TQtbJ1hFtMFCjSAf39Dg"
});

const PlaceholderImage = "/avatars.jpg";

export const useUnsplashImage = (topic: string, counter: number = 0) => {
  const [imageUrl, setImageUrl] = useState<string>(PlaceholderImage);
  const [results, setResults] = useState<number>(0);

  useEffect(() => {
    if (topic) {
      unsplashApi.search.getPhotos({
        query: topic,
        page: counter + 1,
        perPage: 1
      }).then((result) => {
        if (result.type !== "success" || result.response.results.length === 0) {
          setImageUrl(PlaceholderImage);
          setResults(0);
        }
        const image = result.response?.results[0];
        setResults(result.response?.total || 0);
        setImageUrl(image?.urls.regular || PlaceholderImage);
      }).catch(() => {
        setImageUrl(PlaceholderImage);
        setResults(0);
      });
    }
  }, [topic, counter]);

  return { imageUrl, results };
};

export default useUnsplashImage;
