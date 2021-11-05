import { Container, Hr, Head, InputLabel, Content, Table, Tr, Th, Td } from './style'
import {Link} from 'react-router-dom'
import Voltar from '../../Components/GoBack/index'

const Produtos = () => {
    return(


            <Container>
                <h2>Criação de Orçamento</h2>
                <Hr/>
                <legend>Tipo de Venda:</legend>
                <Head> 
                   <InputLabel>
                    <label>Própria</label>
                    <input type="radio" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>Parceiro</label>
                    <input type="radio" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>Usuarios</label>
                    <input type="number" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>Imposto</label>
                    <input type="number" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>Comissão</label>
                    <input type="number" name="opcao" id="" />
                    </InputLabel>
                </Head>
                <Content>
                    <Table>
                        <thead>
                        <Tr>
                            <Th>
                                Produto
                            </Th>
                            <Th>
                                Valor
                            </Th>
                            <Th>
                                Preço de Venda
                            </Th>
                            <Th>
                                Valor Total
                            </Th>
                            <Th>
                                Selecionar Produto
                            </Th>
                        </Tr>
                        </thead>
                        <tbody>
                            <Tr>
                                <Td>
                                <input type="search" name="" id="" />
                                </Td>
                                <Td>
                                <input type="search" name="" id="" />
                                </Td>
                                <Td>
                                <input type="search" name="" id="" />
                                </Td>
                                <Td>
                                <input type="search" name="" id="" />
                                </Td>
                                <Td>
                                    <input type="checkbox" name="" id="" checked />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                F-22 Rapto
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                    
                                </Td>
                                <Td>
                                
                                </Td>
                                <Td>
                                <input type="checkbox" name="" id=""  />
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                    <Link to="/SelectFerramentas" ><button>Próximo</button></Link>
                    <Voltar/>
                </Content>
            </Container>
    );
}

export default Produtos