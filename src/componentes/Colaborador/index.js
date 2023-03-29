import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={40} 
                className='deletar' 
                onClick={() => console.log('chamar funcao de delete: ', props.colaborador)}
            />
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/> 
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;