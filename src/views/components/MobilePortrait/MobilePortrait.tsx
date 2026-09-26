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
        <picture className="mobile-portrait__picture">
          <source
            sizes="calc(100vw - 40px)"
            srcSet="/nicolas-decressac-2026-640.webp 640w, /nicolas-decressac-2026-960.webp 960w"
            type="image/webp"
          />
          <img
            alt=""
            className="mobile-portrait__image"
            decoding="async"
            height="1600"
            loading="lazy"
            sizes="calc(100vw - 40px)"
            src="/nicolas-decressac-2026.jpg"
            width="1200"
          />
        </picture>
      </div>
      <figcaption className="mobile-portrait__caption">{caption}</figcaption>
    </figure>
  );
}
