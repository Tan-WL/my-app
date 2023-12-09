import React from "react";
import dynamic from 'next/dynamic';
import Project from "@/components/Project";
import Navbar from "@/components/NavBar";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import AchievementsSection from "@/components/Achievement";

const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AchievementsSection></AchievementsSection>
      <AboutMe></AboutMe>
      <Project></Project>
      <EmailSection></EmailSection>
      <Footer></Footer>
    </div>
  );
}