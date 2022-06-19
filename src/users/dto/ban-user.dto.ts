import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({example: 1, description: "User\'s unique id"})
    @IsNumber({}, {message: "Number is expected"})
    readonly userId: number;

    @ApiProperty({example: "Spam", description: "Ban reason. Must be a good reason"})
    @IsString({message: "String is expected"})
    readonly reason: string;
}