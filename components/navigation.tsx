"use client";

import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { href: "#servicos", label: "Serviços" },
  { href: "#empresa", label: "A empresa" },
  { href: "#processo", label: "Método" },
  { href: "#aplicativo", label: "Aplicativo" },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => setCondensed(value > 40));

  return (
    <motion.header
      initial={false}
      animate={{ y: condensed ? 12 : 0 }}
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5"
    >
      <motion.nav
        aria-label="Navegação principal"
        initial={false}
        animate={{
          height: condensed ? 64 : 92,
          maxWidth: condensed ? 1180 : 1600,
          backgroundColor: condensed ? "rgba(7,21,44,.92)" : "rgba(7,21,44,0)",
          borderColor: condensed ? "rgba(255,255,255,.12)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex items-center justify-between border px-4 backdrop-blur-xl sm:px-6"
      >
        <a href="#inicio" aria-label="Solocontrol, início" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <motion.div animate={{ scale: condensed ? 0.86 : 1 }} className="origin-left">
            <Image src="/logo_branca_cropped.png" alt="Solocontrol" width={133} height={135} priority className="h-9 w-auto sm:h-10" />
          </motion.div>
        </a>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 border border-white/10 bg-white/[0.04] p-1 text-[13px] font-medium text-white/65 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5516991845032"
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-11 items-center bg-[#e7252a] px-5 text-xs font-semibold tracking-wide text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Solicitar orçamento
        </a>
        <button type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="grid h-11 w-11 place-items-center text-white lg:hidden">
          {menuOpen ? <Cancel01Icon size={22} /> : <Menu01Icon size={22} />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute left-0 right-0 top-[calc(100%+8px)] border border-white/10 bg-[#07152c]/98 p-3 shadow-2xl shadow-black/30 lg:hidden">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 px-4 py-4 text-sm text-white/75 last:border-0 hover:text-white">{item.label}</a>
              ))}
              <a href="https://wa.me/5516991845032" target="_blank" rel="noreferrer" className="mt-3 flex min-h-12 items-center justify-center bg-[#e7252a] text-sm font-semibold text-white sm:hidden">Solicitar orçamento</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
