import React, { Fragment, useState } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'


const AddMovie = ({ onSubmit }) => {
    const [movieId, setMovieId] = useState('0')

    return (
        <Fragment>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Add Movie' onChange={(e) => setMovieId(e.target.value)} placeholder='Movie Id' />
                </Form.Group>
                <Button onClick={() => onSubmit(movieId)} type='submit'>Submit</Button>
            </Form>
        </Fragment>
    )
}

export default AddMovie;