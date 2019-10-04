import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    var id = props.match.params.id
    const getCar = cars.find(car => car.id == id)
    console.log(getCar)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{getCar.Name}</h2>
                {
                    Object.keys(getCar).map((key, idx) => {
                        return <Chip label={`${key}: ${getCar[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car