"use client";

import { ArrowRight01Icon } from "hugeicons-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const journey = ["Campo", "Laboratório", "Engenharia", "Relatórios"] as const;

const services = [
  {
    stage: "Campo",
    title: "Ensaios de Campo",
    copy: "Investigamos o comportamento do solo diretamente na obra para fornecer dados confiáveis antes do início das fundações e da execução.",
    chips: ["SPT", "DCP", "CBR", "Placa", "Permeabilidade"],
    image: "/assets/hero-pavement-field.png",
    alt: "Ensaio geotécnico em campo",
    objectClass: "object-cover object-center",
  },
  {
    stage: "Laboratório",
    title: "Laboratório",
    copy: "Caracterização completa do solo e dos materiais conforme normas técnicas, garantindo resultados reproduzíveis e rastreáveis.",
    chips: ["Granulometria", "Atterberg", "Compactação", "Umidade", "Resistência"],
    image: "/assets/laboratory-testing.png",
    alt: "Ensaios laboratoriais de solos e materiais",
    objectClass: "object-cover object-center",
  },
  {
    stage: "Engenharia",
    title: "Pavimentação",
    copy: "Controle tecnológico para assegurar desempenho, durabilidade e conformidade durante toda a execução da obra.",
    chips: ["Compactação", "Espessura", "Ligantes", "Desempenho", "Conformidade"],
    image: "/assets/hero-pavement-field.png",
    alt: "Controle tecnológico de pavimentação em obra",
    objectClass: "object-cover object-[center_78%]",
  },
  {
    stage: "Relatórios",
    title: "Solos e fundações",
    copy: "Análise geotécnica para definir soluções de fundação mais seguras, econômicas e adequadas ao terreno.",
    chips: ["Investigação", "Capacidade de carga", "Recalque", "Fundações", "Estabilidade"],
    image: "/assets/app-field-operator.png",
    alt: "Análise geotécnica para solos e fundações",
    objectClass: "object-cover object-center",
  },
] as const;

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="servicos" className="bg-[#f5f6f8] px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-4xl">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#07152c]/45">
            {journey.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden className="text-[#e7252a]/70">→</span>}
                <span className={index === 0 ? "text-[#e7252a]" : undefined}>{step}</span>
              </li>
            ))}
          </ol>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#07152c] sm:text-7xl">
            Da coleta em campo à decisão de engenharia.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#07152c]/60 sm:text-lg">
            Rigor técnico. Resultado mensurável.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.08 }}
              className="group relative flex min-h-[32rem] flex-col justify-end overflow-hidden bg-[#07152c] sm:min-h-[36rem]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`${service.objectClass} transition-transform duration-700 ease-out ${reduceMotion ? "" : "group-hover:scale-105"}`}
              />

              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-t from-[#07152c] via-[#07152c]/55 to-[#07152c]/15 transition-colors duration-500 ${reduceMotion ? "" : "group-hover:from-[#07152c] group-hover:via-[#07152c]/70 group-hover:to-[#07152c]/35"}`}
              />
              <div
                aria-hidden
                className={`absolute inset-0 bg-[#07152c]/0 transition-colors duration-500 ${reduceMotion ? "" : "group-hover:bg-[#07152c]/25"}`}
              />

              <div className="relative z-10 flex flex-col p-7 sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
                    {service.stage}
                  </span>
                  <span className="font-mono text-xs text-white/40">0{index + 1}</span>
                </div>

                <h3 className="mt-10 text-3xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                  {service.title}
                </h3>

                <div
                  className={`mt-4 transition-transform duration-500 ease-out ${reduceMotion ? "" : "md:translate-y-2 md:group-hover:translate-y-0"}`}
                >
                  <p className="max-w-md text-sm leading-relaxed text-white/70">{service.copy}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.chips.map((chip) => (
                      <li
                        key={chip}
                        className="border border-white/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/65"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                      reduceMotion
                        ? ""
                        : "md:pointer-events-none md:translate-y-3 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
                    }`}
                  >
                    Saiba mais
                    <ArrowRight01Icon size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
