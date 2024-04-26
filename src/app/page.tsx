'use client'
import useSWR, { SWRResponse } from "swr";
import { fetcher } from "./utils/network";
import TracksList from "./Tracks/TracksList";
import { LoginForm } from "@/components/LoginForm";
export default function Home() {

  const {data, error, isLoading}: SWRResponse = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/top-tracks`, fetcher);
  if (error?.status === 401) {
    return (
      <LoginForm />
    )
  }
  return (
    <main className="container">
      <h1 className={`text-4xl`}>Top Tracks</h1>
      <TracksList tracks={data}/>
    </main>
  );
}
