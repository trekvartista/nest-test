import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: '1', description: 'User\'s unique Id'})
    @IsNumber({}, {message: "Number is expected"})
    readonly userId: number;

    @ApiProperty({example: 'ADMIN', description: 'User\'s new role'})
    @IsString({message: "String is expected"})
    readonly role: string;
}