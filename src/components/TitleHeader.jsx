const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-2xl text-center leading-tight px-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
