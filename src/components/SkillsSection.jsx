import Section from "./Section";
import Tag from "./Tag";

const TAG_ROTATIONS = [
  "-rotate-3", "rotate-2", "-rotate-4", "rotate-5",
  "-rotate-5", "rotate-4", "-rotate-2", "rotate-2",
];

const SkillsSection = ({ data, tinytitle }) =>
{
  const { heading, headingAccent, subheading, items } = data;

  return (
    <Section id="what-i-do" title={tinytitle}>
      <div className="mb-16 px-8 md:px-30">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}<br />
          <span className="text-primary">{headingAccent}</span>
        </h2>
        <p className="text-muted max-w-xl leading-relaxed">{subheading}</p>
      </div>

      <div className="flex flex-col">
        {items.map(({ title, description, tags }) => (
          <div key={title} className="py-14 border-t border-text/10">
            <h3 className="text-3xl md:text-5xl font-bold mb-10">{title}</h3>
            <div className="grid gap-10 items-start">
              {/* <p className="text-muted leading-relaxed">{description}</p> */}
              <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;