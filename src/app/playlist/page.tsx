"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowLeft,
  Music,
  Play,
  Pause,
  Heart,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Track {
  id: string;
  name: string;
  artists: string;
  album: string;
  image: string;
  duration: number;
  spotifyUrl: string;
  previewUrl: string | null;
}

interface Artist {
  name: string;
  count: number;
}

interface PlaylistData {
  success: boolean;
  tracks: Track[];
  total: number;
  count: number;
}

export default function PlaylistFavoritePage() {
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/spotify-playlist");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: PlaylistData = await response.json();

        if (!data.success || !data.tracks) {
          throw new Error("Invalid response format");
        }

        const artistMap: Record<string, number> = {};
        data.tracks.forEach((track) => {
          const artistNames = track.artists
            .split(",")
            .map((name) => name.trim());
          artistNames.forEach((artist) => {
            artistMap[artist] = (artistMap[artist] || 0) + 1;
          });
        });

        const artistList: Artist[] = Object.entries(artistMap)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 20);

        setPlaylistData(data);
        setArtists(artistList);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load playlist"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlay = (trackId: string, previewUrl: string | null) => {
    if (!previewUrl) return;

    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(trackId);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading playlist...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <Music className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">
            Failed to Load Playlist
          </h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  if (!playlistData || playlistData.tracks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Music className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">No Tracks Found</h2>
          <p className="text-muted-foreground">
            Playlist is empty or unavailable
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Back Button */}
          <div className="flex justify-center mb-6">
            <Link href="/home">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>My Music</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Favorite <span className="bg-clip-text">Playlist</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Music that fuels my coding sessions and creative work
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {playlistData.count}
              </div>
              <div className="text-sm text-muted-foreground">Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {artists.length}
              </div>
              <div className="text-sm text-muted-foreground">Artists</div>
            </div>
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Tracks
          </h2>

          <div className="grid gap-3 sm:gap-4">
            {playlistData.tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/30 border border-border/20 rounded-xl hover:bg-muted/50 transition-all"
              >
                {/* Album Art */}
                <div className="relative flex-shrink-0">
                  <Image
                    src={track.image || "/placeholder-album.jpg"}
                    alt={track.album}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  {track.previewUrl && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute inset-0 w-full h-full bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handlePlay(track.id, track.previewUrl)}
                    >
                      {currentlyPlaying === track.id ? (
                        <Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white" />
                      )}
                    </Button>
                  )}
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{track.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {track.artists}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {track.album}
                  </p>
                </div>

                {/* Duration & Link */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDuration(track.duration)}
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Artists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <User className="w-6 h-6" />
            Top Artists
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 bg-muted/30 border border-border/20 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm font-medium truncate flex-1">
                  {artist.name}
                </span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {artist.count}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
