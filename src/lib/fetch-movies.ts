import { MovieData } from "@/types";

export default async function fetchMovies(q?: string): Promise<MovieData[]> {
  let url = `https://onebite-cinema-server-eight.vercel.app/movie`;
  if (q) {
    url += `/search?q=${q}`;
  }
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
