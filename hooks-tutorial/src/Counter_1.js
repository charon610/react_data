import React, {useState} from 'react';
//clast Counter extend React   ->  클래스형(과거)
const Counter_1 = () => {
    const [value, setValue] = useState(0);
    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter_1;