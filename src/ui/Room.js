import './Room.scss';

const Room = (props) => {
    return <div className='room' style={{opacity: props.status}}></div>
}

export default Room;