export function getSizeFile(size: number): string {
  const KB = 1024
  const MB = KB * 1024
  const GB = MB * 1024

  if (size >= GB) {
    return `${(size / GB).toFixed(1)} ГБ`
  }

  if (size >= MB) {
    return `${(size / MB).toFixed(1)} МБ`
  }

  if (size >= KB) {
    return `${Math.round(size / KB)} КБ`
  }

  return `${Math.round(size)} Б`
}
