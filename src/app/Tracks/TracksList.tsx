import type { Track } from "@spotify/web-api-ts-sdk";
import TrackComponent from "./Track";

interface TracksListProps {
    tracks: Track[]
}
const TracksList: React.FC<TracksListProps> = ({tracks}) => {
    console.log(tracks)
    return (
        <ol>
            {tracks?.map((track: Track) => (
                <TrackComponent key={track?.id} track={track}/>
            ))}
        </ol>
    )
}

export default TracksList;