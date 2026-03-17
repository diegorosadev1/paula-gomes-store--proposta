import React from 'react';
import { Section } from '../ui/Section';
import { Accordion } from '../ui/Accordion';

export const FAQ = () => {
  return (
    <Section className="bg-white rounded-[4rem] my-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-12 text-center">Dúvidas <span className="text-rose-gold italic">Frequentes</span></h2>
        <div className="space-y-2">
          <Accordion title="Preciso entender de tecnologia para gerenciar a loja?">
            Absolutamente não. Nossa loja foi desenhada para ser tão simples quanto usar o Instagram. O cadastro de produtos via WhatsApp elimina qualquer barreira técnica.
          </Accordion>
          <Accordion title="Posso adicionar produtos sozinha depois da entrega?">
            Sim! Você terá total autonomia. Além da facilidade do WhatsApp, entregamos um painel administrativo intuitivo e um treinamento em vídeo mostrando cada detalhe.
          </Accordion>
          <Accordion title="Como funciona o pagamento das minhas clientes?">
            Integramos sua loja com os principais meios de pagamento (Mercado Pago, PagSeguro, etc). Você recebe o dinheiro direto na sua conta, com segurança total.
          </Accordion>
          <Accordion title="E se eu precisar de ajuda depois que a loja estiver pronta?">
            Você nunca estará sozinha. Todos os nossos planos incluem um período de suporte dedicado para garantir que sua transição para o digital seja suave e lucrativa.
          </Accordion>
        </div>
      </div>
    </Section>
  );
};
