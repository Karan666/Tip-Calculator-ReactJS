export default function Button({ onHandleReset }) {
    return (
        <div>
            <button className="btn btn-danger mb-5" onClick={onHandleReset}>RESET</button>
        </div>
    )
}