import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 ? 
        <section className="time" style={{ backgroundColor: hexToRgba(props.time.cor, '0.6')}}> {/* se a lista de colaboradores de um determinado time estiver vazia, não exibe nada */}
            <input onChange={evento => props.mudarCor(evento.target.value, props.time.id)} value={props.time.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.time.cor}}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador colaborador={colaborador} corDeFundo={props.time.cor} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>)}    
            </div>
        </section>
        : ''
    )
}

export default Time;