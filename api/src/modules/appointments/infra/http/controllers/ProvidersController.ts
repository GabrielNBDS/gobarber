import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass, plainToClass } from 'class-transformer';

import User from '@modules/users/infra/typeorm/entities/User';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(classToClass(plainToClass(User, providers)));
  }
}

export default ProvidersController;
