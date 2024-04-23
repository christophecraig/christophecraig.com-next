import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Artist, SimplifiedArtist } from "@spotify/web-api-ts-sdk";
import { Star } from "lucide-react";
import useSWR, { type SWRResponse } from "swr";
import { fetcher } from "../utils/network";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TrackArtistProps extends React.HTMLAttributes<HTMLDivElement> {
  artist: SimplifiedArtist
}

const TrackArtist: React.FC<TrackArtistProps> = ({ artist, className, children }) => {
  const {data, error, isLoading}: SWRResponse<Artist, any, any> = useSWR(`http://localhost:3000/api/artists/${artist?.id}`, fetcher);  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="#" className={cn(className, 'hover:underline')}>{children}</Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-start space-x-4">
          <Avatar>
            <AvatarImage src={data?.images[2].url} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{data?.name}</h4>
            <p className="text-sm">
              {data?.genres?.join(', ')}
            </p>
            <div className="flex items-center pt-2">
              <Star/>{" "}
              <span className="text-xs text-muted-foreground">
                {data?.popularity}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default TrackArtist;