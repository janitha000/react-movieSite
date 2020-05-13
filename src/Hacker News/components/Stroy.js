import React, { useState, useEffect, Fragment, memo } from 'react'
import { getStroy } from '../services/HackerNewsApi'
import { StoryWrapper, StoryTitle, StoryMeta } from '../styles/StroyStyles'
import { mapTime } from '../mappers/MapTime'

export const Story = memo(function Stroy({ stroyId }) {
    const [stroy, setStroy] = useState({});

    useEffect(() => {
        getStroy(stroyId).then(res => res && res.url && setStroy(res))
    }, [])

    return stroy && stroy.url ? (
        <StoryWrapper>
            <StoryTitle>
                {stroy.title}
            </StoryTitle>
            <StoryMeta>
                By : {stroy.by}
            </StoryMeta>
            <StoryMeta>
                At : {mapTime(stroy.time)}
            </StoryMeta>


        </StoryWrapper>
    ) : null;

})