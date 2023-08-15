import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Image,
  User
} from './styles'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users")

      setUsers(allUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt='avatar-logo' src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Users</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt='bag-of-trash' src={Trash} />
              </button>
            </User>
          ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt='arrow' src={Arrow} /> Back
        </Button>

      </ContainerItens>

    </Container>
  )
}

export default Users
