import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags("Authorization")
@Controller('auth')
export class AuthController {

    constructor (private authService: AuthService) {

    }

    @ApiOperation({summary: 'Login'})
    @ApiResponse({status: 200})
    @Post('/login')
    login (@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }
    
    @ApiOperation({summary: 'Registration'})
    @ApiResponse({status: 200})
    @Post('/register')
    register(@Body() userDto: CreateUserDto) {
        return this.authService.register(userDto)
    }
}
