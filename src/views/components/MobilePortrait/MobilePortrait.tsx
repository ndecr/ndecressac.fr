import "./MobilePortrait.scss";

interface MobilePortraitProps {
  readonly caption: string;
}

export function MobilePortrait({ caption }: MobilePortraitProps) {
  return (
    <figure className="mobile-portrait">
      <span className="mobile-portrait__decoration" aria-hidden="true" />
      <div className="mobile-portrait__frame">
        <span className="mobile-portrait__mark" aria-hidden="true">ND.</span>
        <img className="mobile-portrait__image" src="/nicolas-decressac-2026.jpg" alt="" />
      </div>
      <figcaption className="mobile-portrait__caption">{caption}</figcaption>
    </figure>
  );
}
