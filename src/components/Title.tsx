const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col text-green-900 gap-1 justify-center items-center text-3xl mb-4">
      <h2>{text}</h2>
      <span className="flex gap-2 items-center  w-full">
        <span className="w-full h-[0.5px] bg-green-900 flex"></span>
      </span>
    </div>
  );
};

export default Title;
