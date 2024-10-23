import { useGsapTimelineScrollTrigger } from "@/hook/useGsapTimelineScrollTrigger";
import React, { useRef } from "react";

const Hook02 = () => {
  const triggerRef = useRef<HTMLElement>(null);
  const div01Ref = useRef<HTMLDivElement>(null);
  const div02Ref = useRef<HTMLDivElement>(null);
  const div03Ref = useRef<HTMLDivElement>(null);
  const div04Ref = useRef<HTMLDivElement>(null);

  useGsapTimelineScrollTrigger(
    triggerRef,
    [
      {
        type: "fromTo",
        ref: div01Ref,
        fromVars: { x: "-100%" },
        vars: { x: "0%", ease: "power2.out", duration: 2.5 },
      },
      {
        type: "to",
        ref: div02Ref,
        vars: { x: "100%", ease: "power2.out", duration: 2.5 },
      },
      {
        type: "to",
        ref: div03Ref,
        vars: { x: "300%", ease: "power2.out", duration: 2.5 },
      },
      {
        type: "to",
        ref: div04Ref,
        vars: { x: "400%", ease: "power2.out", duration: 5 },
      },
    ],
    {
      start: "top top",
      end: "bottom bottom",
      pin: true,
      scrub: 1,
      markers: true,
    }
  );

  return (
    <>
      <section className="h-screen"></section>
      <section ref={triggerRef} className="relative h-[200vh]">
        <div ref={div01Ref} className="size-[200px] bg-black"></div>
        <div ref={div02Ref} className="size-[200px] bg-black"></div>
        <div ref={div03Ref} className="size-[200px] bg-black"></div>
        <div ref={div04Ref} className="size-[200px] bg-black"></div>
      </section>
      <section className="h-screen"></section>
    </>
  );
};

export default Hook02;
