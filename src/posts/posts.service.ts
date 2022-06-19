import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from "src/files/files.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post) private postRepo: typeof Post,
        private fileService: FilesService
    ) {}

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepo.create({ ...dto, image: fileName });
        return post;
    }
}
