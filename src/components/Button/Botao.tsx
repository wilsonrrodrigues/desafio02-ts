import { Button } from '@chakra-ui/react'
import { login } from '../../services/login'

export const Botao = () => {
  return (
    <Button
      onClick={login}
      colorScheme='gray'
      variant='solid' width='100%'
      marginTop='15px'
    >
      Entrar
    </Button>
  )
}