import { parseTimeData } from "../controllers/index.js";

export default function LocationInfo({ data }) {
  const parsed = parseTimeData(data);
  const { formattedLocation } = parsed;

  return (
    <article className="flex md:flex-row flex-col gap-4">
      <div className="lg:gap-10 md:gap-[38px] gap-4 lg:pr-20 flex flex-col flex-1">
        {/* CURRENT TIMEZONE */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-3">
          <span className="text-[10px] md:text-[15px] leading-[150%] tracking-[2px] md:tracking-[3px] uppercase">
            current timezone
          </span>
          <h3 className="text-[20px] md:text-[40px] lg:text[56px] font-bold leading-[120%] capitalize">
            {formattedLocation.replace(", ", "/")}
          </h3>
        </div>

        {/* DAY OF THE YEAR */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-3">
          <span className="text-[10px] md:text-[15px] leading-[150%] tracking-[2px] md:tracking-[3px] uppercase">
            day of the year
          </span>
          <h3 className="text-[20px] md:text-[40px] lg:text[56px] font-bold leading-[120%] capitalize">
            {data.day_of_year}
          </h3>
        </div>
      </div>

      <div className="md:gap-10 flex flex-col gap-4 flex-1 lg:pl-20 lg:border-l-solid lg:border-l lg:border-neutral-500/25">
        {/* DAY OF THE WEEK */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-3">
          <span className="text-[10px] md:text-[15px] leading-[150%] tracking-[2px] md:tracking-[3px] uppercase">
            day of the week
          </span>
          <h3 className="text-[20px] md:text-[40px] lg:text[56px] font-bold leading-[120%] capitalize">
            {data.day_of_week}
          </h3>
        </div>

        {/* WEEK NUMBER */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-3">
          <span className="text-[10px] md:text-[15px] leading-[150%] tracking-[2px] md:tracking-[3px] uppercase">
            week number
          </span>
          <h3 className="text-[20px] md:text-[40px] lg:text[56px] font-bold leading-[120%] capitalize">
            {data.week_number}
          </h3>
        </div>
      </div>
    </article>
  );
}
