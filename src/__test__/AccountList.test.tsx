import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils/test-utils';
import AccountList from 'pages/account-list/AccountList';

const accounts =  [
    {
      "transactionDate": "2015-12-31",
      "description": "All Purpose Spray",
      "category": "Other Services",
      "debit": 100.84,
      "credit": null,
      "id": 1
    }
]

export const handlers = [
  rest.get('data/bank.json', (req, res, ctx) => {
    return res(ctx.json({ items: accounts }), ctx.delay(200))
  })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('render display', async () => {
  renderWithProviders(<AccountList />)

  expect(await screen.findByText(/Account List/i)).toBeInTheDocument()

})
