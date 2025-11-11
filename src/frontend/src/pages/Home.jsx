import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  //try y catch para obtener mis productos
  const PRODUCTOS_DESTACADOS_ESCRITORIO = [
    {
      id: 1,
      nombre: "Conjunto de camisas para damas",
      precio: "S/ 100.30",
      vendidos: "+50 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1542060748-10c28b62716e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nombre: "Camisa formal para hombres",
      precio: "S/ 120.99",
      vendidos: "+100 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1520975918311-59c2d74cf2c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nombre: "Camisa estilo coreano para mujeres",
      precio: "S/ 88.00",
      vendidos: "+120 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      nombre: "Camisa manga larga para mujer",
      precio: "S/ 95.00",
      vendidos: "+50 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      nombre: "Conjunto de oficina elegante",
      precio: "S/ 199.99",
      vendidos: "+30 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      nombre: "Blusa casual para verano",
      precio: "S/ 75.50",
      vendidos: "+80 vendidos",
      imagen:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const bannerImageDesktop =
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1350&q=80";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- SECCIÓN SUPERIOR --- */}(
      <>
        {/* HEADER */}
        <header className="bg-pink-400 text-white flex justify-between items-center px-10 py-4">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold">
              Rava Avis
            </a>
            <nav className="flex gap-6 font-medium">
              {["Damas", "Caballeros", "Ofertas", "Más categorías"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-pink-100 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full flex items-center px-3 py-1 text-black">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="outline-none border-none bg-transparent w-32"
                  />
                  🔍
                </div>
             {" "}
            {token && (
              <>
                
                <button className="hover:text-pink-100">❤️ Favoritos</button>
                <a href="#">👤</a>
                <a href="#">🛒</a>
              </>
            )}
            {token ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                    Ingresar
                  </button>
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* BANNER CORREGIDO */}
        <section
          className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bannerImageDesktop})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 bg-white/80 p-8 rounded-lg text-center shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800">
              Descubre la moda que te hace único ✨
            </h1>
            <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition">
              Comprar Ahora
            </button>
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS */}
        <section className="py-12 px-10 text-center">
          <h2 className="text-2xl font-semibold mb-6">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTOS_DESTACADOS_ESCRITORIO.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium text-gray-800">{producto.nombre}</p>
                  <p className="text-pink-500 font-bold">{producto.precio}</p>
                  <p className="text-gray-500 text-sm">{producto.vendidos}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="bg-pink-50 py-10 text-center">
          <h3 className="text-xl font-semibold mb-6">Por qué elegirnos</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "🚚 Envío rápido y seguro",
              "✨ Prendas de alta calidad",
              "🔄 Devoluciones sencillas",
              "🔒 Pago seguro",
            ].map((text) => (
              <div
                key={text}
                className="bg-white shadow-sm rounded-lg px-6 py-4"
              >
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <Footer></Footer>
      </>
      )
    </div>
  );
}

export default Home;
