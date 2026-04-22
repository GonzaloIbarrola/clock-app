export const getCurrentTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export const timezone = getCurrentTimezone();

export const normalizeTimezone = (selectedTimezone = timezone) => {
  const aliases = {
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  };

  return aliases[selectedTimezone] ?? selectedTimezone;
};

const getDateParts = (date, selectedTimezone) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: selectedTimezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
};

const getUtcOffset = (date, selectedTimezone) => {
  const parts = getDateParts(date, selectedTimezone);
  const localDate = new Date(`${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`);
  const utcDate = new Date(date.toISOString().slice(0, 19));
  const offset = (localDate - utcDate) / (1000 * 60);
  const sign = offset >= 0 ? "+" : "-";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60).toString().padStart(2, "0");
  const minutes = (absOffset % 60).toString().padStart(2, "0");

  return `${sign}${hours}:${minutes}`;
};

const getDayOfYear = ({ year, month, day }) => {
  const current = Date.UTC(Number(year), Number(month) - 1, Number(day));
  const start = Date.UTC(Number(year), 0, 0);

  return Math.floor((current - start) / 86400000);
};

const getWeekNumber = ({ year, month, day: dayOfMonth }) => {
  const current = new Date(Date.UTC(Number(year), Number(month) - 1, Number(dayOfMonth)));
  const day = current.getUTCDay() || 7;
  current.setUTCDate(current.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));

  return Math.ceil(((current - yearStart) / 86400000 + 1) / 7);
};

export const getTimeByTimezone = (selectedTimezone = getCurrentTimezone()) => {
  const normalizedTimezone = normalizeTimezone(selectedTimezone);
  const now = new Date();
  const parts = getDateParts(now, normalizedTimezone);
  const utcOffset = getUtcOffset(now, normalizedTimezone);
  const datetime = `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${utcOffset}`;

  return {
    abbreviation: new Intl.DateTimeFormat("en-US", {
      timeZone: normalizedTimezone,
      timeZoneName: "short",
    })
      .formatToParts(now)
      .find(({ type }) => type === "timeZoneName")?.value,
    datetime,
    formattedTime: `${parts.hour}:${parts.minute}`,
    hour: parts.hour,
    minute: parts.minute,
    utc_datetime: now.toISOString(),
    unixtime: Math.floor(now.getTime() / 1000),
    timezone: normalizedTimezone,
    utc_offset: utcOffset,
    raw_offset: Number.parseInt(utcOffset, 10) * 60 * 60,
    day_of_week: new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day))).getUTCDay(),
    day_of_year: getDayOfYear(parts),
    week_number: getWeekNumber(parts),
    dst: false,
    dst_from: null,
    dst_until: null,
    dst_offset: 0,
    client_ip: null,
  };
};
