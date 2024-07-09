import express from "express"
import { getAllUsers, getOneUser, updateUser, deleteUser, updateUserRole } from "../controllers/user.js"
import { isAdmin, isLoggedIn } from "../middlewares/auth.js"
import { upload } from "../helpers/multer.js"
const router = express.Router()

router.get("/users", getAllUsers)
router.get("/user/:userId", getOneUser)
router.put("/update", isLoggedIn, upload.single("image"),updateUser)
router.delete("/delete/:userId", deleteUser)
router.put("/user/:userId/role", isLoggedIn,isAdmin, updateUserRole)

export default router
