import { getAllUsers, deleteAllUsers, getUser } from "./control.controller.js"
import { signUp, signIn, confirmEmail } from "./email.controller.js"
import { getPasswordEmail, resetPassword } from "./password.controller.js"
import { GoogleSignIn } from "./thirdparty.controller.js"

export {
    getAllUsers,
    deleteAllUsers,
    signUp,
    signIn,
    confirmEmail,
    getPasswordEmail,
    resetPassword,
    GoogleSignIn,
    getUser,
}