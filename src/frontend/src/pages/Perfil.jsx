import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Perfil() {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      // TEMPORAL: Usa datos directos ya que no tienes /api/auth/me
      setUserData({
        name: "Jhonatan Fernandez pinedo",
        email: "fernandezpinedojhonatan@gmail.com",
        avatar:
          "https://lh3.googleusercontent.com/s/ACg8octkNU_hpqqUuuQb81JKy9YpEubBzpyxz8JeizQVAa594wMeAQ=595-c",
      });
      setLoading(false);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

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
                  {userData?.name || "No disponible"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData?.email || "No disponible"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Teléfono
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData?.phone || "Por agregar"}{" "}
                  {/* Cambiado a "Por agregar" */}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Dirección
                </label>
                <p className="text-lg text-gray-800 bg-gray-50 p-3 rounded">
                  {userData?.address || "Por agregar"}{" "}
                  {/* Cambiado a "Por agregar" */}
                </p>
              </div>
            </div>
            {userData?.avatar && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Foto de Perfil
                </label>
                <img
                  src={userData.avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Resto de tu código igual... */}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
