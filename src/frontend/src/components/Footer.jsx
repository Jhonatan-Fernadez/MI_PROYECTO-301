  const ENLACES_FOOTER = [
    {
      titulo: "Acerca de Nosotros",
      enlaces: [
        { texto: "Nuestra Historia", url: "#" },
        { texto: "Misión y Visión", url: "#" },
        { texto: "Sustentabilidad", url: "#" },
      ],
    },
    {
      titulo: "Ayuda",
      enlaces: [
        { texto: "Preguntas Frecuentes", url: "#" },
        { texto: "Guía de Tallas", url: "#" },
        { texto: "Métodos de Pago", url: "#" },
        { texto: "Rastrear mi Pedido", url: "#" },
      ],
    },
    {
      titulo: "Contacto",
      enlaces: [
        { texto: "Correo Electrónico", url: "#" },
        { texto: "Teléfono", url: "#" },
        { texto: "Ubicación", url: "#" },
      ],
    },
  ];

  
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ENLACES_FOOTER.map((col) => (
          <div key={col.titulo}>
            <h4 className="uppercase font-semibold mb-3">{col.titulo}</h4>
            <ul>
              {col.enlaces.map((enlace) => (
                <li key={enlace.texto} className="mb-1">
                  <a href={enlace.url} className="hover:text-white">
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="uppercase font-semibold mb-3">
            Nuestras redes sociales
          </h4>
          <div className="flex flex-col gap-1">
            <a href="#">🌐 Facebook</a>
            <a href="#">🎵 TikTok</a>
            <a href="#">💬 WhatsApp</a>
            <a href="#">📸 Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Rava Avis. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
