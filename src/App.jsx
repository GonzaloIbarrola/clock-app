import "./App.css";
import { useState } from "react";
import { useQuote, useWorldTime } from "./hooks";
import { Quote, Button, Time, LocationInfo } from "./components";
import { useScreenSize } from "./controllers";
import daytimeBackground from "./assets/images/desktop/bg-image-daytime.jpg";
import nighttimeBackground from "./assets/images/desktop/bg-image-nighttime.jpg";

function App() {
  const { width } = useScreenSize();
  const { data: quote,isLoading: quoteLoading,refetch,isFetching } = useQuote();
  const { data: time, isLoading: timeLoading } = useWorldTime();

  const [toggle, setToggle] = useState(true);
  const isLoading = timeLoading || quoteLoading;
  if (isLoading) return <p>Cargando...</p>;
  if (!time) return <p>No se pudo cargar la hora.</p>;

  const hours = time.hour;
  const isNight = hours >= 20 || hours < 5;
  const backgroundImage = isNight ? nighttimeBackground : daytimeBackground;

  const showToggle = () => setToggle((prev) => !prev);

  return (
    <main
      className="flex flex-col justify-between bg-black/40 bg-blend-darken bg-no-repeat bg-cover box-border"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`h-screen px-4 py-8 md:p-16 lg:px-41.25 lg:py-16 flex flex-col ${toggle ? "justify-between" : "justify-end gap-20.5 md:gap-17.5 lg:gap-15"}`}>
        {/* Quote */}
        <section className={!toggle ? "hidden" : ""}>
          <Quote data={quote} onRefresh={refetch} isFetching={isFetching} />
        </section>

        {/* Time */}
        <section className={`flex lg:flex-row flex-col lg:justify-between lg:items-end lg:flex-1 gap-16 md:gap-20`}>
          <Time isNight={isNight} data={time} width={width} />
          <div>
            <Button showToggle={showToggle} toggle={toggle} />
          </div>
        </section>

        {/* Location info */}
        <section
          className={
            toggle
              ? "hidden"
              : `${isNight ? "bg-neutral-900/75 **:text-neutral-0" : "bg-neutral-0/75 **:text-neutral-800"} backdrop-blur-xl  md:h-107.5 lg:h-[400px] px-16 py-28 -mx-4 -mb-8 md:-mx-16 md:-mb-15 lg:px-41.25 lg:py-20 lg:-mx-41.25 lg:-mb-15.75`
          }
        >
          <LocationInfo data={time} />
        </section>
      </div>
    </main>
  );
}

export default App;
