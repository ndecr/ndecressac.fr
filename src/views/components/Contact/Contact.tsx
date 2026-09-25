import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ContactFormModel } from "../../../hooks";
import type { PortfolioContent, SocialLink } from "../../../types";
import "./Contact.scss";

const socialIconByKind: Record<SocialLink["kind"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn
};

interface ContactProps {
  readonly content: PortfolioContent["contact"];
  readonly form: ContactFormModel;
  readonly socialLinks: readonly SocialLink[];
  readonly linksLabel: string;
}

export function Contact({ content, form, socialLinks, linksLabel }: ContactProps) {
  return (
    <section className="contact section" id="contact">
      <p className="contact__eyebrow">{content.eyebrow}</p>
      <h2 className="contact__title">{content.title}</h2>
      <p className="contact__description">{content.description}</p>
      <form className="contact__form" onSubmit={(event) => { void form.onSubmit(event); }}>
        <div className="contact__form-row">
          <label className="contact__field">
            <span className="contact__field-label">{content.form.nameLabel}</span>
            <input className="contact__field-input" name="name" onChange={form.onChange} required type="text" value={form.values.name} />
          </label>
          <label className="contact__field">
            <span className="contact__field-label">{content.form.emailLabel}</span>
            <input className="contact__field-input" name="email" onChange={form.onChange} required type="email" value={form.values.email} />
          </label>
        </div>
        <label className="contact__field">
          <span className="contact__field-label">{content.form.subjectLabel}</span>
          <input className="contact__field-input" name="subject" onChange={form.onChange} required type="text" value={form.values.subject} />
        </label>
        <label className="contact__field">
          <span className="contact__field-label">{content.form.messageLabel}</span>
          <textarea className="contact__field-input contact__field-input--message" name="message" onChange={form.onChange} required rows={6} value={form.values.message} />
        </label>
        <button className="contact__action" disabled={form.status === "sending"} type="submit">
          {form.status === "sending" ? content.form.sending : content.form.submit} <FiArrowUpRight aria-hidden="true" />
        </button>
        {form.statusMessage !== null ? <p className={`contact__feedback contact__feedback--${form.status}`} role="status">{form.statusMessage}</p> : null}
      </form>
      <nav className="contact__links" aria-label={linksLabel}>
        {socialLinks.map((link) => {
          const SocialIcon = socialIconByKind[link.kind];

          return (
            <a className="contact__link" href={link.href} key={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <SocialIcon className="contact__link-icon" aria-hidden="true" />
              <span>{link.label}</span>
              <FiArrowUpRight className="contact__link-arrow" aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </section>
  );
}
