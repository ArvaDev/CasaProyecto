import mongoose from 'mongoose';
const uri = "mongodb://127.0.0.1:27017/AS_CASA_PROY";

export const connectionDB = async () => {
    await mongoose.connect(uri, {})
        .then(() => {console.log("Conexión a la base de datos establecida")})
        .catch((err) => {console.error('Conexión a la base de datos fallida', err); process.exit(1)});
}