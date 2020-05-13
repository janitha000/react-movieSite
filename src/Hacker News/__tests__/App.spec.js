import React from 'react'
import { act } from 'react-dom/test-utils'
import HackerNewsHome from '../components/HackerNewsHome'
import { storyIds, singularStroy } from '../fixtures'
import { getStoryIds, getStroy } from '../services/HackerNewsApi'
import { UseInfiniteScroll } from '../hooks/UseInfiniteScroll'
import { STORY_INCREMENT } from '../constants'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { Item } from 'semantic-ui-react'

//beforEach(cleanup);

jest.mock('../hooks/UseInfiniteScroll.js');
jest.mock('../services/HackerNewsApi.js', () => ({
    getStroy: jest.fn(),
    getStoryIds: jest.fn()
}))

test('renders the application', async () => {
    UseInfiniteScroll.mockImplementation(() => {
        count: STORY_INCREMENT
    })

    getStroy.mockImplementation(() => Promise.resolve(singularStroy));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

    await act(async () => {
        const { getByText, queryByTestId } = render(<HackerNewsHome />);
        await waitForElement(() => [
            expect(getByText('Test title'))
        ])
    })
})