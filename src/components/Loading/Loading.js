import './Loading.css'

const Loading = (props) => {
    return (
        <div className="loading">
            {Math.round(props.load)}%
        </div>
    )
}

export default Loading