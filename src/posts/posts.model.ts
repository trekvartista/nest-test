import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttributes {
    title: string;
    content: string;
    image: string;
    userId: number;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttributes> {

    @ApiProperty({example: 1, description: 'Post\'s unique identificator'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: '2b2t issue', description: 'Title of the post'})
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({example: 'Lorem ipsum ...', description: 'Main content of the post'})
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({example: 'https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png', description: 'Post image Url'})
    @Column({type: DataType.STRING})
    image: string

    @ApiProperty({example: 5, description: 'Unique userId of the Author'})
    @Column({type: DataType.INTEGER})
    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User)
    author: User
}
