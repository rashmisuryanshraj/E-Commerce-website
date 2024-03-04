import React from 'react';
import Img1 from '../assets/imgs/first.png'
import Img2 from '../assets/imgs/second.jpg'
import Img3 from '../assets/imgs/three.jpg'
import Img4 from '../assets/imgs/four.jpg'
import { FaStar } from "react-icons/fa6";
function Product() {
    const RamData = [
        {
          id: 1,
          img: Img1,
          title: "Women Ethnic",
          rating: 5.0,
          color: "white",
          Aosdelay: "0",
        },
        {
          id: 2,
          img: Img2,
          title: "Women western",
          rating: 4.5,
          color: "Red",
          Aosdelay: "200",
        },
        {
          id: 3,
          img: Img3,
          title: "Goggles",
          rating: 4.7,
          color: "brown",
          Aosdelay: "400",
        },
        {
          id: 4,
          img: Img4,
          title: "Printed T-Shirt",
          rating: 4.4,
          color: "Yellow",
          Aosdelay: "600",
        },
        {
          id: 5,
          img: Img2,
          title: "Fashin T-Shirt",
          rating: 4.5,
          color: "Pink",
          Aosdelay: "800",
        },
      ];

  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px]
            mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top selling Product for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet  elit.
                     Aut expedita, incidunt exercitationem doloribus 
                     placeat 
                </p>
            </div>
            {/* body section */}
            <div>
                <div 
                className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'>
                    {/* card section */}
                    {
                       RamData.map((data)=>(
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.Aosdelay} 
                        key={data.id}
                        className='space-y-3'
                        >
                          <img src={data.img} alt="" 
                          className='h-[220px] w-[150px] object-cover
                          rounded-md '
                          />
                          <div>
                            <h3 className='font-semibold'>{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                              <FaStar className='text-yellow-400' />
                              <span>{data.rating}</span>/
                            </div>
                          </div>
                        </div>  
                       ))
                    }

                </div>
            </div>
        </div>
    </div>
  )
}   

export default Product