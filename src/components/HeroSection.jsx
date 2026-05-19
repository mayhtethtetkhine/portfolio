
import { TypeAnimation } from 'react-type-animation';
import TypingLine from "./TypingLine";

const HeroSection = ({ data }) =>
{
  const { heading, highlightWords, bio } = data;

  return (
    <section className="min-h-screen flex flex-col justify-end px-16 md:px-68 pb-24 pt-32">
      {/* <p className="text-xs tracking-[0.3em] text-primary uppercase mb-6">{badge}</p> */}

      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-10">
        {heading.map((line, i) =>
        {
          const words = line.split(" ");

          return (
            <span key={i}>
              {i === 1 ? (
                <TypingLine
                  line={line}
                  highlightWords={highlightWords}
                  speed={30}
                />
              ) : (
                words.map((word, idx) => (
                  <span
                    key={idx}
                    className={
                      highlightWords.includes(word.replace(".", ""))
                        ? "text-primary"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))
              )}

              {i < heading.length - 1 && <br />}
            </span>
          );
        })}
      </h1>
      {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
        {heading.map((line, i) =>
        {
          let renderedLine = line;

          highlightWords.forEach((word) =>
          {
            renderedLine = renderedLine.replace(
              word,
              `|||HIGHLIGHT_START|||${word}|||HIGHLIGHT_END|||`
            );
          });

          const parts = renderedLine.split(/(\|\|\|HIGHLIGHT_START\|\|\|.*?\|\|\|HIGHLIGHT_END\|\|\|)/g);

          return (
            <span key={i}>
              {i === 2 ? (
                <TypeAnimation
                  sequence={[line, 50]}
                  wrapper="span"
                  speed={65}
                  cursor={false}
                  repeat={0}
                />
              ) : (
                parts.map((part, idx) =>
                {
                  if (
                    part.startsWith("|||HIGHLIGHT_START|||") &&
                    part.endsWith("|||HIGHLIGHT_END|||")
                  )
                  {
                    const cleanWord = part
                      .replace("|||HIGHLIGHT_START|||", "")
                      .replace("|||HIGHLIGHT_END|||", "");

                    return (
                      <span key={idx} className="text-primary">
                        {cleanWord}
                      </span>
                    );
                  }

                  return <span key={idx}>{part}</span>;
                })
              )}

              {i < heading.length - 1 && <br />}  
            </span>
          );
        })}
      </h1> */}
      {bio.map((paragraph, i) => (
        <p key={i} className={`text-sm md:text-base text-muted max-w-lg leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default HeroSection;