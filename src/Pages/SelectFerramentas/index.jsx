import { Container, Hr, Head, InputLabel, Content, Table, Tr, Th, Valor, Rodape, Td } from './style'

const SelectFerramentas = () => {
    return(
        <Container>
                <h2>Criação de Orçamento</h2>
                <Hr/>
                <Head>
                <InputLabel>
                    <label>Porte da Empresa</label>
                    <input type="text" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>E-mail</label>
                    <input type="email" name="opcao" id="" />
                    </InputLabel>
                    <InputLabel>
                    <label>QTD. Usuários</label>
                    <input type="number" name="opcao" id="" />
                    </InputLabel>
                    </Head>
                    <Content>
                    <Table>
                        <thead>
                        <Tr>
                            <Th>
                                Ferramentas
                            </Th>
                            <Th>
                                Valores sem imposto
                            </Th>
                            <Th>
                                Valores com Imposto
                            </Th>
                            <Th>
                                Valor p/ Parceiro
                            </Th>
                        </Tr>
                        </thead>
                        <tbody>
                            <Tr>
                                <Td>
                                F-22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                U$ 49.500.000,00
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                EA-18G Growler
                                </Td>
                                <Td>
                                U$ 67.000.000,00
                                </Td>
                                <Td>
                                U$ 73.700.000,00
                                </Td>
                                <Td>
                                U$ 22.110.000,00
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                    <Rodape>
                    <Valor>
                            <p>Valor Total: U$ ??.???.???,??</p>
                        </Valor>
                        </Rodape>
                    </Content>
        </Container>
    );
}

export default SelectFerramentas