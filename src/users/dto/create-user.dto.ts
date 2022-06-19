import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({example: 'johndoe@mail.com', description: 'User\'s email'})
    @IsString({message: 'String is expected'})
    @IsEmail({}, {message: 'Entered email is not valid'})
    readonly email: string;
    
    @ApiProperty({example: '12345678', description: 'User\'s password'})
    @Length(4, 16, {message: 'No less than 4 and no more than 16 characters'})
    readonly password: string;
}