import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { BadRequestException, NotFoundException } from '@nestjs/common';
describe('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {

        const fakeUsersService: Partial<UsersService> = {
            find: () => Promise.resolve([]),
            create: (email: string, password: string) =>
                Promise.resolve({ id: 1, email, password } as User)
        };

        const module = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UsersService,
                    useValue: fakeUsersService
                }
            ]
        }).compile();

        service = module.get(AuthService);
    });
    it('can create an instance of auth service', async () => {
        expect(service).toBeDefined();
    });
    // it('create an new user with a salted and hashed password', async () => {
    //     const user = await service.signup('asd@gmail.com', 'nam', 'le quang', 'asdfg');

    //     expect(user.password).not.toEqual('asdfg');
    //     const [salt, hash] = user.password.split('.');
    //     expect(salt).toBeDefined();
    //     expect(hash).toBeDefined();
    // });

    // it('throws an error if user signs up with email that is in use', async () => {
    //     UsersService.find = () =>
    //         Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
    //     await expect(service.signup('asd@gmail.com', 'nam', 'le quang', 'asdfg')).rejects.toThrow(
    //         BadRequestException,
    //     );
    // });
    // it('throws if an invalid password is provided', async () => {
    //     UsersService.find = () =>
    //       Promise.resolve([
    //         { email: 'asdf@asdf.com', password: 'laskdjf' } as User,
    //       ]);
    //     await expect(
    //       service.signin('laskdjf@alskdfj.com', 'passowrd'),
    //     ).rejects.toThrow(BadRequestException);
    //   });
});
