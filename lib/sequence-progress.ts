export function readSequenceProgress(section: HTMLElement) {
  const total = section.offsetHeight - window.innerHeight;
  if (total <= 0) return 0;
  const y = -section.getBoundingClientRect().top;
  return Math.min(1, Math.max(0, y / total));
}
