import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#07152c] px-6 py-14 text-white sm:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row">
        <div>
          <Image src="/logo_branca.png" alt="Solocontrol" width={198} height={52} className="h-11 w-auto" />
          <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/55">Engenharia e consultoria para controle tecnológico.</p>
        </div>
        <address className="grid gap-2 text-sm not-italic leading-relaxed text-white/60">
          <a href="https://wa.me/5516991845032" target="_blank" rel="noreferrer" className="font-medium text-white hover:text-[#ff6b6f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">(16) 9 9184-5032</a>
          <a href="mailto:contatos.solocontrol@gmail.com" className="font-medium text-white hover:text-[#ff6b6f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">contatos.solocontrol@gmail.com</a>
          <p className="mt-4">Rua Francisco Martimiano de Oliveira, 275<br />Centro, Américo Brasiliense/SP<br />CEP 14.820-025</p>
        </address>
      </div>
    </footer>
  );
}
