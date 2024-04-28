"use client";


import HorizontalScrollSection from "@components/landingPage/HorizontalScrollSection";
import LanguagesSection from "@components/landingPage/LanguagesSection";
import HeaderSection from "@components/landingPage/HeaderSection";
import FirstSection from "@components/landingPage/FirstSection";
import ForthSection from "@components/landingPage/ForthSection";
import ContactSection from "@components/landingPage/ContactSection";
import FooterSection from "@components/landingPage/FooterSection";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      {/* end of header*/}
      <div className="max-w-7xl px-5 2xl:px-0 mx-auto flex flex-col gap-56">
        <FirstSection />

        <HorizontalScrollSection />

        <LanguagesSection />

      </div>

      <ForthSection />

      <div className="max-w-7xl mx-auto flex flex-col gap-56">
        <ContactSection />
      </div>

      <FooterSection />
    </div>
  );
}
