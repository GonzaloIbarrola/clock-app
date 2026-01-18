import "./App.css";
import { useState } from "react";
import { useQuote, useIPGeolocation, useWorldTime } from "./hooks";
import { Quote, Button, Time, LocationInfo } from "./components";
import { useScreenSize } from "./controllers";

function App() {
  const { width } = useScreenSize();
  const { data: quote,isLoading: quoteLoading,refetch,isFetching } = useQuote();
  const { data: ipInfo, isLoading: ipLoading } = useIPGeolocation();
  const { data: time, isLoading: timeLoading } = useWorldTime(ipInfo?.timezone || "Etc/UTC");

  const [toggle, setToggle] = useState(true);
  const isLoading = ipLoading || timeLoading || quoteLoading;
  if (isLoading) return <p>Cargando...</p>;

  const hours = new Date(time.datetime).getHours().toString().padStart(2, "0");
  const isNight = hours >= 22 || hours < 5;

  const showToggle = () => setToggle((prev) => !prev);

  return (
    <main
      className={`flex flex-col justify-between bg-black/40 bg-blend-darken ${
        isNight
          ? "bg-[url(../src/assets/images/desktop/bg-image-nighttime.jpg)]"
          : "bg-[url(../src/assets/images/desktop/bg-image-daytime.jpg)]"
      } bg-no-repeat bg-cover box-border`}
    >
      <div className={`h-screen px-4 py-8 md:p-16 lg:px-41.25 lg:py-16 flex flex-col ${toggle ? "justify-between" : "justify-end gap-[82px] md:gap-[70px] lg:gap-[60px]"}`}>
        {/* Quote */}
        <section className={!toggle ? "hidden" : ""}>
          <Quote data={quote} onRefresh={refetch} isFetching={isFetching} />
        </section>

        {/* Time */}
        <section className={`flex lg:flex-row flex-col lg:justify-between lg:items-end lg:flex-1 gap-16 md:gap-20`}>
          <Time hour={hours} isNight={isNight} data={time} width={width} />
          <div>
            <Button showToggle={showToggle} toggle={toggle} />
          </div>
        </section>

        {/* Location info */}
        <section
          className={
            toggle
              ? "hidden"
              : `${isNight ? "bg-neutral-900/75 **:text-neutral-0" : "bg-neutral-0/75 **:text-neutral-800"} backdrop-blur-xl  md:h-[430px] lg:h-[400px] px-16 py-[112px] -mx-4 -mb-8 md:-mx-16 md:-mb-[60px] lg:px-41.25 lg:py-20 lg:-mx-41.25 lg:-mb-15.75`
          }
        >
          <LocationInfo data={time} />
        </section>
      </div>
    </main>
  );
}

export default App;
