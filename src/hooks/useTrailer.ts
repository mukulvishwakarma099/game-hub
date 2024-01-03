import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
