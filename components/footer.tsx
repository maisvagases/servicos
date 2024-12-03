import { Button } from "@/components/ui/button";
import {
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              O Mais Vagas ES é uma plataforma especializada em divulgação de vagas de
              emprego no Espírito Santo, conectando empresas a profissionais qualificados.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">Início</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">Planos</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">Sobre</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contato@maisvagases.com.br</li>
              <li>WhatsApp: (27) 99999-9999</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <InstagramLogo weight="fill" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <LinkedinLogo weight="fill" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <TelegramLogo weight="fill" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <WhatsappLogo weight="fill" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Mais Vagas ES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}