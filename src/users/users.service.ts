import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepo: typeof User,
        private rolesService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepo.create(dto);
        const role = await this.rolesService.getRole("USER");
        await user.$set("roles", [role.id]);

        return user;
    }

    async getUsers() {
        const users = await this.userRepo.findAll({ include: { all: true } });

        return users;
    }
}
