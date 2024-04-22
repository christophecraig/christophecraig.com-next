import { Track } from "@spotify/web-api-ts-sdk";
import TrackArtists from "./TrackArtists";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TrackProps {
    track: Track
}

const TrackComponent: React.FC<TrackProps> = ({ track }) => {
    return (<li key={track.id}>
        <Card>
            <CardHeader>
                <CardTitle>
                    {track.name}
                </CardTitle>
            </CardHeader>
            <CardFooter>
                <TrackArtists artists={track?.artists} />
            </CardFooter>
        </Card>
    </li>
    );

}

export default TrackComponent;