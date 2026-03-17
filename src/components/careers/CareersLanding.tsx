"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReactNode } from "react";
import heroImage from "@/public/career_hero.png";
import secImage from "@/public/career_sec1.png";

type Pathway = {
  title: string;
  summary: string;
  href: string;
};

type ValueCard = {
  title: string;
  description: string;
};

type GainItem = {
  title: string;
  description: string;
};

type TabKey = "culture" | "pathways" | "gains" | "values";

const pathways: Pathway[] = [
  {
    title: "Finance",
    summary:
      "Support real financial management, reporting, and advisory work with direct exposure to practical decision-making.",
    href: "/services/finance",
  },
  {
    title: "Consulting",
    summary:
      "Help solve business problems for our growing client base through structured analysis, clear thinking, and practical recommendations.",
    href: "/services",
  },
  {
    title: "Software & Computer Science",
    summary:
      "Build and improve the tools and systems that power our business and strengthen how we deliver work.",
    href: "/services/ulux",
  },
  {
    title: "Marketing",
    summary:
      "Shape the voice and presence of a brand with something to say through content, campaigns, and communication.",
    href: "/contactus",
  },
  {
    title: "Web Development",
    summary:
      "Design and build digital experiences through our ULUX venture, with an emphasis on quality, usability, and thoughtful execution.",
    href: "/services/web",
  },
];

const gains: GainItem[] = [
  {
    title: "Real project experience",
    description: "Work on meaningful tasks that contribute to actual outcomes.",
  },
  {
    title: "Exposure to cross-functional work",
    description: "See how different disciplines work together in practice.",
  },
  {
    title: "Constructive feedback and mentorship",
    description: "Grow through support, guidance, and thoughtful review.",
  },
  {
    title: "A stronger CV and professional portfolio",
    description:
      "Leave with work that reflects real responsibility and contribution.",
  },
  {
    title: "Greater confidence in your field",
    description: "Build assurance through contribution, experience, and learning.",
  },
  {
    title: "A clearer understanding of meaningful work",
    description:
      "Develop a more grounded view of what good work looks like in practice.",
  },
];

const values: ValueCard[] = [
  {
    title: "Kia Pono",
    description:
      "Honesty before anything, in the way we work, communicate, and serve others.",
  },
  {
    title: "Kia Ako",
    description:
      "Always learning by staying curious, welcoming feedback, and improving through every project.",
  },
  {
    title: "Kia Mahi",
    description:
      "Getting things done with discipline, consistency, and the understanding that your work matters from day one.",
  },
  {
    title: "Kia Tūhono",
    description:
      "Backing our people fully so teams can contribute, grow, and succeed together. No one carries the weight alone.",
  },
];

const internshipTabs: { key: TabKey; label: string }[] = [
  { key: "culture", label: "People & Culture" },
  { key: "pathways", label: "Pathways" },
  { key: "gains", label: "What You'll Gain" },
  { key: "values", label: "Our Values" },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1f2a35]">{title}</h2>
      {description && (
        <p className="mt-4 text-[#3c4651] text-sm md:text-base leading-7">{description}</p>
      )}
    </div>
  );
}

function SolidCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base !bg-[#3b4f63] !text-[#f7f7f4] !border-[#3b4f63] border transition-colors duration-300 hover:!bg-[#1E2A38] hover:!border-[#1E2A38]"
    >
      {label}
    </Link>
  );
}

function OutlineCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base border border-[#1E2A38] text-[#1E2A38] bg-transparent hover:bg-[#1E2A38] hover:text-[#f7f7f4] transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

export default function CareersLanding() {
  const [activeTab, setActiveTab] = useState<TabKey>("culture");

  return (
    <main className="bg-[#f5f7fa] text-[#1f2a35]">
      {/* Hero Section */}
      <section className="px-6 md:px-10 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-18">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-7"
          >
            <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76]">
              Careers At Saha
            </p>
            <h1 className="text-4xl sm:text-3xl lg:text-4xl text-[#1f2a35]">Student Internships at Saha</h1>
            <p className="text-lg md:text-xl text-[#3c4651]">
              Where your potential meets real opportunity.
            </p>
            <p className="text-sm md:text-base leading-7 text-[#3c4651] max-w-2xl">
              At Saha, our people are everything. We are guided by the words
              &nbsp;&ldquo;He tangata, he tangata, he tangata&rdquo; - it is the people, it
              is the people, it is the people. That belief extends not only to
              our clients, but also to the next generation of professionals who
              are just getting started.
            </p>
            <p className="text-sm md:text-base leading-7 text-[#3c4651] max-w-2xl">
              Our internship programme is designed to give students meaningful
              exposure, real responsibility, and the opportunity to grow
              alongside a team that genuinely invests in their development.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <SolidCta href="#apply" label="Apply Now" />
              <OutlineCta href="/contactus" label="Contact Us" />
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[520px] rounded-2xl overflow-hidden"
          >
            <Image
              src={heroImage}
              alt="Saha team and cityscape"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Unified Internship Tabs Section */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20 bg-[#eef2f5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="Inside Internships At Saha"
              title="Explore internships at Saha."
              description="A people-first view of our culture, pathways, development outcomes, and values."
            />
          </motion.div>

          {/* Tab Navigation */}
          <div className="mt-10 overflow-x-auto border-b border-[#d7dde2]">
            <div
              role="tablist"
              aria-label="Internship information tabs"
              className="flex min-w-max gap-10 md:gap-14"
            >
              {internshipTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                if (tab.key === "values") {
                  return (
                    <Link
                      key={tab.key}
                      id={`tab-${tab.key}`}
                      href="/whoweare/values"
                      role="tab"
                      aria-selected={false}
                      aria-controls={`panel-${tab.key}`}
                      className="group relative !bg-transparent !rounded-none !px-0 !py-0 !border-0 pb-4 text-[15px] md:text-base tracking-[0.01em] text-[#3b4f63] hover:!text-[#f8fafc] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2A38] focus-visible:ring-offset-2"
                    >
                      {tab.label}
                      <span className="pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[1.5px] bg-transparent group-hover:bg-[#f8fafc] transition-colors duration-200" />
                    </Link>
                  );
                }
                return (
                  <button
                    key={tab.key}
                    id={`tab-${tab.key}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.key}`}
                    onClick={() => setActiveTab(tab.key)}
                    className={`group relative !bg-transparent !rounded-none !px-0 !py-0 !border-0 pb-4 text-[15px] md:text-base tracking-[0.01em] text-[#3b4f63] hover:!text-[#f8fafc] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2A38] focus-visible:ring-offset-2 ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[1.5px] transition-colors duration-200 ${
                        isActive
                          ? "bg-[#3b4f63]"
                          : "bg-transparent group-hover:bg-[#f8fafc]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Panels Container */}
          <motion.div
            layout
            transition={{ layout: { duration: 0.28, ease: "easeOut" } }}
            className="mt-2 pt-10 pb-2 min-h-[560px] lg:min-h-[700px]"
          >
            <AnimatePresence mode="wait">
              {activeTab === "culture" && (
                <motion.div
                  key="culture"
                  layout
                  role="tabpanel"
                  id="panel-culture"
                  aria-labelledby="tab-culture"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* People & Culture Panel */}
                  <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-center">
                    <div className="relative h-[320px] sm:h-[390px] lg:h-[460px] rounded-md overflow-hidden">
                      <Image
                        src={heroImage}
                        alt="Saha people collaborating in a professional setting"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-[2.7rem] text-[#1f2a35]">
                        People first, always.
                      </h3>
                      <p className="mt-4 text-sm md:text-base leading-7 text-[#4a5560]">
                        A workplace culture built on trust, contribution, learning, and genuine support.
                      </p>
                      <div className="mt-6 space-y-5 text-sm md:text-base leading-8 text-[#3c4651]">
                        <p>
                          At Saha, people are never an afterthought. Trust, transparency, and contribution shape how we work every day.
                        </p>
                        <p>
                          Interns are part of real work, not passive observers. You&apos;ll collaborate with teams, contribute to live projects, and build practical capability through meaningful experience and structured support.
                        </p>
                        <p>
                          We treat students as future professionals, not temporary helpers. The standard is high, and the support is real.
                        </p>
                      </div>
                      <Link
                        href="/whoweare"
                        className="inline-flex items-center mt-7 text-sm md:text-[0.95rem] text-[#243241] border-b border-[#243241] hover:opacity-70 transition-opacity"
                      >
                        Learn more about our team
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "pathways" && (
                <motion.div
                  key="pathways"
                  layout
                  role="tabpanel"
                  id="panel-pathways"
                  aria-labelledby="tab-pathways"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* Pathways Panel */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] text-[#1f2a35]">Pathways that build practical capability.</h3>
                  <p className="mt-4 text-sm md:text-base leading-7 text-[#3c4651]">
                    Explore internship areas designed to give students meaningful exposure, responsible contribution, and real-world learning.
                  </p>
                  <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 [grid-auto-rows:1fr]">
                    {pathways.map((pathway) => (
                      <article
                        key={pathway.title}
                        className="h-full rounded-md border border-[#e2e7eb] bg-[#f8fafc] p-6 md:p-7 flex flex-col min-h-[236px] transition-colors duration-200 hover:border-[#cbd3db]"
                      >
                        <div>
                          <h4 className="text-xl text-[#1f2a35]">{pathway.title}</h4>
                          <p className="mt-3 text-sm leading-7 text-[#3c4651]">{pathway.summary}</p>
                        </div>
                        <div className="pt-5 mt-auto">
                          <Link
                            href={pathway.href}
                            className="text-sm text-[#1E2A38] underline underline-offset-4 hover:opacity-75 transition-opacity"
                          >
                            Learn more
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "gains" && (
                <motion.div
                  key="gains"
                  layout
                  role="tabpanel"
                  id="panel-gains"
                  aria-labelledby="tab-gains"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* What You'll Gain Panel */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] text-[#1f2a35]">Development with clear professional outcomes.</h3>
                  <p className="mt-4 text-sm md:text-base leading-7 text-[#4a5560]">
                    Internships at Saha are designed to build practical capability, confidence, and a deeper understanding of meaningful work.
                  </p>
                  <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {gains.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-md border border-[#e6ebef] bg-[#f8fafc] p-6 md:p-7"
                      >
                        <h4 className="text-lg md:text-xl text-[#1f2a35]">{item.title}</h4>
                        <p className="mt-3 text-sm md:text-base leading-7 text-[#3c4651]">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "values" && (
                <motion.div
                  key="values"
                  layout
                  role="tabpanel"
                  id="panel-values"
                  aria-labelledby="tab-values"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* Our Values Panel */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] text-[#1f2a35]">Values that shape how we work.</h3>
                  <p className="mt-4 text-sm md:text-base leading-7 text-[#3c4651]">
                    These principles guide how we collaborate, serve clients, and support one another.
                  </p>
                  <div className="mt-10 grid sm:grid-cols-2 gap-5">
                    {values.map((value) => (
                      <article
                        key={value.title}
                        className="rounded-md border border-[#e6ebef] bg-[#f8fafc] p-6 md:p-7 min-h-[200px]"
                      >
                        <h4 className="text-xl text-[#1f2a35]">{value.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-[#3c4651]">{value.description}</p>
                      </article>
                    ))}
                  </div>
                  <p className="mt-8 text-sm md:text-base leading-7 text-[#4a5560] max-w-3xl">
                    Together, these values shape a professional environment where students can contribute meaningfully while building trusted career foundations.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="px-6 md:px-10 lg:px-16 py-14 md:py-16 bg-[#f8fafc]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-[1200px] mx-auto"
        >
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.18em] uppercase text-[#5f6b76] mb-3">
              Who We&apos;re Looking For
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1f2a35]">
              You don&apos;t need years of experience.
            </h2>
            <p className="mt-5 text-sm md:text-base leading-7 text-[#3c4651]">
              We&apos;re looking for students who are curious, motivated, and ready
              to show up. Whether you&apos;re in your first year or finishing your
              degree, if you have the drive, we have the space for you.
            </p>
            <p className="mt-4 text-sm md:text-base leading-7 text-[#3c4651]">
              We don&apos;t just want you to leave with something to put on your CV.
              We want you to leave with a deeper understanding of your field, a
              genuine sense of what it means to do good work, and the confidence
              that comes from knowing you contributed to something real.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How To Apply Section */}
      <section id="apply" className="px-6 md:px-10 lg:px-16 py-16 md:py-20 bg-[#eef2f5]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="How To Apply"
              title={
                <>
                  A clear process,
                  <br />
                  built for students.
                </>
              }
              description="Getting started is straightforward. Explore the pathway that best fits your interests, prepare your CV and supporting information, and submit your application. We&apos;ll be in touch from there."
            />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="rounded-xl border border-[#d3d8dd] bg-[#f8fafc] p-5 md:p-6 self-start"
          >
            <ol className="space-y-3 text-sm md:text-base text-[#2e3944] leading-6 list-decimal list-inside">
              <li>Explore the internship pathway that fits your interests.</li>
              <li>Prepare your CV and supporting information.</li>
              <li>Submit your application.</li>
              <li>We'll be in touch.</li>
            </ol>
            <p className="mt-4 text-xs md:text-sm text-[#5f6b76]">
              We welcome applications from students at different stages of study.
            </p>
            <div className="pt-4">
              <SolidCta href="/contactus" label="Start Your Application" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-[1200px] mx-auto rounded-2xl bg-[#1E2A38] p-8 md:p-12 text-[#f7f7f4]"
        >
          <p className="text-xs tracking-[0.18em] uppercase text-[#d9e0e7]">
            Students First
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-4xl mt-4">
            Students first. Always.
          </h2>
          <p className="mt-5 text-sm md:text-base leading-7 max-w-3xl text-[#e7edf2]">
            At Saha, giving back to students isn&apos;t a side thought - it&apos;s a
            priority. Because the best way to build a great company is to build
            great people along the way.
          </p>
          <p className="mt-4 text-sm md:text-base leading-7 max-w-3xl text-[#e7edf2]">
            If you&apos;re ready to gain experience that actually means something,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="#apply"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base bg-[#f7f7f4] text-[#1E2A38] border border-[#f7f7f4] hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base border border-[#f7f7f4] text-[#f7f7f4] hover:bg-[#f7f7f4] hover:text-[#1E2A38] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section> */}

    </main>
  );
}
