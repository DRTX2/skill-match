import { IsArray, IsInt, IsString } from "class-validator";

export class CreateProfileDto {
    @IsArray()
    @IsString({each:true})
    specialities?:string[];

    @IsInt()
    experience?:number;

    @IsInt()
    earnings?:number;

    @IsString()
    companyName:string;
}
