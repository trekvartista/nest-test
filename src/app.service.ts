import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getUsers() {
        return [{id: 1, name: "johny"},{id: 2, name: "peter"}]
    }
}