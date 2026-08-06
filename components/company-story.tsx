"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function CompanyStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="empresa" className="bg-[#07152c] px-6 py-28 text-white sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12 lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="lg:col-span-7"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff6b6f]">Quem está no campo</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl">
            A obra não precisa de mais dados. Precisa de dados que resolvem.
          </h2>
        </motion.div>
        <p className="max-w-sm text-base leading-relaxed text-white/60 lg:col-span-4 lg:col-start-9">
          A Solocontrol une operação de campo, laboratório e gestão técnica em uma mesma leitura. Para quem precisa construir com previsibilidade, e não com suposições.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1400px] gap-3 md:grid-cols-12">
        <motion.div
          initial={{ clipPath: reduceMotion ? "inset(0)" : "inset(12% 0 12% 0)" }}
          whileInView={{ clipPath: "inset(0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[28rem] overflow-hidden md:col-span-7"
        >
          <Image src="/assets/hero-pavement-field.png" alt="Controle tecnológico de pavimentação em execução" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover grayscale-[25%]" />
        </motion.div>
        <div className="flex min-h-[28rem] flex-col justify-between bg-[#e7252a] p-8 md:col-span-5 sm:p-11">
          <p className="max-w-sm text-2xl font-medium leading-[1.05] tracking-[-0.04em]">
            Técnica não é uma etapa isolada. É o que mantém todo o canteiro alinhado.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-white/30 pt-6 text-sm text-white/75">
            <p>Planejamento<br /><span className="text-white">com método</span></p>
            <p>Execução<br /><span className="text-white">com rastreabilidade</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
