import React, { useState, useEffect, Fragment } from 'react'
import { getStoryIds } from '../services/HackerNewsApi'
import { Story } from '../components/Stroy'
import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles'
import { UseInfiniteScroll } from '../hooks/UseInfiniteScroll'

const StroriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const { count } = UseInfiniteScroll();
    console.log(count)

    useEffect(() => {
        getStoryIds().then(data => {
            setStoryIds(data);
        })
    }, [])

    return (
        <StoriesContainerWrapper >
            <h1>Hacker news content</h1>
            {
                storyIds.slice(0, count).map(stroyid =>
                    <Story key={stroyid} stroyId={stroyid} />
                )
            }
        </StoriesContainerWrapper >

    )



    // return <Story stroyId={storyIds[0]} />

}

export default StroriesContainer;