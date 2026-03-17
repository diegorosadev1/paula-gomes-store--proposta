import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ArrowRight,
  Bell,
  ShoppingBag,
  Plus,
  Layout,
  Zap,
  Search,
  Heart,
  ShoppingCart,
  Menu,
  RotateCcw,
} from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Vestido Midi Floral Azul",
    price: "289,90",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    category: "Vestidos",
  },
  {
    id: 2,
    name: "Conjunto Linho Areia",
    price: "349,90",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    category: "Conjuntos",
  },
  {
    id: 3,
    name: "Blusa Seda Off White",
    price: "199,90",
    image:
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400&h=500&fit=crop",
    category: "Blusas",
  },
  {
    id: 4,
    name: "Saia Plissada Rosé",
    price: "259,90",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=500&fit=crop",
    category: "Saias",
  },
];

export const Playground = () => {
  const [playgroundStep, setPlaygroundStep] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState<
    typeof SAMPLE_PRODUCTS
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("");

  const startSimulation = async () => {
    setPlaygroundStep(1); // User sends message

    // Wait for user message to appear
    await new Promise((r) => setTimeout(r, 1000));
    setIsTyping(true);

    // Assistant starts processing
    await new Promise((r) => setTimeout(r, 1500));
    setIsTyping(false);
    setPlaygroundStep(2); // First response

    const steps = [
      { msg: "Produto identificado...", prodIdx: 0 },
      { msg: "Título e descrição gerados...", prodIdx: 1 },
      { msg: "Otimizando imagens...", prodIdx: 2 },
      { msg: "Catálogo atualizado com sucesso! ✨", prodIdx: 3 },
    ];

    for (let i = 0; i < steps.length; i++) {
      setCurrentStatus(steps[i].msg);
      setVisibleProducts((prev) => [
        ...prev,
        SAMPLE_PRODUCTS[steps[i].prodIdx],
      ]);
      setNotifications((prev) => prev + 1);
      await new Promise((r) => setTimeout(r, 800));
    }

    setPlaygroundStep(3); // Finished
  };

  const resetPlayground = () => {
    setPlaygroundStep(0);
    setVisibleProducts([]);
    setIsTyping(false);
    setNotifications(0);
    setCurrentStatus("");
  };

  return (
    <Section id="playground" className="bg-nude py-32">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Sua vitrine pronta em <br />
          <span className="text-rose-gold italic">tempo recorde</span>
        </h2>
        <p className="text-soft-black/60 text-lg max-w-2xl mx-auto">
          Mande as fotos no WhatsApp e veja a mágica acontecer. Nossa IA cuida
          de tudo: do título ao estoque.
        </p>

        <AnimatePresence>
          {playgroundStep > 0 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={resetPlayground}
              className="mt-8 flex items-center gap-2 mx-auto px-6 py-2 rounded-full border border-rose-gold/30 text-rose-gold font-bold text-sm hover:bg-rose-gold hover:text-white transition-all shadow-sm"
            >
              <RotateCcw className="w-4 h-4" /> Reiniciar Demonstração
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* WhatsApp Mockup */}
        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="bg-white rounded-[3rem] p-4 shadow-2xl border-[8px] border-soft-black relative overflow-hidden h-[680px] flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 mb-4">
              <span className="text-xs font-bold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-black rounded-full" />
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
            </div>

            {/* Chat Header */}
            <div className="bg-rose-gold-light/20 p-4 rounded-2xl flex items-center gap-3 mb-6">
          
              <div>
                <h4 className="font-bold text-sm">Assistente By Paula Gomes</h4>
                <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">
                  Online
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto px-2 scrollbar-hide">
              {playgroundStep >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-end"
                >
                  <div className="bg-rose-gold text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-md">
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <img
                        src={SAMPLE_PRODUCTS[0].image}
                        className="rounded-lg aspect-square object-cover"
                        referrerPolicy="no-referrer"
                        alt="Product 1"
                      />
                      <img
                        src={SAMPLE_PRODUCTS[1].image}
                        className="rounded-lg aspect-square object-cover"
                        referrerPolicy="no-referrer"
                        alt="Product 2"
                      />
                    </div>
                    <p>Cadastrar novos looks da coleção de verão</p>
                  </div>
                </motion.div>
              )}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}

              {playgroundStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm shadow-sm border border-gray-200">
                    <p className="font-bold text-rose-gold mb-2">
                      ✨ Processando Coleção...
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-green-500" />{" "}
                        {currentStatus}
                      </div>
                      {playgroundStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pt-2 mt-2 border-t border-gray-200"
                        >
                          <p className="text-green-600 font-bold text-[10px] uppercase tracking-widest flex items-center gap-1">
                            <Zap className="w-3 h-3" /> 4 Produtos publicados!
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 flex gap-2 items-center">
              <div className="flex-1 bg-gray-50 rounded-full py-2 px-4 text-gray-400 text-sm">
                Escreva uma mensagem...
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-gradient flex items-center justify-center text-white">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Interactive Trigger */}
          <AnimatePresence>
            {playgroundStep === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white/10 backdrop-blur-[2px] rounded-[3rem]"
              >
                <div className="text-center px-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-soft-black font-bold text-sm mb-4 tracking-tight"
                  >
                    Veja na prática como funciona
                  </motion.p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={startSimulation}
                      className="shadow-[0_10px_30px_rgba(212,175,155,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,155,0.6)] transition-all duration-300"
                    >
                      Simular Cadastro
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Real Store Mockup */}
        <div className="flex flex-col">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col h-full min-h-[680px]">
            {/* Store Header */}
            <div className="bg-white px-6 py-4 border-b border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <Menu className="w-5 h-5 text-soft-black" />
                <h3 className="font-display text-xl font-bold tracking-tight">
                  PAULA GOMES <span className="text-rose-gold">BOUTIQUE</span>
                </h3>
                <div className="flex gap-4">
                  <Search className="w-5 h-5 text-soft-black/40" />
                  <div className="relative">
                    <Bell className="w-5 h-5 text-soft-black/40" />
                    <AnimatePresence>
                      {notifications > 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-rose-gold text-white text-[10px] flex items-center justify-center rounded-full font-bold"
                        >
                          {notifications}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Store Tabs */}
              <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
                {[
                  "Início",
                  "Novidades",
                  "Vestidos",
                  "Conjuntos",
                  "Promoções",
                ].map((tab, i) => (
                  <span
                    key={tab}
                    className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap ${i === 1 ? "text-rose-gold border-b-2 border-rose-gold pb-1" : "text-soft-black/40"}`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            {/* Store Grid */}
            <div className="flex-1 bg-gray-50/50 p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {visibleProducts.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                      }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                    >
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img
                          src={product.image}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          alt={product.name}
                        />
                        <div className="absolute top-2 left-2 bg-rose-gold text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                          Novo
                        </div>
                        <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                          <Heart className="w-4 h-4 text-rose-gold" />
                        </button>
                      </div>
                      <div className="p-3">
                        <h5 className="font-bold text-[11px] text-soft-black mb-1 line-clamp-1">
                          {product.name}
                        </h5>
                        <div className="flex justify-between items-center">
                          <p className="text-rose-gold font-bold text-xs">
                            R$ {product.price}
                          </p>
                          <ShoppingCart className="w-3 h-3 text-soft-black/20" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Skeleton Placeholders */}
                {visibleProducts.length < 4 &&
                  Array.from({ length: 4 - visibleProducts.length }).map(
                    (_, i) => (
                      <div
                        key={`skeleton-${i}`}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
                      >
                        <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                          <Plus className="w-6 h-6 text-gray-200" />
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="h-3 bg-gray-100 rounded w-3/4" />
                          <div className="h-3 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ),
                  )}
              </div>
            </div>

       
          </div>

          <div className="mt-8 p-6 bg-rose-gold-light/10 rounded-3xl border border-rose-gold-light/30 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs text-soft-black/60 font-medium">
                Você só manda as fotos no WhatsApp, a IA cria sua vitrine completa
              </span>
            </div>
            <Zap className="w-5 h-5 text-rose-gold animate-pulse" />
          </div>
        </div> 
      </div>
    </Section>
  );
};
