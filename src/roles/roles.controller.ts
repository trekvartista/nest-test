import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
    // dependency injection
    constructor(private rolesService: RolesService) {}

    @ApiOperation({ summary: "Role creation" })
    @ApiResponse({ status: 200, type: Role })
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.createRole(roleDto);
    }

    @ApiOperation({ summary: "List of all roles" })
    @ApiResponse({ status: 200, type: [Role] })
    @Get("/:value")
    getByValue(@Param("value") value: string) {
        return this.rolesService.getRole(value);
    }
}
