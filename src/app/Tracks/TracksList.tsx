import type { Track } from "@spotify/web-api-ts-sdk";
import TrackComponent from "./TrackComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TracksListProps {
    tracks: Track[]
}
const TracksList: React.FC<TracksListProps> = ({ tracks }) => {
    return (<>
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
                {tracks?.map((track) => (
                    <TrackComponent
                        key={track.id}
                        track={track}
                        className="w-[250px]"
                        aspectRatio="portrait"
                        width={250}
                        height={330}
                    />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </>
    )
}

export default TracksList;