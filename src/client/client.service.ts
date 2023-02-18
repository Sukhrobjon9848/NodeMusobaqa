import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/services/dto/service.dto';
import { Client, ClientDocument } from './schemas/client.schema';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    ) {}
    
}
