export default function FinalBill({ bill, totalTip, totalBill }) {
    return (
        <div className="mb-4">
            <h5 className="text text-success fw-bold">
                Your bill is ${totalBill} (${!bill ? 0 : `${bill}`} + ${totalTip} tip)
            </h5>
        </div>
    )
}