import classes from './Light.module.scss';

const Light = ({lightsOn}) => {
    return <div className={`${classes.lights} ${lightsOn ? classes.yellow : ''}`}></div>
}

export default Light;