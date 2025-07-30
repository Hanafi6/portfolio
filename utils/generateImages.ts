export function generateImages(basePath: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${basePath}img${i + 1}.png`);
}
