import { useHistory } from "react-router-dom";
import {Button} from './style'

const GoBack = () => {
    const history = useHistory()
    return(
        <Button onClick={() => {
        history.goBack();
        }}>Voltar</Button>
    )
}

export default GoBack