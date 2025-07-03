import { MovieData } from "@/types";

export default async function fetchRandomMovies(): Promise<MovieData[]> {
  const url = `https://onebite-cinema-server-eight.vercel.app/movie/random`;
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error();
    }
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
