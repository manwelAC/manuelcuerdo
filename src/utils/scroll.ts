"use client";

let currentRafId: number | null = null;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function animateScrollToY(
  targetY: number,
  duration = 650,
  onComplete?: () => void
) {
  if (typeof window === "undefined") return;

  if (currentRafId !== null) {
    cancelAnimationFrame(currentRafId);
    currentRafId = null;
  }

  const startY = window.scrollY;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));
  const diff = clampedTargetY - startY;

  if (Math.abs(diff) < 2) {
    window.scrollTo(0, clampedTargetY);
    onComplete?.();
    return;
  }

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) {
      currentRafId = requestAnimationFrame(step);
    } else {
      currentRafId = null;
      onComplete?.();
    }
  };

  currentRafId = requestAnimationFrame(step);
}

export function animateScrollToElement(
  elementId: string,
  offset = 88,
  duration = 650,
  onComplete?: () => void
): boolean {
  if (typeof window === "undefined") return false;
  const el = document.getElementById(elementId);
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - offset;
  animateScrollToY(targetY, duration, onComplete);
  return true;
}
