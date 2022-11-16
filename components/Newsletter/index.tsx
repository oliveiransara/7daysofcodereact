import {Button, Container} from './styles'

export default function Newsletter() {
  return (
    <Container>
      <input type="text" placeholder='Insira seu e-mail'/>
      <Button type="button">Assinar newsletter</Button>
    </Container>
  )
}
