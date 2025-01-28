export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    weekday: "long",
  };

  return date.toLocaleDateString("en-US", options);
}
