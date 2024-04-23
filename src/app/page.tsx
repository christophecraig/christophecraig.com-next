'use client'
import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./utils/network";
import TracksList from "./Tracks/TracksList";
export default function Home() {

  const {data, error, isLoading}: SWRResponse = useSWR('http://localhost:3000/api/top-tracks', fetcher);

  return (
    <main className="container">
      <h1 className={`text-4xl`}>Top Tracks</h1>
      <TracksList tracks={data}/>
    </main>
  );
}
