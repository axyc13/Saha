import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-screen text-black px-30 justify-between py-10">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl">1. Scope</h1>
          <p className="text-md">
            These Terms of Use (“Terms”) apply to your access to and use of this
            website, its content, features and services (the “Website”) operated
            by Saha (“we”, “us”, “our”). By using this Website, you agree to be
            bound by these Terms. If you do not agree, please cease using the
            Website immediately.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">2. Changes to Terms</h1>
          <p className="text-md">
            We may revise these Terms at any time at our sole discretion.
            Revised Terms will be posted on this page or referenced from this
            Website. The revised Terms are effective when posted unless stated
            otherwise. Your continued use of the Website after changes signifies
            your acceptance of the revised Terms.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">3. Use of Content</h1>
          <p className="text-md">
            The content on this Website is provided for general information only
            and does not constitute professional advice. Before acting on any
            information, you should consult an appropriate professional advisor.
            <br />
            <br />
            You are authorised to view, copy, print and distribute content from
            this Website only if all of the following apply: The content does
            not state that copying, printing or distribution is prohibited; Your
            use is for informational, non-commercial purposes only; Any copy
            contains the copyright and attribution notice from the original; You
            comply with all obligations under these Terms.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">4. Restrictions</h1>
          <p className="text-md">
            You are not authorised to copy or use any software, proprietary
            processes or technology described on this Website. You must comply
            with all applicable laws and regulations in your access and use of
            this Website.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">5. Intellectual Property</h1>
          <p className="text-md">
            All content on this Website (text, graphics, logos, icons, images,
            audio clips, data compilations and software) is owned by or licensed
            to us and is protected by copyright, trademark, and other
            intellectual property laws. Unless expressly authorised in writing,
            you may not use or reproduce our trade marks, logos or other
            branding elements.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">6. Termination</h1>
          <p className="text-md">
            We may suspend, restrict or terminate your access to this Website at
            any time, in our sole discretion, without notice or liability to you
            or any third party.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">7. Links to Other Sites</h1>
          <p className="text-md">
            This Website may contain links to third-party websites or resources.
            We are not responsible for the availability, accuracy or content of
            such external sites. Links do not imply endorsement of those sites
            or their content.
          </p>
        </div>
        <div>
          <h1 className="text-3xl">8. Disclaimer & Limitation of Liability</h1>
          <p className="text-md">
            This Website is provided “as is” and “as available”. To the fullest
            extent permitted under New Zealand law, we disclaim all warranties,
            whether express or implied, including (but not limited to)
            warranties of merchantability, title, fitness for purpose,
            non-infringement, accuracy and security. We shall not be liable for
            any direct, indirect, incidental, consequential, punitive or other
            damages whatsoever arising out of or in connection with your use of,
            or inability to use, the Website. Our total liability, whether in
            contract, tort (including negligence) or otherwise, is limited to
            the amount (if any) you have paid us in the previous 12 months.
          </p>
        </div>
      </div>
    </section>
  );
}
