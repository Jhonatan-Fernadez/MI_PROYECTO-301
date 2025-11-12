import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [token, setToken] = useState(null);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) setToken(storedToken);
  }, []);

  // CONSUMIR API DE PRODUCTOS
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();

        // Transformar los datos de la API
        const productosTransformados = data.map((producto) => ({
          id: producto.id,
          nombre: producto.name,
          precio: `S/ ${producto.price.toFixed(2)}`,
          vendidos: "+0 vendidos",
          imagen: producto.img,
          categoria: producto.category,
        }));

        setProductos(productosTransformados);
        setProductosFiltrados(productosTransformados); // Mostrar todos inicialmente
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // Función para filtrar productos por categoría
  const filtrarProductos = (categoria) => {
    setCategoriaActiva(categoria);

    if (categoria === "Todos") {
      setProductosFiltrados(productos);
    } else if (categoria === "Damas") {
      const productosDamas = productos.filter(
        (producto) => producto.categoria === "Damas"
      );
      setProductosFiltrados(productosDamas);
    } else if (categoria === "Caballeros") {
      const productosCaballeros = productos.filter(
        (producto) =>
          producto.categoria === "Varones" ||
          producto.categoria === "Caballeros"
      );
      setProductosFiltrados(productosCaballeros);
    } else if (categoria === "Ofertas") {
      // Productos con precio menor a 1000 como "ofertas"
      const productosOfertas = productos.filter((producto) => {
        const precio = parseFloat(producto.precio.replace("S/ ", ""));
        return precio < 1000;
      });
      setProductosFiltrados(productosOfertas);
    } else {
      setProductosFiltrados(productos);
    }
  };

  // Función para manejar errores de imágenes
  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Imagen+No+Disponible";
    e.target.alt = "Imagen no disponible";
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  const bannerImageDesktop =
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1350&q=80";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-pink-400 text-white flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold">
            Rava Avis
          </Link>
          <nav className="flex gap-6 font-medium">
            {["Todos", "Damas", "Caballeros", "Ofertas", "Más categorías"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => filtrarProductos(item)}
                  className={`hover:text-pink-100 transition-colors bg-transparent border-none text-white cursor-pointer font-medium ${
                    categoriaActiva === item
                      ? "text-pink-200 font-bold underline"
                      : ""
                  }`}
                >
                  {item}
                </button>
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
           
          {token && (
            <>
              <button className="hover:text-pink-100">❤️ Favoritos</button>
              <Link to="/perfil" className="hover:text-pink-100">
                👤
              </Link>
              <Link to="/carrito" className="hover:text-pink-100">
                🛒
              </Link>
            </>
          )}
          {token ? (
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                  Ingresar
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* BANNER */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImageDesktop})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 bg-white/80 p-8 rounded-lg text-center shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800">
            Descubre la moda que te hace único ✨
          </h1>
          <Link to="/productos">
            <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition">
              Comprar Ahora
            </button>
          </Link>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS - CON FILTROS */}
      <section className="py-12 px-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          {categoriaActiva === "Todos"
            ? "Productos destacados"
            : `Productos - ${categoriaActiva}`}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mr-3"></div>
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        ) : productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-64 object-cover"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium text-gray-800 mb-2">
                    {producto.nombre}
                  </p>
                  <p className="text-pink-500 font-bold text-lg mb-1">
                    {producto.precio}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {producto.categoria}
                  </span>
                  <p className="text-gray-500 text-sm mt-2">
                    {producto.vendidos}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-600">
              No hay productos en la categoría "{categoriaActiva}"
            </p>
          </div>
        )}
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
            <div key={text} className="bg-white shadow-sm rounded-lg px-6 py-4">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
