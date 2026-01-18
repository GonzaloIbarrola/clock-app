import ArrowDown from "../assets/images/desktop/icon-arrow-down.svg";
import ArrowUp from "../assets/images/desktop/icon-arrow-up.svg";

export default function Button({ showToggle, toggle }) {
  return (
    <button
      onClick={showToggle}
      className="uppercase cursor-pointer text-neutral-900 font-bold leading-[140%] tracking-[5px] text-[16px] py-2 pl-5 pr-2 flex bg-neutral-0 rounded-full gap-3 items-center"
    >
      {!toggle ? "less" : "more"}
      <div className="bg-neutral-800 w-10 rounded-full flex items-center justify-center h-10">
        <img src={toggle ? ArrowDown : ArrowUp} alt="Arrow down" />
      </div>
    </button>
  );
}
