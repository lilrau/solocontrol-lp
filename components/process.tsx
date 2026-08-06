"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
  ["Leitura técnica", "Entendemos o empreendimento, as normas e as variáveis que definem o controle."],
  ["Campo e laboratório", "A equipe coleta, ensaia e registra cada evidência com rastreabilidade."],
  ["Decisão documentada", "Resultados organizados dão visibilidade para agir no tempo certo."],
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? "0%" : "10%", reduceMotion ? "0%" : "-10%"]);
  const timelineScale = useTransform(scrollYProgress, [0.22, 0.78], [0, 1]);

  return (
    <section ref={ref} id="processo" className="overflow-hidden bg-white px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7252a]">Método que acompanha a obra</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl">Do ensaio à decisão, sem perder o contexto.</h2>
          <motion.div style={{ y }} className="relative mt-12 aspect-[5/4] overflow-hidden lg:mt-20">
            <Image src="/assets/laboratory-testing.png" alt="Profissional conduzindo ensaio em laboratório" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover grayscale-[25%]" />
          </motion.div>
        </div>
        <ol className="relative">
          <div aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-[#07152c]/15 sm:left-[3.5rem]" />
          <motion.div aria-hidden style={{ scaleY: timelineScale, transformOrigin: "top" }} className="absolute bottom-0 left-[11px] top-0 w-px bg-[#e7252a] sm:left-[3.5rem]" />
          {steps.map(([title, copy], index) => (
            <motion.li key={title} initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }} className="relative grid min-h-64 gap-6 border-t border-[#07152c]/15 py-11 pl-10 first:border-t-0 sm:grid-cols-[7rem_1fr] sm:pl-0">
              <span className="relative z-10 font-mono text-xs text-[#e7252a] sm:text-center">
                <i aria-hidden className="absolute -left-[34px] top-0 h-6 w-6 border border-[#e7252a] bg-white sm:left-1/2 sm:-translate-x-1/2" />
                <span className="sm:sr-only">Etapa </span>0{index + 1}
              </span>
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.055em] sm:text-5xl">{title}</h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#07152c]/65">{copy}</p>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[#07152c]/40">{index === 0 ? "Diagnóstico e escopo" : index === 1 ? "Evidência rastreável" : "Leitura e ação"}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
