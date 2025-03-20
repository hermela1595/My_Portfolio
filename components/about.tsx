"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Know Me More</SectionHeading>
      <p className="mb-3">
      I'm a Full-Stack Web Developer{" "}
        <span className="font-medium"> proficient</span>, in building both the front end and back end of websites.{" "}
        <span className="font-medium">My favorite part of programming</span>{" "}
        <span className="italic"></span> is the
        problem-solving aspect. I <span className="underline">enjoy</span> the
        feeling of resolving issus and problems. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js
        </span>
        . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">My expertise extends beyond coding. </span>I also analyze user/consumer needs to ensure the content I create is not only {" "}
        <span className="font-medium">functional  but also valuable and accessible.</span>{" "}
        {/* <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
}