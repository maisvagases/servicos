"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Card } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "João Silva",
    rating: 5,
    date: "2024-01-15",
    comment: "Excelente plataforma! Consegui uma ótima oportunidade através do Mais Vagas ES.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLCSoR3r-bgOfYKd_v1TBTrGr3RLqfDCx7yCwqL=w60-h60-p-rp-mo-br100"
  },
  {
    name: "Maria Santos",
    rating: 5,
    date: "2024-01-10",
    comment: "Melhor site de vagas do ES! Muito organizado e com ótimas oportunidades.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJwn_3PWZKPWFPx_nRtGNZZKiXnFZqwerL_vhsC=w60-h60-p-rp-mo-br100"
  },
  // Add more testimonials from Google Reviews
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que dizem sobre nós</h2>
        <div className="space-y-8">
          <Marquee gradient={false} speed={40} direction="left">
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`left-${index}`} className="w-80 p-6 bg-[#F7FAFC] flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.comment}</p>
                  <p className="text-sm text-gray-400 mt-2">{testimonial.date}</p>
                </Card>
              ))}
            </div>
          </Marquee>
          <Marquee gradient={false} speed={40} direction="right">
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`right-${index}`} className="w-80 p-6 bg-[#F7FAFC] flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.comment}</p>
                  <p className="text-sm text-gray-400 mt-2">{testimonial.date}</p>
                </Card>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}