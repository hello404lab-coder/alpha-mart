import { OBJECT_POS } from "./frames";

export function fitCanvas(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
  const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}

export function sourceSize(image: CanvasImageSource) {
  if (image instanceof HTMLImageElement) {
    return {
      w: image.naturalWidth || image.width,
      h: image.naturalHeight || image.height,
    };
  }
  if (typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return { w: image.width, h: image.height };
  }
  return { w: 1600, h: 900 };
}

export function drawCover(
  ctx: CanvasRenderingContext2D,
  image: CanvasImageSource,
  canvas: HTMLCanvasElement,
  posX = OBJECT_POS.x,
  posY = OBJECT_POS.y,
) {
  const { w: imgW, h: imgH } = sourceSize(image);
  if (!imgW || !imgH) return;
  const w = canvas.width;
  const h = canvas.height;
  const scale = Math.max(w / imgW, h / imgH);
  const dw = imgW * scale;
  const dh = imgH * scale;
  const dx = (w - dw) * posX;
  const dy = (h - dh) * posY;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, dx, dy, dw, dh);
}
