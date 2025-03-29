import {
  DefaultBodyType,
  http,
  HttpHandler,
  HttpResponse,
  HttpResponseInit,
  JsonBodyType,
  StrictRequest,
} from 'msw';
import { setupServer } from 'msw/node';

interface HandlerConfig {
  method?: keyof typeof http;
  init?: HttpResponseInit;
  path: string;
  res: (request: StrictRequest<DefaultBodyType>) => JsonBodyType;
}

export const createServer = (handlerConfig: HandlerConfig[]): void => {
  const handlers: HttpHandler[] = handlerConfig.map(
    ({ method = 'get', init, path, res }) =>
      http[method](path, async ({ request }) =>
        HttpResponse.json(res(request), init)
      )
  );

  const server = setupServer(...handlers);

  beforeAll(() =>
    server.listen({
      onUnhandledRequest: 'error',
    })
  );
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
