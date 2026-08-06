"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "Ensaios de campo", copy: "Verificação técnica no local para acompanhar as condições reais da obra.", tone: "bg-[#dfe5ea] text-[#07152c]", span: "md:col-span-7" },
  { title: "Ensaios laboratoriais", copy: "Análises que transformam amostras em resultados consistentes.", tone: "bg-[#e7252a] text-white", span: "md:col-span-5" },
  { title: "Projetos de pavimentação", copy: "Dimensionamento preciso para construir com previsibilidade.", tone: "bg-[#07152c] text-white", span: "md:col-span-5" },
];

export function Services() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="servicos" className="bg-[#f5f6f8] px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7252a]">Onde a precisão importa</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#07152c] sm:text-7xl">Rigor técnico. Resultado mensurável.</h2>
        </div>
        <div className="mt-16 grid grid-flow-dense gap-3 md:grid-cols-12">
          {services.slice(0, 2).map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: index * 0.1 }} className={`${service.span} ${service.tone} group relative flex min-h-[27rem] flex-col justify-between overflow-hidden p-8 sm:p-11`}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs opacity-65">0{index + 1}</span>
                {index === 0 ? (
                  <div aria-hidden className="relative h-32 w-32 border border-[#07152c]/15">
                    <motion.div animate={reduceMotion ? undefined : { y: [10, 76, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-0 h-10 w-px bg-[#e7252a]" />
                    <div className="absolute inset-x-3 top-1/2 border-t border-dashed border-[#07152c]/30" />
                    <div className="absolute bottom-3 left-3 right-3 h-5 bg-[#07152c]/10" />
                  </div>
                ) : (
                  <div aria-hidden className="grid h-32 w-32 grid-cols-4 gap-1">
                    {[42, 67, 35, 82, 58, 92, 48, 73].map((value, cell) => (
                      <motion.span key={cell} initial={{ opacity: 0.25 }} whileInView={{ opacity: value / 100 }} transition={{ delay: cell * 0.05 }} className="bg-white" />
                    ))}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.055em] sm:text-5xl">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-75">{service.copy}</p>
              </div>
            </motion.article>
          ))}
          <motion.article initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="group relative min-h-[31rem] overflow-hidden md:col-span-5">
            <Image src="/assets/laboratory-testing.png" alt="Ensaio técnico em laboratório" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152c] via-[#07152c]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-11">
              <span className="font-mono text-xs text-white/65">03</span>
              <h3 className="mt-12 text-3xl font-medium tracking-[-0.055em] sm:text-5xl">Projetos de pavimentação</h3>
            </div>
          </motion.article>
          <motion.article initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: 0.1 }} className={`${services[2].span} ${services[2].tone} relative flex min-h-[31rem] flex-col justify-between overflow-hidden p-8 sm:p-11`}>
            <span className="font-mono text-xs text-white/65">04</span>
            <div aria-hidden className="absolute right-0 top-0 h-64 w-64 opacity-55">
              {[0, 1, 2, 3, 4].map((ring) => (
                <motion.span key={ring} initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: ring * 0.1, duration: 0.7 }} className="absolute rounded-full border border-white/30" style={{ inset: `${ring * 22}px` }} />
              ))}
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#e7252a]" />
            </div>
            <div>
              <h3 className="text-3xl font-medium tracking-[-0.055em] sm:text-5xl">Solos e fundações</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">Investigação e controle para bases seguras e soluções adequadas ao terreno.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
