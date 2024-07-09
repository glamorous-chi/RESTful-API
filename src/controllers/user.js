import User from '../models/user.js'
import {cloudinary} from '../helpers/cloudinary.config.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")

        if (!users) {
            return res.status(404).json({ success: false, message: "No users found" });
        }
        res.json({ success: true, message: "Users retrieved successfully", users })
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const getOneUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById({ _id: userId })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        res.json({ success: true, message: "User retrieved successfully", user })
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const { name, email, password} = req.body;
        const imageFile = req.file;

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        const updateUserData = {
            name: name || user.name,
            email: email || user.email
        };

        if (password) {
            updateUserData.password = password;
        }

        if (imageFile) {
            // Delete image from cloudinary
            if (user.image && user.imagePublicId) {
                await cloudinary.uploader.destroy(user.imagePublicId);
            }
            // upload new image to cloudinaryu
            const imageResult = await cloudinary.uploader.upload(imageFile.path);
            updateUserData.image = imageResult.secure_url;
            updateUserData.imagePublicId = imageResult.public_id;
        }

        // Update user data
        const updatedUser = await User.findByIdAndUpdate(userId, updateUserData, {
            new: true,
        });

        return res.json({
            success: true,
            message: "User Profile updated successfully",
            updatedUser
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update user profile", error: err });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.deleteOne({ _id: userId })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        return res.json({ success: true, message: "User deleted successfully" })
    }

    catch (err) {
        console.log("Error deleting user", err.message);
        return res.status(500).json({ message: "User deletion failed", err })
    }
}

export const updateUserRole = async (req, res) => {
    try {
      const userId = req.user._id;
      const { role } = req.body;
  
      if (!role) {
        return res.status(400).json({ error: "Role is required" });
      }

      console.log("Role is: ", role);

      const updateQuery = {
        role: role,
        isAdmin: role === 1 ? true : false,
      };
  
      const updatedUser = await User.findByIdAndUpdate(userId, updateQuery, {
        new: true,
      });
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      updatedUser.password = undefined;
      
      res.json({ message: "User role updated successfully", user: updatedUser });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "Failed to update user role", errorMsg: err.message });
    }
  };