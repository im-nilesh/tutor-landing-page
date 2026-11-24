import { Sparkles } from "lucide-react";

export default function PageHeading({ eyebrow, title, accent, description, align = "left" }) {
  return (
    <div className={`page-heading page-heading-${align}`}>
      <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
      <h1>{title} <em>{accent}</em></h1>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
