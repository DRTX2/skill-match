import { Profile } from "./profile.entity";

export abstract class User {
    id:number;
    name:string;
    email: string;
    password: string;
    profile: Profile;
    createdAt: Date;
    updatedAt: Date;
    // authenticate(password: string): boolean;
    // updateProfile(data: object): void;
    // deactivateAccount(): void;
}
