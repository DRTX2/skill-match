import { UserRole } from "@prisma/client";
import { IsArray, IsEmail, IsEnum, isInt, IsInt, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsEnum(UserRole)// FREELANCER, CLIENT, WORKER
    role:UserRole;

    @IsArray()
    @IsString({each:true})
    @IsOptional()
    specialities?:string[];

    @IsInt()
    @IsOptional()
    experience?:number;

    @IsInt()
    @IsOptional()
    earnings?:number;

    @IsString()
    @IsOptional()
    companyName:string;

}
