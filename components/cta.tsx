"use client";

import { ArrowUpRight01Icon } from "hugeicons-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Cta() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 25%", "start -20%"] });
  const curtainY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={ref} id="contato" className="relative min-h-[100dvh] overflow-hidden bg-[#e7252a] text-white">
      <div className="mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-between px-6 py-24 sm:px-12 lg:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#07152c]">O próximo passo é técnico</p>
        <div>
          <h2 className="max-w-6xl text-[clamp(3.8rem,8vw,7.6rem)] font-semibold leading-[0.87] tracking-[-0.08em]">
            Vamos colocar precisão em movimento.
          </h2>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/35 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm leading-relaxed text-white/75">Conte sobre sua obra. Nossa equipe ajuda a definir o controle necessário para avançar com segurança.</p>
            <a href="https://wa.me/5516991845032" target="_blank" rel="noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#07152c] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Solicitar orçamento <ArrowUpRight01Icon size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
      {!reduceMotion && (
        <motion.div
          aria-hidden
          style={{ y: curtainY }}
          className="pointer-events-none absolute inset-0 z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#07152c]"
        >
          <div className="absolute inset-x-6 top-8 flex items-center justify-between border-b border-white/15 pb-5 sm:inset-x-12">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">Engenharia e consultoria</span>
            <span className="h-1.5 w-1.5 bg-[#e7252a]" />
          </div>
          <Image
            src="/logo_branca_cropped.png"
            alt=""
            width={133}
            height={135}
            className="h-auto w-[min(40vw,12rem)]"
          />
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">Continue</span>
            <span className="h-12 w-px bg-linear-to-b from-[#e7252a] to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
