import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCashProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;
let fakeCashProvider: FakeCashProvider;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCashProvider = new FakeCashProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCashProvider,
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Mary Doe',
      email: 'marydoe@email.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'James Doe',
      email: 'jamesdoe@email.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
