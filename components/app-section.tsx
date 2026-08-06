"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import appForm from "@/assets/app1.jpg";
import appReport from "@/assets/app2.jpg";

export function AppSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="aplicativo" className="overflow-hidden bg-[#07152c] px-6 py-28 text-white sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[1fr_.78fr] lg:gap-28">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff6b6f]">Solocontrol App</p>
          <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl">O campo no ritmo da decisão.</h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/65">O técnico registra a atividade pelo celular. A coordenação e o cliente acompanham a informação sem ruído e sem atraso.</p>
          <a href="https://wa.me/5516991845032" target="_blank" rel="noreferrer" className="mt-10 inline-flex min-h-14 items-center bg-white px-6 text-sm font-semibold text-[#07152c] transition-transform hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Falar sobre o aplicativo
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, rotate: reduceMotion ? 0 : 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto min-h-[39rem] w-full max-w-xl">
          <div className="absolute inset-x-0 bottom-0 top-28 overflow-hidden">
            <Image src="/assets/app-field-operator.png" alt="Técnico usando o Solocontrol App em campo" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover grayscale-[35%] opacity-55" />
            <div className="absolute inset-0 bg-linear-to-t from-[#07152c] via-transparent to-[#07152c]" />
          </div>
          <div className="absolute -left-5 top-24 h-3/5 w-4/5 border border-[#e7252a]/70" />
          <motion.figure
            initial={{ x: reduceMotion ? 0 : 42, y: reduceMotion ? 0 : 30 }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[4%] top-0 z-10 w-[46%] rotate-[5deg] overflow-hidden rounded-[2rem] border-[7px] border-[#182a45] bg-[#182a45] shadow-2xl shadow-black/50"
          >
            <Image src={appReport} alt="Relatório diário gerado pelo Solocontrol App" sizes="(min-width: 1024px) 18vw, 42vw" className="h-auto w-full" />
          </motion.figure>
          <motion.figure
            initial={{ x: reduceMotion ? 0 : -42, y: reduceMotion ? 0 : 45 }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[5%] top-12 z-20 w-[48%] -rotate-[3deg] overflow-hidden rounded-[2rem] border-[7px] border-[#24334b] bg-[#24334b] shadow-2xl shadow-black/60 transition-transform duration-700 hover:rotate-0 hover:scale-[1.025]"
          >
            <Image src={appForm} alt="Tela de registro de carga do Solocontrol App" sizes="(min-width: 1024px) 19vw, 44vw" className="h-auto w-full" />
          </motion.figure>
          <div className="absolute bottom-4 right-0 z-30 bg-[#e7252a] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white">
            Campo → relatório
          </div>
        </motion.div>
      </div>
    </section>
  );
}
