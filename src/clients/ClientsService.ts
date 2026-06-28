import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({
      data: {
        name: createClientDto.name,
        type: createClientDto.type,
        email: createClientDto.email,
        phone: createClientDto.phone,
        companyName: createClientDto.companyName,
        address: createClientDto.address,
      },
    });
  }

  async findAll() {
    return this.prisma.client.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.client.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: {
        id,
      },
      data: {
        name: updateClientDto.name,
        type: updateClientDto.type,
        email: updateClientDto.email,
        phone: updateClientDto.phone,
        companyName: updateClientDto.companyName,
        address: updateClientDto.address,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.client.delete({
      where: {
        id,
      },
    });
  }
}
