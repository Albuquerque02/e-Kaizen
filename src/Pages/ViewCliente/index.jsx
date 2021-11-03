import { Link } from "react-router-dom";
import { Container, Hr, Content, Table, Tr, Th, Button, Td } from './style'

const ViewCliente = () => {
    return(
            <Container>
                <h2>Criaçaõ de Orçamento</h2>
                <Hr/>
                <Content>
                <Table>
                    <thead>
                    <Tr>
                        <Th>
                            Nome do Cliente
                        </Th>
                        <Th>
                            CNPJ
                        </Th>
                        <Th>
                            Porte
                        </Th>
                        <Th>
                            QTDE de Funcionários
                        </Th>
                        <Th>
                            Telefone (COM)
                        </Th>
                        <Th>

                        </Th>
                    </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <Td>
                                Felipe Albuquerque
                            </Td>
                        
                            <Td>
                                111.111.111.111
                            </Td>
                            <Td>
                                Médio Porte
                            </Td>
                            <Td>
                                500
                            </Td>
                            <Td>
                                (19) 996047221
                            </Td>
                            <Td>
                            <Link to="/CreateOrcamento">
                            <Button>
                                +
                            </Button>
                            </Link>
                            </Td>
                            </Tr>
                            <Tr>
                            <Td>
                                Felipe Albuquerque
                            </Td>
                        
                            <Td>
                                111.111.111.111
                            </Td>
                            <Td>
                                Médio Porte
                            </Td>
                            <Td>
                                500
                            </Td>
                            <Td>
                                (19) 996047221
                            </Td>
                            </Tr>
                    </tbody>
                </Table>
                </Content>
            </Container>
    );
}

export default ViewCliente