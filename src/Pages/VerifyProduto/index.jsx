import { Container, Hr, Content, Table, Tr, Th, Button, Td } from './style'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import Voltar from "../../Components/GoBack"


const VerifyCliente = () => {
    return(
        <Container>
                <h2>Cadastro de Ferramentas</h2>
                <Hr/>
                <Content>
                    <Table>
                        <thead>
                            <Tr>
                                <Th>
                                    Produto
                                </Th>
                                <Th>
                                    Base- Pequeno Porte
                                </Th>
                                <Th>
                                    Base- Médio Porte
                                </Th>
                                <Th>
                                    Base- Grande Porte
                                </Th>
                                <Th>
                                    <Link to='#'>
                                        <Button>
                                            +
                                        </Button>
                                    </Link>
                                </Th>

                            </Tr>
                        </thead>
                        <tbody>
                        <Tr>
                                <Td>
                                    <input type="search" name="" id="" placeholder="Filtrar" />
                                </Td>
                                <Td>
                                    <input type="search" name="" id="" placeholder="Filtrar" />
                                </Td>
                                <Td>
                                    <input type="search" name="" id="" placeholder="Filtrar" />
                                </Td>
                                <Td>
                                    <input type="search" name="" id="" placeholder="Filtrar" />
                                </Td>
                                <Td>
                                    <input type="search" name="" id="" placeholder="Filtrar" />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                    <Voltar />
                </Content>
        </Container>
    );
}

export default VerifyCliente