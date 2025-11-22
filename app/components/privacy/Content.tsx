import React from "react";
import Link from "next/link";

export default function Content() {
  return (
    <section className="w-screen text-black px-30 justify-between py-10">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl">1. Introduction</h1>
          <p className="text-md">
            Saha (“we”, “us”, “our”) is committed to protecting your personal
            information and handling it in a transparent, secure and lawful
            manner. This Privacy Policy explains:
          </p>
          <ul>
            <li>Who we are,</li>
            <li>
              How we collect, hold, use and disclose your personal information,
            </li>
            <li>Your rights in relation to your personal information, and </li>
            <li>How you can contact us.</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">2. Scope</h1>
          <p className="text-md">
            This Policy applies to personal information collected by us when: We
            provide services to our clients, You use our website or submit
            information through our online forms, or We undertake any other
            business activities.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">3. Personal Information We Collect</h1>
          <p className="text-md">
            We may collect personal information in a variety of ways, including
            when you: Provide your details via forms, email, phone or other
            interactions, Engage our services, Interact with our website
            (including via cookies, analytics and other technologies).Types of
            information we may collect include (but are not limited to): Name,
            contact details (email, phone, address) Job title, company name
            Enquiry and service-related details Usage data (IP address, browser
            type, device information) Any other information you choose to
            provide.We may also collect or be provided with “sensitive” personal
            information (such as health or dietary requirements) only where
            necessary and lawful.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">4. How We Collect It</h1>
          <p className="text-md">
            We collect personal information: Directly from you when you engage
            with us, fill in forms or contact us, Automatically when you use our
            website (including cookies and analytics), From third parties when
            you have consented or it is publicly available.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">5. Why We Collect It</h1>
          <p className="text-md">
            We collect personal information for purposes including: Providing
            and managing our services, Communicating with you (including
            responding to enquiries), Improving our website and offerings,
            Internal business operations, compliance and record-keeping,
            Marketing with your consent.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">
            6. Is it Optional to Provide Information?
          </h1>
          <p className="text-md">
            You are not required to provide your personal information. However,
            if you choose not to, we may not be able to respond to your enquiry,
            verify your identity or deliver certain services to you.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">7. How We Hold and Secure It</h1>
          <p className="text-md">
            We take appropriate technical, organisational and physical measures
            to protect your personal information from unauthorised access, loss,
            misuse or alteration. We retain your personal information only for
            as long as necessary for the purposes for which it was collected or
            as required by law.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">8. Disclosure & Overseas Transfers</h1>
          <p className="text-md">
            We may disclose personal information to: Our service providers,
            advisors or contractors who assist us in delivering services,
            Regulatory or legal authorities when required by law, In the event
            of a business sale, merger or restructuring.We may store or process
            personal information in cloud-based services located in New Zealand
            or overseas. Where we transfer information outside New Zealand, we
            will ensure appropriate safeguards are in place or will seek your
            consent.
          </p>
        </div>
      </div>
    </section>
  );
}
