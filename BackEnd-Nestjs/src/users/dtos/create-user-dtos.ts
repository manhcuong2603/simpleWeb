import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    password: string

    @IsString()
    roles: string

    // @IsString()
    // refreshToken: string;
}