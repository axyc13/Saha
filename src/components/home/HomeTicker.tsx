const tickerContent =
  "AI Strategy & Advisory — AI Implementation — Process Automation — AI Training & Enablement — Career Coaching — Life Coaching & Goal Setting — Study & Academic Coaching — Relationship & Social Skills — Web Presence & Branding — Social Media Consulting — SEO & Online Visibility — Content & Copywriting — Digital Tools & Automation — E-Commerce Solutions —";

export default function HomeTicker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track" id="ticker">
        <div className="ticker-item">{tickerContent}</div>
        <div aria-hidden="true" className="ticker-item">
          {tickerContent}
        </div>
      </div>
    </div>
  );
}
