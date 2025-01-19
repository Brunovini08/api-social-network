import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should send the data to service ', () => {
    const userData = {name: 'Bruno', email: 'bruno@gmail.com', password: 'Bruno123@', photo: ''}
    const user = controller.create(userData)

    expect(user).toEqual(user)
  });
});
