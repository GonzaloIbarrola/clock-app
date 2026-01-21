import Refresh from "../assets/images/desktop/icon-refresh.svg";

export default ({ data, onRefresh, isFetching }) => {
  console.log(data)
  return (
    <article className="flex">
      <div className="text-neutral-0 text-[18px] leading-[150%] flex gap-3 items-baseline">
        <div className="flex flex-col gap-3 flex-1">
          <p className="font-light lg:w-135">“{data.quote}”</p>
          <span>{data.author}</span>
        </div>
        <button
          className="cursor-pointer"
          onClick={onRefresh}
          disabled={isFetching}
        >
          <img src={Refresh} alt="Refresh button" />
        </button>
      </div>
    </article>
  );
};
