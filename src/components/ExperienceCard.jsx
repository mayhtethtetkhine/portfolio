const ExperienceCard = ({ period, position, org, description, bgColor, textColor, logo, type }) =>
{
  return (
    <div
      className={`relative snap-start shrink-0  w-[90vw] md:w-[50vw] lg:w-[30vw] rounded-4xl p-8 flex flex-col min-h-[480px] shadow-xl`}
      style={{ backgroundColor: bgColor, boxShadow: "0 10px 35px rgba(120, 90, 120, 0.12)" }}>

      {/* Current role tag */}
      <div
          className="absolute top-6 right-6 z-10 px-4 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-md shadow-lg transition-all duration-300 shadow-xl"
          style={{
            backgroundColor: "#ffffff70",
            color: textColor,
            // border: `0.5px solid #000000`,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
          }}
        >
          {type}
      </div>
      

      {/* Logo — fixed at top */}
      <div className="mb-12">
        {logo ? (
          <img src={logo} alt={org} className="h-25 w-auto object-contain" />
        ) : (
          <div className="w-24 h-10 rounded-md bg-text/10 flex items-center justify-center">
            <span
              className={`text-xs font-bold tracking-widest`}
              style={{ color: textColor }}
            >
              {org.slice(0, 7).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Spacer — pushes content down so all cards align at the bottom */}
      <div className="flex-1" />

      {/* Content — always starts at the same vertical position */}
      <div style={{ color: textColor }} className="text-justify">
        <p className="text-sm tracking-wide mb-4">{period}</p>
        <h3 className="text-2xl font-bold leading-tight mb-4">
          {position}
        </h3>
        <p className="leading-relaxed">{description}</p>
      </div>

    </div>
  );
};

export default ExperienceCard;