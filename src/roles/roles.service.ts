import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepo.create(dto);
        return role;
    }

    async getRole(value: string) {
        const role = await this.roleRepo.findOne({ where: { value } });
        return role;
    }
}
