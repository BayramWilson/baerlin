import Image from "next/image";

const imageMeta = {
  "/images/hero.webp": { width: 1672, height: 941 },
  "/images/leistung-reparatur.webp": { width: 1448, height: 1086 },
  "/images/leistung-ersatzteile.webp": { width: 1448, height: 1086 },
  "/images/werkstatt.webp": { width: 1672, height: 941 },
  "/images/maschinen-lineup.webp": { width: 1536, height: 1024 },
  "/images/ablauf-1-abgabe.webp": { width: 1254, height: 1254 },
  "/images/ablauf-2-diagnose.webp": { width: 1254, height: 1254 },
  "/images/ablauf-3-fertig.webp": { width: 1254, height: 1254 },
  "/images/abholservice.webp": { width: 1536, height: 1024 },
  "/images/team-portrait.webp": { width: 1122, height: 1402 },
  "/images/ladenfront.webp": { width: 1672, height: 941 },
  "/images/cta-hintergrund.webp": { width: 1672, height: 941 },
} as const;

type ImageSrc = keyof typeof imageMeta;

export function SiteImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: ImageSrc;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const meta = imageMeta[src];

  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={meta.width}
        height={meta.height}
        priority={priority}
        loading={priority ? undefined : "eager"}
        sizes={sizes}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}
