import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function BrandMark({
  className = "h-12 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-m.png"
      alt={BRAND.name}
      width={852}
      height={308}
      className={className}
      priority={priority}
      sizes="180px"
      quality={85}
    />
  );
}
