import React from 'react';
import CheckSKU from './CheckSKU';
import Excel from './Excel';
import Products from './Products';

function Body(props) {
    return (
        <>
            <div className='d-grid'>
                <div className=" grid-tag">
                    <div className="title-col">
                        Excel
                    </div>
                    <Excel />
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