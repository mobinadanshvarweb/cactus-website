import type { ReactNode } from "react";

const QuickAccess = ({
  icon,
  text,
  classname,
  href,
}: {
  icon: ReactNode;
  text: string;
  classname: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-2  rounded-full w-14 h-14 flex justify-center items-center bg-[#bdc4ce] cursor-pointer z-50 drop-shadow-2xl border-2 border-[#2c8039] group hover:w-32 hover:justify-start transition-all duration-200 overflow-hidden text-[#2c8039]  ${classname}`}
    >
      <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  group-hover:top-[-100%] transition-all duration-200">
        {icon}
      </span>
      <span className="w-28 flex justify-center items-center absolute right-[100%] top-[50%] group-hover:right-[50%] group-hover:translate-x-[50%] translate-y-[-50%] transition-all duration-200 text-sm">
        {text}
      </span>
    </a>
  );
};

export default QuickAccess;
