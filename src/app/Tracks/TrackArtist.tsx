import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Artist, SimplifiedArtist } from "@spotify/web-api-ts-sdk";
import { Star } from "lucide-react";
import useSWR, { type SWRResponse } from "swr";
import { fetcher } from "../utils/network";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PersonIcon } from "@radix-ui/react-icons";

interface TrackArtistProps extends React.HTMLAttributes<HTMLDivElement> {
  artist: SimplifiedArtist
}

const TrackArtist: React.FC<TrackArtistProps> = ({ artist, className, children }) => {
  const {data, error, isLoading}: SWRResponse<Artist, any, any> = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/artists/${artist?.id}`, fetcher);  return (
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
            <div className="flex items-start pt-2">
              <Star/>{" "}
              <span className="text-xs text-muted-foreground">
                {data?.popularity}
              </span>
            </div>
            <div className="flex items-start pt-2">
              <PersonIcon/>{" "}
              <span className="text-xs text-muted-foreground">
                {data?.followers?.total || 0}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default TrackArtist;