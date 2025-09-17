// Utility function to merge class names (similar to clsx but lighter)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
