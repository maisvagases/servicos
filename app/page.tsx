"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PartnersSection } from "@/components/partners-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/magic/border-beam";
import { BlurFace } from "@/components/ui/magic/blur-face";
import { NumberTicker } from "@/components/ui/magic/number-ticker";
import { DotPattern } from "@/components/ui/magic/dot-pattern";
import { WordRotate } from "@/components/ui/magic/word-rotate";
import { SparklesText } from "@/components/ui/magic/sparkles";
import { GridPattern } from "@/components/ui/magic/grid-pattern";
import { RainbowButton } from "@/components/ui/magic/rainbow-button";
import { ShinyButton } from "@/components/ui/magic/shiny-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  WhatsappLogo,
  TelegramLogo,
  LinkedinLogo,
  InstagramLogo, 
  FacebookLogo,
} from "@phosphor-icons/react";
import Script from "next/script";

const plans = [
  {
    name: "Gratuito",
    description: "Ideal para pequenas empresas com vagas ocasionais",
    price: "R$ 0,00",
    features: [
      "Publicação da vaga em até 7 dias úteis",
      "Divulgação nos grupos 1x na semana (mínimo)",
      "Divulgação conforme desempenho da vaga",
    ],
  },
  {
    name: "Básico",
    description: "Perfeito para empresas com baixo volume de vagas",
    price: "R$ 20,00",
    features: [
      "Publicação da vaga em até 5 dias úteis",
      "Divulgação nos grupos 2x na semana (no mínimo)",
    ],
  },
  {
    name: "Profissional",
    description: "Recomendado para consultorias e empresas em crescimento",
    price: "R$ 50,00",
    features: [
      "Publicação da vaga em até 3 dias úteis",
      "Divulgação nos grupos 3x na semana",
    ],
  },
  {
    name: "Enterprise",
    description: "Ideal para grandes empresas com alta rotatividade",
    price: "R$ 100,00",
    recommended: true,
    features: [
      "Publicação em até 1 dia útil",
      "Divulgação 5x por semana nos grupos",
      "Divulgação de mutirões",
      "Publicação especial mensal",
      "Acesso ao banco de currículos",
      "Acesso exclusivo a currículos PCD",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-[#08A1C8] to-[#4299E1] text-white py-32">
          <BlurFace className="absolute inset-0" />
          <DotPattern className="absolute inset-0" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <SparklesText>
                <h1 className="text-5xl font-bold mb-6">
                  <WordRotate
                    words={[
                      "Mais Vagas",
                      "Mais Candidatos",
                      "Mais Currículos",
                      "Mais Oportunidades"
                    ]}
                  />
                </h1>
              </SparklesText>
              <p className="text-xl mb-8">
                Não perca tempo tentando achar seus candidatos, 
                nós já temos eles para você! 🎉
                <div className="flex items-center justify-center gap-12 mt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <NumberTicker value={30000} className="text-3xl font-bold" />
                    <p className="text-sm opacity-80">Usuários ativos</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">5.0</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} weight="fill" className="text-yellow-400 w-5 h-5" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm opacity-80">Avaliação das empresas</p>
                  </div>
                </div>
              </p>
              <ShinyButton
                size="lg"
                onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Planos <ArrowRight className="ml-2" weight="bold" />
              </ShinyButton>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-[#F7FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nosso Alcance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conectamos empresas a milhares de candidatos qualificados através de nossa ampla rede de canais
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <WhatsappLogo weight="regular" className="w-12 h-12 text-[#08A1C8] mx-auto mb-4" />
                <NumberTicker value={70} className="text-4xl font-bold text-[#08A1C8] mb-2" />
                <p>Grupos ativos no WhatsApp</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <Users weight="regular" className="w-12 h-12 text-[#08A1C8] mx-auto mb-4" />
                <NumberTicker value={5700000} className="text-4xl font-bold text-[#08A1C8] mb-2" />
                <p>Acessos nos últimos 90 dias</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <LinkedinLogo weight="regular" className="w-12 h-12 text-[#08A1C8] mx-auto mb-4" />
                <NumberTicker value={91000} className="text-4xl font-bold text-[#08A1C8] mb-2" />
                <p>Seguidores no LinkedIn</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <InstagramLogo weight="regular" className="w-12 h-12 text-[#08A1C8] mx-auto mb-4" />
                <NumberTicker value={17000} className="text-4xl font-bold text-[#08A1C8] mb-2" />
                <p>Seguidores no Instagram</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <FacebookLogo weight="regular" className="w-12 h-12 text-[#08A1C8] mx-auto mb-4" />
                <NumberTicker value={4600} className="text-4xl font-bold text-[#08A1C8] mb-2" />
                <p>Seguidores no Facebook</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersSection />

        {/* Info Blocks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#F7FAFC] p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Alcance Garantido</h3>
                <p className="text-gray-600">
                  Sua vaga será vista por milhares de candidatos qualificados através de nossa
                  extensa rede de canais de divulgação.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#F7FAFC] p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Processo Simplificado</h3>
                <p className="text-gray-600">
                  Publique suas vagas de forma rápida e eficiente, sem burocracias
                  ou contratos longos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#F7FAFC] p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Resultados Comprovados</h3>
                <p className="text-gray-600">
                  Milhares de empresas já encontraram os melhores talentos através
                  de nossa plataforma.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Plans Section */}
        <section id="plans" className="py-20 bg-[#EBF8FF]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Planos</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Escolha um plano que melhor atenda suas necessidades de recrutamento, com recursos
                poderosos para atrair os melhores talentos e agilizar seu processo de contratação.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => {
                const Component = plan.name === "Enterprise" ? BorderBeam : Card;
                const isEnterprise = plan.name === "Enterprise";
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`h-full ${isEnterprise ? 'lg:-mt-4' : ''}`}
                  >
                    <Component 
                      className={`p-6 h-full flex flex-col hover:shadow-xl transition-shadow relative
                        ${isEnterprise ? 'lg:p-8' : ''}`}
                    >
                      {isEnterprise && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#08A1C8] text-white px-4 py-1 rounded-full text-sm font-medium">
                          Recomendado
                        </span>
                      )}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>
                      <p className="text-3xl font-bold text-[#08A1C8] mb-6">{plan.price}</p>
                      <ShinyButton 
                        className={`w-full mb-6 ${isEnterprise ? 'bg-[#08A1C8]' : ''}`}
                      >
                        Escolher Plano
                      </ShinyButton>
                      <div className="border-t border-gray-200 pt-6">
                      <ul className="space-y-3 mb-6 flex-grow">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#08A1C8] mr-2 mt-1" weight="fill" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      </div>
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O que dizem sobre nós</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Confira os depoimentos de empresas que já encontraram os melhores talentos através de nossa plataforma
              </p>
            </div>
            <div id="shapo-widget-2083e30472612f8c3458"></div>
            <Script
              id="shapo-embed-js"
              src="https://cdn.shapo.io/js/embed.js"
              strategy="lazyOnload"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#EBF8FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona o processo de publicação?</AccordionTrigger>
                <AccordionContent>
                  Após a contratação do plano, você pode enviar suas vagas através de nosso sistema.
                  O prazo de publicação varia de acordo com o plano escolhido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Existe contrato de fidelidade?</AccordionTrigger>
                <AccordionContent>
                  Não, nossos serviços não se configuram como contrato. O serviço pode ser
                  encerrado a qualquer momento por parte do contratante.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#08A1C8] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para encontrar os melhores talentos?
            </h2>
            <p className="text-xl mb-8">
              Junte-se a milhares de empresas que já confiam no Mais Vagas ES
            </p>
            <RainbowButton variant="secondary" size="lg">
              Começar Agora <ArrowRight className="ml-2" weight="bold" />
            </RainbowButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}