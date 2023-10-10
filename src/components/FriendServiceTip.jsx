export default function FriendServiceTip({ onOtherServiceTip, otherServiceTip }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mx-auto shadow p-4">
                    <h5>How much did your friend like the service?</h5>
                    <select value={otherServiceTip} onChange={onOtherServiceTip} className="form-select">
                        <option value="dissatisfied">Dissatisfied (0%)</option>
                        <option value="okay">It was okay (5%)</option>
                        <option value="good">It was good (10%)</option>
                        <option value="amazing">Absolutely amazing! (20%)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}