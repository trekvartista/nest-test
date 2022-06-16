import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Administartor role'})
    readonly value: string;

    @ApiProperty({example: 'Administrator role', description: 'Description of description, yeah'})
    readonly description: string;
}