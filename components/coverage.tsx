"use client";

import { BrazilCoverageMap } from "@/components/brazil-coverage-map";
import { motion, useReducedMotion } from "framer-motion";

export function Coverage() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f5f6f8] px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7252a]">Presença que acompanha</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#07152c] sm:text-7xl">Estrutura perto do que importa.</h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#07152c]/65">
            Sede em Américo Brasiliense e mobilização técnica para obras em diferentes escalas. A distância não pode comprometer o controle.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="lg:col-span-7 lg:col-start-6"
        >
          <BrazilCoverageMap />
        </motion.div>
      </div>
    </section>
  );
}
