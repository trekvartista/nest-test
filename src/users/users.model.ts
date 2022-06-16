import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttributes {
    email: string;
    password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttributes> {
    @ApiProperty({example: '1', description: 'User\'s unique identificator'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'johndoe@mail.com', description: 'User\'s email'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '12345678', description: 'User\'s password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: "true", description: 'Banned or not'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    isBanned: boolean;

    @ApiProperty({example: 'Spam', description: 'Ban reason'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}
