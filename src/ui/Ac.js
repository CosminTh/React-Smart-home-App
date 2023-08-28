import './Ac.scss';

const Ac = ({acIsOn}) => {
    return <div className={`air ${acIsOn ? 'blue' : ''}`}></div>
}

export default Ac;