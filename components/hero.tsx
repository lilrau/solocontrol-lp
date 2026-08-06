"use client";

import { ArrowUpRight01Icon } from "hugeicons-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "14%"]);

  return (
    <section ref={ref} id="inicio" className="relative isolate min-h-[100dvh] overflow-hidden bg-[#07152c] text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-y-0 right-0 hidden w-[59%] lg:block">
        <Image src="/assets/hero-pavement-field.png" alt="Técnico executando ensaio de pavimentação em campo" fill priority sizes="59vw" className="object-cover contrast-125 grayscale-[20%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#07152c_0%,rgba(7,21,44,.91)_11%,rgba(7,21,44,.10)_57%,rgba(7,21,44,.22)_100%)]" />
      </motion.div>
      <div className="absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#e7252a]/15 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1600px] items-end px-6 pb-14 pt-32 sm:px-12 lg:items-center lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl lg:w-[73%]"
        >
          <p className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#ff6b6f]">
            Engenharia e controle tecnológico
          </p>
          <h1 className="max-w-6xl text-[clamp(4.25rem,7.1vw,6rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-balance">
            Decisões seguras <span className="relative inline-block overflow-hidden align-baseline"><span className="absolute inset-0 bg-[#e7252a]" /><span className="relative z-10 px-2">começam no solo.</span></span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/68 sm:text-lg">
            Controle de pavimentação, concreto e solos com precisão técnica em cada etapa da obra.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://wa.me/5516991845032" target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center gap-3 bg-[#e7252a] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Solicitar orçamento <ArrowUpRight01Icon size={18} strokeWidth={2} />
            </a>
            <a href="#servicos" className="inline-flex min-h-14 items-center border border-white/25 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Conhecer serviços
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
    </section>
  );
}
