"use client";

import { ArrowUpRight01Icon } from "hugeicons-react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "14%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    if (video.readyState >= 3) markReady();

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || reduceMotion) return;
    void video.play().catch(() => undefined);
  }, [videoReady, reduceMotion]);

  const rootVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.16,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const copyVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.35 : 0.95, ease },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: reduceMotion ? 0.35 : 1.15, ease },
    },
  };

  const mediaVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: reduceMotion ? 1 : 1.04,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduceMotion ? 0.4 : 1.4, ease },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: reduceMotion ? 0.3 : 1.05, ease },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="inicio"
      variants={rootVariants}
      initial="hidden"
      animate="show"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#07152c] text-white"
    >
      <motion.div
        style={{ y: mediaY }}
        initial="hidden"
        animate={videoReady ? "show" : "hidden"}
        variants={mediaVariants}
        className="absolute inset-y-[-8%] right-0 hidden w-[62%] overflow-hidden lg:block"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          autoPlay={!reduceMotion}
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/assets/hero_bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Full-bleed veil: one continuous navy → clear fade (avoids panel-edge seam) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(90deg,#07152c_0%,#07152c_38%,rgba(7,21,44,.88)_48%,rgba(7,21,44,.35)_62%,rgba(7,21,44,.12)_78%,rgba(7,21,44,.18)_100%)] lg:block"
      />

      <motion.div
        variants={fadeIn}
        aria-hidden
        className="absolute -left-32 top-1/3 z-[1] h-[28rem] w-[28rem] rounded-full bg-[#e7252a]/15 blur-[120px]"
      />

      <motion.div
        variants={copyVariants}
        className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1600px] flex-col justify-end px-6 pb-14 pt-32 sm:px-12 lg:justify-center lg:pb-0"
      >
        <motion.p
          variants={fadeUp}
          className="mb-8 max-w-6xl font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#ff6b6f] lg:w-[73%]"
        >
          ENGENHARIA GEOTÉCNICA • CONTROLE TECNOLÓGICO
        </motion.p>

        <motion.h1
          variants={titleVariants}
          className="max-w-6xl text-[clamp(4.25rem,7.1vw,6rem)] font-semibold leading-[0.91] tracking-[-0.075em] lg:w-[73%]"
        >
          <motion.span variants={fadeUp} className="relative z-20 block translate-y-[0.22em]">
            Decisões seguras
          </motion.span>
          <motion.span variants={fadeUp} className="relative z-10 mt-[0.11em] inline-block overflow-hidden align-baseline">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduceMotion ? 0.3 : 0.8, ease, delay: reduceMotion ? 0 : 0.55 }}
              className="absolute inset-0 origin-left bg-[#e7252a]"
            />
            <span className="relative z-10 px-2">começam no solo.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg lg:w-[73%]"
        >
          Da investigação de solo aos ensaios laboratoriais, garantimos dados técnicos confiáveis para que sua obra avance com segurança, prazo e rastreabilidade.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex max-w-6xl flex-wrap gap-3 lg:w-[73%]">
          <a
            href="https://wa.me/5516991845032"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center gap-3 bg-[#e7252a] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Solicitar orçamento <ArrowUpRight01Icon size={18} strokeWidth={2} />
          </a>
          <a
            href="#servicos"
            className="inline-flex min-h-14 items-center border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Conhecer serviços
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={lineVariants}
        aria-hidden
        className="absolute bottom-0 left-0 right-0 z-10 h-px origin-left bg-white/15"
      />
    </motion.section>
  );
}
