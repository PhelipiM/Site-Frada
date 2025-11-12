import React, { useEffect, useState } from "react";

function Carousel() {
  const images = [
    "/ps1.heic",
    "/ps2.jpg",
    "/ps3.heic",
    "/ps4.jpg",
    "/ps5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-gray-100 p-4">
      <div className="relative w-[350px] h-[500px]">
        <img
          src={images[current]}
          alt={`Imagem ${current + 1}`}
          className="absolute w-full h-full object-contain rounded-2xl transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Botões laterais */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-teal-700 bg-opacity-60 text-white px-3 py-2 rounded-full hover:bg-opacity-90 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-teal-700 bg-opacity-60 text-white px-3 py-2 rounded-full hover:bg-opacity-90 transition"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-teal-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}



export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="pt-20">
        {/* INÍCIO */}
        <section
          id="inicio"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-teal-100 to-white"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-teal-700 drop-shadow-sm">
            Dê uma segunda chance — adote um amigo 🐾
          </h1>
          <p className="text-gray-700 max-w-2xl text-lg leading-relaxed">
            Somos uma organização dedicada ao recolhimento, cuidado e adoção de
            animais de rua. Nosso objetivo é encontrar lares seguros e amorosos
            para cada animal que acolhemos.
          </p>
          <img
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop"
            alt="pets"
            className="w-full max-w-lg rounded-2xl shadow-2xl mt-8 object-cover"
          />
        </section>

        {/* SOBRE */}
        <section
          id="sobre"
          className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            Sobre a ONG
          </h2>
          <p className="max-w-3xl text-gray-600 mb-12 text-lg leading-relaxed">
            Atuamos na proteção e defesa dos direitos dos animais. Nosso
            trabalho envolve resgate, cuidados veterinários, campanhas de
            conscientização e incentivo à adoção responsável.
          </p>
          <Carousel />
          <br />
          {/* Parte 1: O que fazemos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-20">
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                🐾 Resgate e Cuidado
              </h3>
              <p className="text-gray-700">
                Recolhemos animais em situação de risco e oferecemos todos os
                cuidados necessários para que se recuperem e tenham uma nova
                chance de vida.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                🏠 Adoção Responsável
              </h3>
              <p className="text-gray-700">
                Promovemos eventos e campanhas para conectar os animais
                resgatados a lares amorosos e responsáveis.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                🎗 Educação e Conscientização
              </h3>
              <p className="text-gray-700">
                Trabalhamos para conscientizar a sociedade sobre a importância
                do respeito e do cuidado com os animais.
              </p>
            </div>
          </div>

          {/* Parte 2: Como as doações ajudam */}
          <div className="w-full bg-green-700 text-white py-16 px-6 md:px-20 rounded-2xl shadow-lg max-w-5xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Como suas doações ajudam?
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Cada contribuição é essencial para que possamos continuar
              resgatando, tratando e cuidando dos animais. Com sua ajuda,
              conseguimos oferecer mais conforto, saúde e dignidade a eles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">✂️</span>
                <h4 className="font-semibold text-xl">Castrações</h4>
                <p className="text-sm mt-2 text-green-50">
                  Evitamos a reprodução descontrolada e ajudamos a reduzir o
                  abandono.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">🍖</span>
                <h4 className="font-semibold text-xl">Alimentação</h4>
                <p className="text-sm mt-2 text-green-50">
                  Garantimos refeições saudáveis e regulares para todos os
                  animais resgatados.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">💊</span>
                <h4 className="font-semibold text-xl">Medicamentos</h4>
                <p className="text-sm mt-2 text-green-50">
                  Mantemos os tratamentos e vacinas em dia, promovendo saúde e
                  bem-estar.
                </p>
              </div>
            </div>

            <p className="font-bold text-2xl text-center mt-10">
              E muito mais!
            </p>
          </div>
        </section>

        {/* COMO AJUDAR */}
        <section
          id="ajudar"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6"
        >
          <h2 className="text-4xl font-bold mb-8 text-teal-700">Como Ajudar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <Card title="🐾 Adote um animal">
              <p>
                Nós temos muitos animais prontos para serem adotados de forma
                responsável!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScUUAALBNDWcRYDA94atmOYpnyLpOza4g0U7mkOvbnOPuzSpA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-teal-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Saiba mais
              </a>
            </Card>

            <Card title="💚 Doe a partir de 1 real">
              <p>
                É possível contribuir com doações a partir de apenas R$1 por
                mês.
              </p>
              <a
                href="https://apoia.se/fradajoinville"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-teal-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Saiba mais
              </a>
            </Card>

            <Card title="🏠 Seja um lar temporário">
              <p>
                Muitos animais são resgatados sem ter para onde ir — ofereça um
                lar temporário!
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5547992915427&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+lar+tempor%C3%A1rio%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-teal-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Saiba mais
              </a>
            </Card>
          </div>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="min-h-screen flex flex-col items-center justify-center text-center bg-teal-700 text-white px-6"
        >
          <h2 className="text-4xl font-bold mb-4">Contato</h2>
          <p className="mb-2 text-lg">
            📱 Picpay: <span className="font-medium">fradapix@gmail.com</span>
          </p>
          <p className="mb-2 text-lg">
            📧 Email:{" "}
            <span className="font-medium">fradadejoinville@gmail.com</span>
          </p>
          <p className="text-lg">
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/fradajoinville"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              @fradajoinville
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ==== COMPONENTES ==== */

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + nome */}
        <div className="flex items-center gap-3">
          <img
            src="frada1.png"
            alt="Logo FRADA"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-teal-700">FRADA</h1>
        </div>

        {/* Menu */}
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-teal-600">
            Início
          </a>
          <a href="#sobre" className="hover:text-teal-600">
            Sobre
          </a>
          <a href="#ajudar" className="hover:text-teal-600">
            Como Ajudar
          </a>
          <a href="#contato" className="hover:text-teal-600">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-gray-700 flex flex-col items-center justify-between transition transform hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="font-semibold mb-3 text-teal-600 text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-center">{children}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 border-t text-center py-6 text-sm text-gray-600">
      © {new Date().getFullYear()} FRADA — Todos os direitos reservados 💚
    </footer>
  );
}
