import "./SectionLabel.css";

export function SectionLabel({ number, label }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}