"use client";

import { motion } from "framer-motion";

const qualities = ["Obras de infraestrutura", "Construtoras", "Loteamentos", "Indústrias", "Órgãos públicos"];

export function Clients() {
  return (
    <section className="overflow-hidden bg-white py-9">
      <motion.div animate={{ x: ["0%", "-20%"] }} transition={{ ease: "linear", duration: 22, repeat: Infinity }} className="flex w-max gap-10 whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#07152c]/55">
        {[...qualities, ...qualities, ...qualities].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}<i aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#e7252a]" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
