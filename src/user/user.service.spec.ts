import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from './../prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService)
  });

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should created a user', async () => {
    const userData = { name: 'Bruno', email: 'bruno@gmail.com', password: 'Bruno123@', photo: ''}
    const user = await service.create(userData)

    expect(user).toHaveProperty('id')
    expect(user.name).toBe(userData.name)
    expect(user.email).toBe(userData.email)
  })
});
