import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {

    @ApiProperty({example: '1', description: 'User\'s unique Id'})
    readonly userId: number;

    @ApiProperty({example: 'ADMIN', description: 'User\'s new role'})
    readonly role: string;
}