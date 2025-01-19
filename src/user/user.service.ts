import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { HashPassMiddleware } from '../hash-pass/hash-pass.middleware';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const encrypt =  new HashPassMiddleware()
    const pass = await encrypt.hash(createUserDto.password)

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: pass
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string, email?: string) {
    return this.prisma.user.findFirst({
      where: {
       OR: [
        {
          id: id
        },
        {
          email: email
        }
       ]
      }
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id
      },
      data: updateUserDto
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id
      }
    })
  }
}
