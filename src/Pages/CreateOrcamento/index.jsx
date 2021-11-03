import Voltar from '../../Components/GoBack/index'
import {Link} from 'react-router-dom'
import {
  Container,
  Hr,
  Label,
  Content,
  Content1,
  InputLabel,
  Content2,
  Content3,
  Content4,
  Content5,
  Button,
} from './style'

const ListClientes = () => {
  return (
    <Container>
      <h2>Criaçaõ de Orçamento</h2>
      <Hr />
      <Content>
        <form action="">
          <Content1>
            <InputLabel>
              <Label> Nome do cliente </Label>
              <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>Nome Fantasia</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>CNPJ</Label>
            <input type="text" name="" id="" />
            </InputLabel>
          </Content1>
          <Content2>
              <InputLabel>
            <Label>Bairro</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label> E-mail (Contato)</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>Endereço</Label>
            <input type="text" name="" id="" />
            </InputLabel>
          </Content2>
          <Content3>
          <InputLabel>
            <Label> E-mail </Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>CEP</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>Cidade</Label>
            <input type="text" name="" id="" />
            </InputLabel>
          </Content3>
          <Content4>
          <InputLabel>
            <Label>Qtde de Funcionários</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>Telefone/Ramal</Label>
            <input type="text" name="" id="" />
            </InputLabel>
            <InputLabel>
            <Label>Telefone Comercial</Label>
            <input type="text" name="" id="" />
            </InputLabel>
          </Content4>
          <Content5>
            <InputLabel>
            <Label for="porte">Porte:</Label>
            <select name="porte" id="porte" form="carform">
              <option value="1">Pequeno Porte</option>
              <option value="2">Médio Porte</option>
              <option value="3">Grande Porte</option>
            </select>
            </InputLabel>
            <InputLabel>
            <Label>Estado</Label>
            <input type="text" name="" id="" />
            </InputLabel>
          </Content5>
        </form>
      </Content>
      <Button>
      <Voltar />
    <Link to="/" ><button>Próximo </button></Link>
      </Button>
    </Container>
  )
}

export default ListClientes
