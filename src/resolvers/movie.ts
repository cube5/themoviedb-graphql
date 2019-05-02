import { MovieDiscover } from "../generated/schema";
import { IDataSources } from "../dataSources";

export async function movie(
  _: any,
  args: { id: string },
  { dataSources }: { dataSources: IDataSources }
): Promise<MovieDiscover> {
  console.log("fucking resolver movie");
  return dataSources.movieAPI.fetchMovie(args.id);
}
