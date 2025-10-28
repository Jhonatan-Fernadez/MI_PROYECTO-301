import { userServices } from "../services/userServices.js";

export const userControllers = {
  async getUsers(req, res) {
    try {
      const users = await userServices.getUsers();
      res.status(200).json({
        succes: true,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  },

  async createUser(req, res) {
    try {
      const { email, name } = req.body;
      //Validacion basica
      if (!email || !name) {
        return res.status(400).json({
          succes: false,
          message: "Email y nombre son obligatorios",
        });
      }
      const newUser = await userServices.createUser({ email, name });
      res.status(201).json({
        succes: true,
        data: newUser,
        message: "Usuario creado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        sucess: false,
        message: error.message,
      });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedUser = await userServices.updateUser(id, updateData);

      res.status(200).json({
        success: true,
        data: updatedUser,
        message: "Usuario actualizado exitosamente",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userServices.deleteUser(id);
      res.status(201).json({
        success: true,
        message: 'Usuario eliminado correctamente',
        data: deletedUser
      });
    } catch (error) {
      if (error.code === 'P2025') {
        res.status(400).json({ success: false, message: 'Usuario no encontrado' });
      } else {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  }
};
