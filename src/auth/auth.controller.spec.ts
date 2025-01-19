import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [AuthService, AuthGuard]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('Should make signIn', async () => {
    const authData = {email: 'bruno@gmail.com', password: 'Bruno123@'}
    const auth = controller.signIn(authData)

    expect(auth).toBe('token')
  })
});
