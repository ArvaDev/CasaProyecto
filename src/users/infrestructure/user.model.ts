import mongoose, { Schema } from "mongoose";
import { User } from "../domain/user";
const userSchema = new Schema<User>({
    nombre: {type: String},
    tipo: {type: String}
});
const UserModel = mongoose.model<User>('Users', userSchema);
export default UserModel;