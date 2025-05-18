import { PiCactus } from "react-icons/pi";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col text-green-900 gap-1 justify-center items-center text-3xl">
      <span>{text}</span>
      <span className="flex gap-2 items-center">
        <span className="w-16 h-[0.5px] bg-green-900"></span>
        <PiCactus size={20} />
        <span className="w-16 h-[0.5px] bg-green-900"></span>
      </span>
    </div>
  );
};

export default Title;
