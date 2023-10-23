import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { server } from './src/mocks/server';

/**
 * Configure test attributes
 */
configure({ testIdAttribute: 'data-test' });

beforeAll(() =>
    server.listen({
        onUnhandledRequest: 'warn',
    })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
