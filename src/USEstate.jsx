import { useState} from 'react';
function USEstate()
{
    const [a, setA] = useState(0);
    const set=() => setA(a+1);    
        console.log(a);
    
    return(<>
    <button onClick={set}>Increase A</button>

    
    <p>{a}</p></>)
}
export default USEstate;