import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { motion, useScroll } from "framer-motion";

const HomeView = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
