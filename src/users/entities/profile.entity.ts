import { User } from "./user.entity";

export class Profile {
    id: number;
    bio?: string;
    location?: string;
    website?: string;
    skills?: string; // Puedes cambiarlo a string[] si deseas manejarlo como array
    picture?: string; // URL de la imagen del perfil
    user?: User; // Relación con el usuario
}
