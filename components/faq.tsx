"use client";

import { Add01Icon, MinusSignIcon } from "hugeicons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const questions = [
  ["Quais serviços a Solocontrol executa?", "Atuamos com controle tecnológico de pavimentação, concreto e solos, incluindo ensaios de campo, laboratório e suporte técnico para decisões de obra."],
  ["A Solocontrol atende fora de Américo Brasiliense?", "Sim. A sede fica em Américo Brasiliense/SP, com estrutura de mobilização para projetos em outras regiões conforme a necessidade técnica e operacional."],
  ["Como funciona o acesso aos resultados?", "Os registros do campo e do laboratório são organizados para que a equipe responsável acompanhe informações relevantes com clareza e rastreabilidade."],
  ["Como solicito um orçamento?", "Clique em Solicitar orçamento e conte brevemente sobre o empreendimento. Nossa equipe retorna para entender escopo, prazos e necessidades de controle."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f5f6f8] px-6 py-28 sm:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e7252a]">Perguntas frequentes</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#07152c] sm:text-7xl">O que você precisa saber antes de começar.</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {questions.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className="border-t border-[#07152c]/15 last:border-b">
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-8 py-6 text-left text-xl font-medium tracking-[-0.035em] text-[#07152c] transition-colors hover:text-[#e7252a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#07152c] sm:text-2xl">
                  {question}
                  {isOpen ? <MinusSignIcon size={21} strokeWidth={2} aria-hidden /> : <Add01Icon size={21} strokeWidth={2} aria-hidden />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="max-w-xl pb-7 text-base leading-relaxed text-[#07152c]/65">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
