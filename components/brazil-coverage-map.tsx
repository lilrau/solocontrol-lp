"use client";

import Brazil from "@react-map/brazil";
import { motion } from "framer-motion";

export function BrazilCoverageMap() {
  return (
    <div className="relative isolate mx-auto w-full max-w-162.5">
      <div className="brazil-map [&_.map]:w-full! [&_svg]:block [&_svg]:h-auto [&_svg]:w-full">
        <Brazil
          type="select-single"
          size={650}
          mapColor="#cbd3dc"
          strokeColor="#f5f6f8"
          strokeWidth={0.7}
          hoverColor="#cf4b50"
          selectColor="#0b1f3d"
          hints
          hintTextColor="#ffffff"
          hintBackgroundColor="#07152c"
          hintPadding="7px 10px"
          hintBorderRadius={0}
          cityColors={{ SP: "#0b1f3d" }}
          disableClick
        />
      </div>

      <motion.div
        aria-label="Américo Brasiliense, sede da Solocontrol"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, type: "spring", stiffness: 220 }}
        className="pointer-events-none absolute left-[66.5%] top-[69.5%] z-10"
      >
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#cf4b50]/25" />
        <span className="relative block h-4 w-4 rounded-full border-[3px] border-white bg-[#cf4b50] shadow-[0_0_0_1px_#cf4b50]" />
        <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap bg-[#07152c] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white">
          Sede Solocontrol
        </span>
      </motion.div>
    </div>
  );
}
