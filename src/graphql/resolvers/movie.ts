import { MovieDiscover } from "@/generated/schema";

const Query = {
  movie: async (
    _: any,
    args: { id: string },
    { dataSources }
  ): Promise<MovieDiscover> => dataSources.movieAPI.fetchMovie(args.id)
};

export { Query };
