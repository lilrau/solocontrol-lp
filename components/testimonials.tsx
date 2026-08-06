"use client";

import { ArrowUpRight01Icon } from "hugeicons-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7252a]">Confiança construída na obra</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#07152c] sm:text-7xl">Controle que dá clareza para avançar.</h2>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden bg-[#f5f6f8] p-8 lg:col-span-6 lg:col-start-7 sm:p-12"
        >
          <div className="absolute right-0 top-0 h-28 w-28 bg-[#e7252a]" />
          <blockquote className="relative max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-[#07152c] sm:text-5xl">
            “A gente passou a enxergar cada etapa com critério. O dado deixou de ser uma incerteza e virou direção.”
          </blockquote>
          <figcaption className="relative mt-12 flex items-end justify-between border-t border-[#07152c]/15 pt-6">
            <div>
              <p className="text-sm font-medium text-[#07152c]">Depoimento demonstrativo</p>
              <p className="mt-1 text-xs text-[#07152c]/55">Substitua por um cliente ou caso real</p>
            </div>
            <a href="#contato" aria-label="Solicitar uma conversa" className="grid h-11 w-11 place-items-center border border-[#07152c]/20 text-[#07152c] transition-colors hover:border-[#e7252a] hover:bg-[#e7252a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#07152c]">
              <ArrowUpRight01Icon size={19} strokeWidth={2} />
            </a>
          </figcaption>
        </motion.figure>
      </div>
      <div className="mx-auto mt-3 max-w-[1400px]">
        <div className="relative aspect-[21/7] overflow-hidden">
          <Image src="/assets/app-field-operator.png" alt="Profissional em campo consultando informações da obra" fill sizes="100vw" className="object-cover object-center grayscale-[35%]" />
          <div className="absolute inset-0 bg-[#07152c]/35" />
        </div>
      </div>
    </section>
  );
}
