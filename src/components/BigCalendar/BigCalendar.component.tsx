import {
  Calendar,
  CalendarProps,
  Views,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export function BigCalendar({ ...props }: Omit<CalendarProps, "localizer">) {
  return (
    <Calendar
      selectable
      defaultView={Views.WEEK}
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={new Date()}
      views={["day", "agenda", "week"]}
      {...props}
      localizer={localizer}
    />
  );
}
