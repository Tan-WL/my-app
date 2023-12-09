import HeroSection from "@/components/HeroSection";
import React from "react";
import Project from "@/components/Project";
import Navbar from "@/components/NavBar";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import AchievementsSection from "@/components/Achievement";

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