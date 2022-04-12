import { InternalError } from './internal-error';

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage = `Unexpected error when tryung to communicate to StormGlass: ${message}`;
    super(`${internalMessage}: ${message}`);
  }
}
