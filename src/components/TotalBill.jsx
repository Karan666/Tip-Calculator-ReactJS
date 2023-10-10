import React from 'react';

export default function TotalBill({ bill, onSetBill }) {
    return (
        <div className='container mt-5 text-center'>
            <div className="row">
                <div className="col-5 mx-auto shadow p-4">
                    <h5>How much was the bill?</h5>
                    <input
                        type="number"
                        className="form-control p-2"
                        value={bill}
                        onChange={onSetBill}
                        placeholder="Enter the bill"
                    />
                </div>
            </div>
        </div>
    );
}