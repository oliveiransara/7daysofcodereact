import Image from 'next/image'
import { Container, List } from './styles'

export default function Menu() {
  return (
    <Container>
      <a href="#">
        <Image src="/assets/logo.png" alt={'logo'} width={177} height={44} />
      </a>
      <List>
        <a href="#ComoFazer">Como fazer /</a>
        <a href="#Ofertas">Ofertas /</a>
        <a href="#Depoimentos">Depoimentos /</a>
        <a href="#Vídeos">Vídeos /</a>
        <a href="#MeuCarrinho">Meu Carrinho</a>
      </List>
    </Container>
  )
}
