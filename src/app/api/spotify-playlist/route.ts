import { NextRequest, NextResponse } from "next/server";
import https from "https";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyTrack {
  track: {
    id: string;
    name: string;
    artists: Array<{ name: string }>;
    album: {
      name: string;
      images: Array<{ url: string; height: number; width: number }>;
    };
    duration_ms: number;
    external_urls: {
      spotify: string;
    };
    preview_url: string | null;
  } | null;
}

interface SpotifyPlaylistResponse {
  items: SpotifyTrack[];
  total: number;
  limit: number;
  offset: number;
}

export async function GET(request: NextRequest) {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const playlist_id = process.env.SPOTIFY_PLAYLIST_ID;

    console.log("🎵 Starting Spotify API request...");
    console.log("Environment check:", {
      hasClientId: !!client_id,
      hasClientSecret: !!client_secret,
      playlistId: playlist_id,
    });

    if (!client_id || !client_secret) {
      console.error("❌ Missing Spotify credentials");
      return NextResponse.json(
        {
          error: "Spotify credentials not configured",
          details:
            "Please check SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in environment variables",
        },
        { status: 500 }
      );
    }

    const agent = new https.Agent({ keepAlive: true });

    // Get access token
    console.log("🔑 Requesting access token...");
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      }
    );

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error("❌ Token request failed:", {
        status: tokenResponse.status,
        statusText: tokenResponse.statusText,
        error: errorText,
      });

      return NextResponse.json(
        {
          error: "Failed to authenticate with Spotify",
          details: `HTTP ${tokenResponse.status}: ${tokenResponse.statusText}`,
          spotifyError: errorText,
        },
        { status: 500 }
      );
    }

    const tokenData: SpotifyTokenResponse = await tokenResponse.json();
    console.log("✅ Token obtained successfully");

    // Get playlist tracks
    console.log("🎶 Fetching playlist tracks...");
    const playlistUrl = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=50&fields=items(track(id,name,artists(name),album(name,images),duration_ms,external_urls,preview_url)),total,limit,offset`;

    const playlistResponse = await fetch(playlistUrl, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!playlistResponse.ok) {
      const errorText = await playlistResponse.text();
      console.error("❌ Playlist request failed:", {
        status: playlistResponse.status,
        statusText: playlistResponse.statusText,
        error: errorText,
        url: playlistUrl,
      });

      return NextResponse.json(
        {
          error: "Failed to fetch playlist from Spotify",
          details: `HTTP ${playlistResponse.status}: ${playlistResponse.statusText}`,
          spotifyError: errorText,
          playlistId: playlist_id,
        },
        { status: 500 }
      );
    }

    const playlistData: SpotifyPlaylistResponse = await playlistResponse.json();
    console.log(`✅ Playlist fetched: ${playlistData.items.length} items`);

    const tracks = playlistData.items
      .filter((item) => item.track && item.track.id)
      .map((item) => {
        if (!item.track) return null;

        return {
          id: item.track.id,
          name: item.track.name,
          artists:
            item.track.artists?.map((artist) => artist.name).join(", ") ||
            "Unknown Artist",
          album: item.track.album?.name || "Unknown Album",
          image: item.track.album?.images?.[0]?.url || "",
          duration: item.track.duration_ms || 0,
          spotifyUrl: item.track.external_urls?.spotify || "",
          previewUrl: item.track.preview_url,
        };
      })
      .filter(Boolean);

    console.log(`✅ Processed ${tracks.length} valid tracks`);

    return NextResponse.json({
      success: true,
      tracks,
      total: playlistData.total,
      count: tracks.length,
    });
  } catch (error) {
    console.error("💥 Spotify API Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
    });

    return NextResponse.json(
      {
        error: "Internal server error",
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
