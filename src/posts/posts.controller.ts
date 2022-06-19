import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { Post as UserPost } from "./posts.model";

@ApiTags('Posts')
@Controller("posts")
export class PostsController {
    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Post creation'})
    @ApiResponse({status: 200, type: UserPost})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
        return this.postService.create(dto, image);
    }
}
