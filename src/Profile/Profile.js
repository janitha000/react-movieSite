import React from 'react'
import { UseAuth } from '../Contexts/Auth-Context'
import { Grid, Header, Image } from 'semantic-ui-react'


const Profile = () => {
    const { profile } = UseAuth();

    return (
        <Grid celled >
            <Grid.Row>
                <Grid.Column width={3}>
                <Image src={profile.picture} size='small' />
                </Grid.Column>
                <Grid.Column width={13}>
                <Header size='medium'>{profile.name}</Header>
                <Header size='medium'>{profile.nickname}</Header>
                <Header size='medium'>{profile.sub}</Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default Profile;

