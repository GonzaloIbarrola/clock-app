import Sun from "../assets/images/desktop/icon-sun.svg";
import Moon from "../assets/images/desktop/icon-moon.svg";
import { parseTimeData } from "../controllers/index.js";

export default function Time({ data,hour,width,isNight }) {
  const parsed = parseTimeData(data);
  const { formattedTime, formattedLocation } = parsed;

  return (
    <article className="flex flex-col gap-6 md:gap-10">
      <div className="text-neutral-0 uppercase font-light text-[20px] leading-[110%] tracking-[4px] flex gap-4">
        <img src={isNight ? Moon : Sun} alt="Sun logo" />
        <span>good {isNight ? "night" : "morning"}{width > 500 ? ", it´s currently" : " "}</span>
      </div>
      <div className="text-neutral-0 flex items-baseline">
        <h1 className="md:text-[200px] font-bold leading-[73%] md:tracking-[-5px] text-[100px] tracking-[-2.5px]">
          {formattedTime}
        </h1>
        <h6 className="md:text-[40px] text-[20px] leading-[73%] uppercase">
          UTC
        </h6>
      </div>
      <div>
        <p className="md:text-[24px] font-bold leading-[110%] md:tracking-[4.8px] text-[15px] tracking-[3px] uppercase text-neutral-0">
          In {formattedLocation}
        </p>
      </div>
    </article>
  );
}
