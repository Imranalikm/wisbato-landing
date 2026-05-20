import { useState, useEffect } from "react";

// ─── Project data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "01",
    title: "Sales Tracking Application",
    subtitle: "Smart Sales Management System",
    description:
      "A smart sales management application designed to track sales activities, schedule meetings, monitor team performance, and improve business productivity efficiently.",
    image: "/sales.png",
  },
  {
    id: "02",
    title: "School Management App",
    subtitle: "Comprehensive Campus Operations",
    description:
      "An all-in-one school management platform designed to streamline administrative tasks, enhance communication between teachers and parents, and track student progress effectively.",
    image: "/school management.png",
  },
];

export default function MobileAppSection() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);

  const navigate = (dir: "left" | "right") => {
    if (animDir) return;
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % PROJECTS.length
          : (prev - 1 + PROJECTS.length) % PROJECTS.length
      );
      setAnimDir(null);
    }, 220);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      navigate("right");
    }, 5000);
    return () => clearInterval(timer);
  }, [current, animDir]);

  const project = PROJECTS[current];

  return (
    <section className="w-full bg-[#EAE6DD] px-4 md:px-8 lg:px-[50px] py-10">
      {/* ── Outer orange card ── */}
      <div
        className="relative w-full rounded-[20px] md:rounded-[30px] overflow-hidden"
        style={{
          background: "#F79135",
          minHeight: "698px",
        }}
      >

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── DESKTOP LAYOUT (lg+) ─────────────────────────────────────── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block h-full">

          {/* ── LEFT: text content ── */}
          <div className="absolute left-[40px] top-[80px] flex flex-col gap-8 w-[380px]">
            {/* Eyebrow */}
            <p
              className="text-[#EDEDED] text-2xl"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontWeight: 400,
              }}
            >
              Wisbato Provides
            </p>

            {/* Main heading */}
            <h2
              className="text-[#EDEDED] leading-tight"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "clamp(36px, 4vw, 50px)",
                fontWeight: 400,
                lineHeight: "50px",
              }}
            >
              Mobile App
              <br />
              Development
            </h2>

            {/* Description */}
            <p
              style={{
                color: "#EDEDED",
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
              }}
            >
              Designing and developing scalable, high-performance 
              mobile
              applications with seamless user experiences for Android and iOS
              platforms.
            </p>

            {/* Explore more CTA */}
            <button
              className="group relative flex items-center overflow-hidden rounded-[15px] bg-white h-[48px] w-[186px] border-none cursor-pointer transition-transform duration-150 active:scale-[0.97]"
            >
              <span className="flex-shrink-0 m-[5px] w-[38px] h-[38px] bg-[#F79135] rounded-[12px] flex items-center justify-center transition-transform duration-200 group-hover:rotate-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span
                className="pr-3"
                style={{
                  color: "#333",
                  fontFamily: "'Montreal Serial', sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Explore more
              </span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>
 
          {/* ── RIGHT: frosted glass detail panel + phone mockup ── */}
          <div className="absolute right-[40px] top-0 bottom-0 flex items-center">
            
            {/* Wrapper to align card and phone at bottom exactly */}
            <div className="flex items-end gap-[40px] relative">
              
              {/* Frosted glass project card */}
              <div
                className="w-[360px] rounded-[20px] flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.50)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  padding: "32px 20px 32px 30px",
                  overflow: "hidden",
                }}
              >
              {/* Animated content wrapper */}
              <div
                className="flex flex-col gap-4 h-full"
                style={{
                  opacity: animDir ? 0 : 1,
                  transform: animDir
                    ? `translateX(${animDir === "right" ? "20px" : "-20px"})`
                    : "translateX(0)",
                  transition: "opacity 0.22s ease, transform 0.22s ease",
                }}
              >
                {/* Number + divider */}
                <div className="flex flex-col gap-3">
                  <span
                    className="text-[#222] leading-none"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "clamp(36px, 4vw, 50px)",
                      fontWeight: 400,
                    }}
                  >
                    {project.id}.
                  </span>
                  <div className="w-full border-t border-[rgba(102,102,102,0.4)]" />
                </div>

                {/* Project info */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="text-[#222] leading-tight"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "clamp(18px, 2.2vw, 26px)",
                      fontWeight: 500,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#222] text-[18px]"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontWeight: 400,
                      lineHeight: "21px",
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <p
                    className="flex-1"
                    style={{
                      color: "#222",
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "15.875px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "normal",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

              {/* Phone mockup container */}
              <div className="relative">
                {/* Phone image */}
                <div
                  className="flex-shrink-0 rounded-[42px] overflow-hidden"
                  style={{
                    width: "363px",
                    height: "454px",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)",
                    opacity: animDir ? 0.6 : 1,
                    transform: animDir
                      ? `translateX(${animDir === "right" ? "16px" : "-16px"}) scale(0.97)`
                      : "translateX(0) scale(1)",
                    transition: "opacity 0.22s ease, transform 0.22s ease",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation arrows — absolutely positioned under phone */}
                <div className="absolute -bottom-[77px] left-0 right-0 flex items-center justify-center gap-[60px] w-full">
                  <button
                    onClick={() => navigate("left")}
                    className="w-[53px] h-[53px] rounded-full bg-white flex items-center justify-center border-none cursor-pointer hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                    aria-label="Previous project"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => navigate("right")}
                    className="w-[53px] h-[53px] rounded-full bg-white flex items-center justify-center border-none cursor-pointer hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                    aria-label="Next project"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 w-[220px] h-[220px] rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 w-[120px] h-[120px] rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>


        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* ── MOBILE / TABLET LAYOUT (< lg) ─────────────────────────────── */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-col gap-8 p-6 md:p-10">
          {/* Text content */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#EDEDED",
              }}
            >
              Wisbato Provides
            </p>

            <h2
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "clamp(28px, 7vw, 42px)",
                fontWeight: 400,
                lineHeight: "1.1",
                color: "#EDEDED",
              }}
            >
              Mobile App
              <br />
              Development
            </h2>

            <p
              style={{
                color: "#EDEDED",
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
                maxWidth: "500px",
              }}
            >
              Designing and developing scalable, high-performance mobile
              applications with seamless user experiences for Android and iOS
              platforms.
            </p>

            {/* Explore more CTA — mobile */}
            <button
              className="group relative flex items-center overflow-hidden rounded-[15px] bg-white h-[44px] w-[170px] border-none cursor-pointer transition-transform duration-150 active:scale-[0.97] mt-2"
            >
              <span className="flex-shrink-0 m-[4px] w-[36px] h-[36px] bg-[#F79135] rounded-[11px] flex items-center justify-center transition-transform duration-200 group-hover:rotate-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span
                className="pr-3"
                style={{
                  color: "#333",
                  fontFamily: "'Montreal Serial', sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Explore more
              </span>
            </button>
          </div>

          {/* Phone mockup — mobile */}
          <div className="flex justify-center">
            <div
              className="rounded-[30px] overflow-hidden"
              style={{
                width: "min(280px, 75vw)",
                aspectRatio: "363 / 454",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)",
                opacity: animDir ? 0.6 : 1,
                transform: animDir
                  ? `translateX(${animDir === "right" ? "16px" : "-16px"}) scale(0.97)`
                  : "translateX(0) scale(1)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Frosted glass project card — mobile */}
          <div
            className="w-full flex flex-col"
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.50)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "20px",
              overflow: "hidden",
            }}
          >
            <div
              className="flex flex-col gap-4"
              style={{
                opacity: animDir ? 0 : 1,
                transform: animDir
                  ? `translateX(${animDir === "right" ? "20px" : "-20px"})`
                  : "translateX(0)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {/* Number + divider */}
              <div className="flex flex-col gap-2">
                <span
                  style={{
                    fontFamily: "'Montreal Serial', sans-serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#222",
                    lineHeight: 1,
                  }}
                >
                  {project.id}.
                </span>
                <div style={{ width: "100%", height: "1px", background: "rgba(102,102,102,0.4)" }} />
              </div>

              {/* Project info */}
              <h3
                style={{
                  fontFamily: "'Montreal Serial', sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#222",
                  lineHeight: "1.2",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montreal Serial', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#222",
                  lineHeight: "20px",
                }}
              >
                {project.subtitle}
              </p>
              <p
                style={{
                  color: "#222",
                  fontFamily: "'Montreal Serial', sans-serif",
                  fontSize: "15.875px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                }}
              >
                {project.description}
              </p>

            </div>
          </div>

          {/* Navigation — mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("left")}
              className="w-[46px] h-[46px] rounded-full bg-white/90 flex items-center justify-center border-none cursor-pointer transition-all duration-200 active:scale-95"
              aria-label="Previous project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => navigate("right")}
              className="w-[46px] h-[46px] rounded-full bg-white/90 flex items-center justify-center border-none cursor-pointer transition-all duration-200 active:scale-95"
              aria-label="Next project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2 ml-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full border-none cursor-pointer transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "white" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative circles — mobile */}
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 w-[140px] h-[140px] rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-5 -left-5 w-[80px] h-[80px] rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

      </div>
    </section>
  );
}
