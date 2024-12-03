"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Assaí Atacadista",
    logo: "https://vagasempregos.com.br/wp-content/uploads/2021/07/Assai-Atacadista.png",
  },
  {
    name: "Grupo Pereira",
    logo: "https://grupopereira.com.br/wp-content/uploads/2023/03/logo-grupo-pereira.svg",
  },
  {
    name: "Rede Farmes",
    logo: "https://www.farmes.com.br/images/logo.png",
  },
  {
    name: "Extrabom",
    logo: "https://www.extrabom.com.br/images/logo.png",
  },
  {
    name: "Selita",
    logo: "https://www.selita.coop.br/images/logo-selita.png",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Empresas que Confiam em Nós</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conectamos as melhores empresas do Espírito Santo com talentos excepcionais.
            Junte-se a estas empresas que já fazem parte da nossa história.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-32 flex items-center justify-center hover:shadow-lg transition-shadow bg-[#F7FAFC]">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}