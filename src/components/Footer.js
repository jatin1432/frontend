import React from "react";

const Footer = () =>{

    return(
        <div className=" flex h-[270px] w-[100%] bg-primary justify-between pt-[100px] pb-[100px] mx-[-4px] p-6">
            <div className="flex gap-[10px]">
                 <img className="w-[60px] h-[60px]" src="..\trophy 1.png"></img>
                 <div>
                    <h3 className="text-2xl font-semibold leading-7">High Quality</h3>
                    <h4 className="text-xl text-gray-500 leading-8">crafted from top materials</h4>
                 </div>
            </div>
            <div className="flex gap-[10px]">
                 <img className="w-[60px] h-[60px]" src="..\guarantee.png"></img>
                 <div>
                    <h3 className="text-2xl font-semibold leading-7">Warranty Protection</h3>
                    <h4 className="text-xl text-gray-500 leading-8">over 2 years</h4>
                 </div>
            </div>
            <div className="flex gap-[10px]">
                 <img className="w-[60px] h-[60px]" src="..\shipping.png"></img>
                 <div>
                    <h3 className="text-2xl font-semibold leading-7">Free Shipping</h3>
                    <h4 className="text-xl text-gray-500 leading-8">Order over 150$</h4>
                 </div>
            </div>
            <div className="flex gap-[10px]">
                 <img className="w-[60px] h-[60px]" src="..\customer-support.png"></img>
                 <div>
                    <h3 className="text-2xl font-semibold leading-7">27/7 support</h3>
                    <h4 className="text-xl text-gray-500 leading-8">Dedicated support</h4>
                 </div>
            </div>
        </div>
    )
}
export default Footer;