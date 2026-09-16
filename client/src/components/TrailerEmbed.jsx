import { ExternalLink, Play } from "lucide-react";

function TrailerEmbed({ videoKey, title }) {
  if (!videoKey) {
    return null;
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;
  const embedUrl = `https://www.youtube.com/embed/${videoKey}`;

  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-2xl bg-[#121a2b]">
        <iframe
          src={embedUrl}
          title={`${title} official trailer`}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <Play
            size={14}
            aria-hidden="true"
          />

          Trailer provided through YouTube.
        </p>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
        >
          Watch on YouTube
          <ExternalLink
            size={14}
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}

export default TrailerEmbed;