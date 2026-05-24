import "../index.css";

const Tag = ({ label }) =>
{
  return (
    <span className="px-4 py-2 rounded-full border border-transparent bg-primary/10 text-primary cursor-default transition-all duration-300 hover:-translate-y-0.7 hover:scale-105 hover:border-primary hover:text-primary hover:shadow-[0_10px_25px_rgba(88,33,128,0.28)]">  
    {label}
    </span>
    
  );
};

export default Tag;