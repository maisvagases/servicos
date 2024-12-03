"use client";

import { Button } from "@/components/ui/button";
import { House, Phone, User, Briefcase, Info } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="Mais Vagas ES"
              width={120}
              height={40}
              className="object-contain"
            />
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
              >
                <House weight="bold" className="w-4 h-4" />
                Início
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
              >
                <Briefcase weight="bold" className="w-4 h-4" />
                Planos
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
              >
                <Info weight="bold" className="w-4 h-4" />
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
              >
                <Phone weight="bold" className="w-4 h-4" />
                Contato
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <User weight="bold" className="w-4 h-4" />
              Login
            </Button>
            <Button>Publicar Vaga</Button>
          </div>
        </div>
      </div>
    </header>
  );
}