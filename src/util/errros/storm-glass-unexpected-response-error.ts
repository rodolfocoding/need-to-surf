import { InternalError } from './internal-error';

export class StormGlassUnexpectedResponseError extends InternalError {
  constructor(message: string) {
    const internalMessage =
      'Unexpected error returned by the StormGlass service';
    super(`${internalMessage}: ${message}`);
  }
}
