import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function BrandMark({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-mark.png"
      alt={BRAND.name}
      width={195}
      height={222}
      className={className}
      priority={priority}
    />
  );
}
