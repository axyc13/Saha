"use client";

import { FormEvent, useState } from "react";

export default function CareersContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrap">
      <div className="contact-card">
        <div className="contact-card-top">
          <div className="contact-card-top-grid" />
          <div className="contact-card-top-glow" />
          <p className="eyebrow">Get in touch</p>
          <h2>
            Send us a <em>message.</em>
          </h2>
          <p>
            Have a question about internships or just want to know more about
            saha.? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="contact-card-body">
          {!submitted ? (
            <div id="contact-form-wrap">
              <form className="cf" noValidate onSubmit={handleSubmit}>
                <div className="cf-row">
                  <div className="cf-field">
                    <label>
                      First name <span className="req">*</span>
                    </label>
                    <input
                      autoComplete="given-name"
                      name="first_name"
                      placeholder="Jane"
                      required
                      type="text"
                    />
                  </div>
                  <div className="cf-field">
                    <label>
                      Last name <span className="req">*</span>
                    </label>
                    <input
                      autoComplete="family-name"
                      name="last_name"
                      placeholder="Smith"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="cf-field">
                  <label>
                    Email address <span className="req">*</span>
                  </label>
                  <input
                    autoComplete="email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="cf-field">
                  <label>
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="What would you like to know?"
                    required
                  />
                </div>
                <button className="btn-contact-send" type="submit">
                  Send message →
                </button>
              </form>
            </div>
          ) : (
            <div className="contact-success" id="contact-success" style={{ display: "flex" }}>
              <div className="contact-success-icon">✓</div>
              <h3>Message sent.</h3>
              <p>We&apos;ll get back to you soon. Thanks for reaching out.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
