import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
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
        
        await user.$set("roles", [role.id]);        // add role to DB

        return user;
    }

    async getUsers() {
        const users = await this.userRepo.findAll({ include: { all: true } });

        return users;
    }

    async getUserByEmail(email: string) {
        const users = await this.userRepo.findOne({where: {email}, include: {all: true}})
        return users;
    }

    async addRole(dto: AddRoleDto ) {
        const user = await this.userRepo.findByPk(dto.userId);
        const role = await this.rolesService.getRole(dto.role);

        if (user && role) {
            await user.$add('role', role.id);
            return dto;
        }

        throw new HttpException("User or role were not found", HttpStatus.NOT_FOUND);
    }

    async banUser(dto: BanUserDto) {
        const user = await this.userRepo.findByPk(dto.userId);

        if (!user) {
            throw new HttpException("User was not found", HttpStatus.NOT_FOUND);
        }
        user.isBanned = true;
        user.banReason = dto.reason;

        await user.save();  // update value in db
        return user;
    }
}
