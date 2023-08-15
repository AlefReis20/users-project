import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'


import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",
      { name: inputName.current.value, age: inputAge.current.value })

    setUsers([...users, newUser])

    history.push("/users")

  }

  return (
    <Container>
      <Image alt='image-logo' src={People} />
      <ContainerItens>
        <H1>Hello</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder='Name' />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder='Age' />

        <Button onClick={addNewUser}>
          Register <img alt='arrow' src={Arrow} />
        </Button>
      </ContainerItens>

    </Container>
  )
}

export default App
