import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {

    @ApiProperty({example: "1-st post", description: "Post title"})
    @IsString({message: "String is expected"})
    readonly title: string;

    @ApiProperty({example: "1-st post content", description: "Post content"})
    @IsString({message: "String is expected"})
    readonly content: string;
    // readonly imageUrl: string;
}