import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Perfil() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      // Si no hay token, redirigir al login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  // Datos de ejemplo del usuario
  const userData = {
    nombre: "Ana García",
    email: "ana.garcia@email.com",
    telefono: "+51 987 654 321",
    direccion: "Av. Principal 123, Lima",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-pink-400 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Rava Avis
          </Link>
          <div className="flex gap-4">
            <Link to="/">
              <button className="bg-white text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                🏠 Inicio
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Mi Perfil
          </h1>

          {/* Tarjeta de Información Personal */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              👤 Información Personal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Nombre Completo
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData.nombre}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData.email}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Teléfono
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData.telefono}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Dirección
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData.direccion}
                </p>
              </div>
            </div>
          </div>

          {/* Secciones adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pedidos Recientes */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                📦 Pedidos Recientes
              </h2>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  No tienes pedidos recientes
                </p>
                <Link to="/">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Realizar mi primera compra
                  </button>
                </Link>
              </div>
            </div>

            {/* Favoritos */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                ❤️ Mis Favoritos
              </h2>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  No tienes productos favoritos
                </p>
                <Link to="/">
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                    Explorar productos
                  </button>
                </Link>
              </div>
            </div>

            {/* Configuración */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                ⚙️ Configuración
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  🔒 Cambiar Contraseña
                </button>
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  📧 Configurar Notificaciones
                </button>
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  🎨 Preferencias de Tema
                </button>
              </div>
            </div>

            {/* Ayuda */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                ❓ Ayuda y Soporte
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  📞 Contactar Soporte
                </button>
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  ❓ Preguntas Frecuentes
                </button>
                <button className="w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  📝 Dejar Comentario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
