import React from 'react';
import CheckSKU from '../Components/CheckSKU';
import InputExcel from '../Components/InPutExcel';
import Products from './Products';

function Body(props) {
    return (
        <>
            <div className='d-grid'>
                <div className=" grid-tag">
                    <div className="title-col">
                        Excel
                    </div>
                    <InputExcel />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Chọn sản phẩm
                    </div>
                    <Products />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Kiểm tra design
                    </div>
                    <CheckSKU />
                </div>
                <div className=" grid-tag">
                    <div className="title-col">
                        Hướng dẫn
                    </div>
                </div>
            </div>

        </>
    );
}

export default Body;