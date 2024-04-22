import { topTracks } from "../../lib/spotify";

export async function GET() {
    const response = await topTracks();
    const { items: tracks } = await response.json();





    return Response.json(tracks);
}