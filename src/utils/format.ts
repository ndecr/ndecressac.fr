export function formatSequenceNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function formatCopyright(year: number, copyright: string): string {
  return `© ${String(year)} Nicolas Decressac · ${copyright}`;
}
