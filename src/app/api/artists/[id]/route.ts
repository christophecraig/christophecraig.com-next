import { getArtist } from "@/app/lib/spotify";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const response = await getArtist(params?.id);
    const data = await response.json();

    return Response.json(data);
}