import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    ) { }

    async createUser(telegram_id: number): Promise<RoleDocument> {
        const user = new this.roleModel({ telegram_id, role: 'user' });
        return user.save();
    }

    async createMaster(telegram_id: number): Promise<Role> {
        const user = new this.roleModel({ telegram_id, role: 'master' });
        return user.save();
    }

    async createAdmin(telegram_id: number): Promise<Role> {
        const user = new this.roleModel({ telegram_id, role: 'admin' });
        return user.save();
    }

    async findUser(telegram_id: number): Promise<Role> {
        const user = await this.roleModel.findOne({ telegram_id }).exec();
        console.log(telegram_id);
        
        return user;
    }
}
