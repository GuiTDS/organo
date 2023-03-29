import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? <section className="time" style={{ backgroundColor: props.corSecundaria}}> {/* se a lista de colaboradores de um determinado time estiver vazia, não exibe nada */}
            <input value={props.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>)}    
            </div>
        </section>
        : ''
    )
}

export default Time;