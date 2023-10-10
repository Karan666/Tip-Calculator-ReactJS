import React,{useState} from 'react';
import TotalBill from './components/TotalBill';
import MyServiceTip from './components/MyServiceTip';
import FriendServiceTip from './components/FriendServiceTip';
import FinalBill from './components/FinalBill';
import Button from './components/Button'; 

export default function App() {

  const [bill, setBill] = useState('');
  const [serviceTip, setServiceTip] = useState('dissatisfied');
  const [otherServiceTip, setOtherServiceTip] = useState('dissatisfied');

    let modifiedBill;

    if (serviceTip === 'dissatisfied') modifiedBill = 0;
    if (serviceTip === 'okay') modifiedBill = (0.05 * bill);
    if (serviceTip === 'good') modifiedBill = (0.10 * bill);
    if (serviceTip === 'amazing') modifiedBill = (0.20 * bill);

    let otherModifiedBill;

    if (otherServiceTip === 'dissatisfied') otherModifiedBill = 0;
    if (otherServiceTip === 'okay') otherModifiedBill = (0.05 * bill);
    if (otherServiceTip === 'good') otherModifiedBill = (0.10 * bill);
    if (otherServiceTip === 'amazing') otherModifiedBill = (0.20 * bill);

    let totalTip = Math.floor(modifiedBill + otherModifiedBill);

    let totalBill = Math.floor(totalTip) + bill;

    function handleReset() {

      const confirmed = window.confirm('Are you sure you want to reset all data?');
      
      if(confirmed) 
      setBill('');
      setServiceTip('dissatisfied');
      setOtherServiceTip('dissatisfied');
    }

  return (
    <div className="text-center mt-5 col-8 mx-auto shadow">
      <h1 className="text text-warning p-2 col-3 mx-auto">Tip Calculator</h1>
      <TotalBill 
        bill={bill} 
        onSetBill={(e) => setBill(parseFloat(e.target.value))} 
      />
      <br />
      <MyServiceTip 
        onServiceTip={(e) => setServiceTip(e.target.value)}
        serviceTip={serviceTip}
      />
      <br />
      <FriendServiceTip 
        onOtherServiceTip={(e) => setOtherServiceTip(e.target.value)}
        otherServiceTip={otherServiceTip}
      />
      <br />
      <FinalBill 
        bill={bill}
        totalTip={totalTip}
        totalBill={totalBill}
      />
      <br />
      <Button 
        onHandleReset={handleReset}
      /> 
    </div>
  );
}
