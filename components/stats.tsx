"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  ["Campo", "Controle técnico presente onde a obra acontece."],
  ["Laboratório", "Análises com método, critério e rastreabilidade."],
  ["Dados", "Informação organizada para decisões mais rápidas."],
];

export function Stats() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#e7252a] px-6 py-20 text-white sm:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] border-t border-white/30 md:grid-cols-3">
        {stats.map(([title, copy], index) => (
          <motion.div key={title} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.65 }} transition={{ delay: index * 0.1, duration: 0.5 }} className="border-b border-white/30 py-9 md:border-b-0 md:px-9 md:first:pl-0 md:not-last:border-r">
            <p className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">{title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
