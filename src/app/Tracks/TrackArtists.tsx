
import { SimplifiedArtist } from "@spotify/web-api-ts-sdk"
import TrackArtist from "./TrackArtist";

interface TrackArtistsProps extends React.HTMLAttributes<HTMLDivElement> {
    artists: SimplifiedArtist[]
}

const TrackArtists: React.FC<TrackArtistsProps> = ({ artists }) => {
  return (<div>
    {artists?.map((artist, index) => (
      <TrackArtist key={artist?.id} className="text-xs text-muted-foreground inline" artist={artist}><span>{(index ? ', ' : '') + artist?.name}</span></TrackArtist>
  ))}</div>);
}

export default TrackArtists;