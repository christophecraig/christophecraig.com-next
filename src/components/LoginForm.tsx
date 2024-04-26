import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LoginForm() {
    const spotifyAuthLink = `https://accounts.spotify.com/authorize?client_id=ad6d0c7508a3452384dd8bd3b661a120&response_type=code&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&scope=user-read-private+user-read-email+user-library-read+user-library-modify+playlist-read-private+playlist-modify-public+playlist-modify-private+user-top-read+user-read-playback-position+user-read-recently-played+user-follow-read+user-follow-modify+user-read-currently-playing+user-read-playback-state+user-modify-playback-state+ugc-image-upload+streaming+app-remote-control`

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
          <Button asChild variant="outline" className="w-full">
            <Link href={spotifyAuthLink}>Sign up with Spotify</Link>
          </Button>
        </div>
        </div>
      </CardContent>
    </Card>
  )
}
