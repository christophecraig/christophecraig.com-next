
import { SimplifiedArtist } from "@spotify/web-api-ts-sdk"
import TrackArtist from "./TrackArtist";

interface TrackArtistsProps {
    artists: SimplifiedArtist[]
}

const TrackArtists: React.FC<TrackArtistsProps> = ({ artists }) => {
  return (<ul className={`flex`}>
    {artists?.map((artist) => (
    <li key={artist?.id}>
      <TrackArtist artist={artist}></TrackArtist>
    </li>
  ))}</ul>);
}

export default TrackArtists;