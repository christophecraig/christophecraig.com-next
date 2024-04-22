'use client'
import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./utils/network";
import type { Artist, SimplifiedArtist, Track } from "@spotify/web-api-ts-sdk";
import TrackArtists from "./Tracks/TrackArtists";
import TracksList from "./Tracks/TracksList";
export default function Home() {

  const {data, error, isLoading}: SWRResponse = useSWR('http://localhost:3000/api/top-tracks', fetcher);
console.log(data)
  return (
    <main className="container">
      <h1 className={`text-4xl`}>Top Tracks</h1>
      <TracksList tracks={data}/>
    </main>
  );
}
