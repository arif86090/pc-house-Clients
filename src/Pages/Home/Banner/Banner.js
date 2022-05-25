import React, { useEffect, useState } from 'react';
import banner from '../../../images/banner.png'
import Products from '../Products';


const Banner = () => {

  const [products,setProducts]=useState([]);

  useEffect(() => {
      fetch('https://pacific-ocean-13112.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

    return (
       <div>
          <div>
            <div class="hero min-h-screen bg-primary">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg  w-full"/>
                <div>
                  <h1 class="text-2xl font-bold">Leading Computer, Laptop & Gaming PC Retail & Online Company in Bangladesh</h1>
                  <p class="py-6">Technology has become a part of our daily lives and for a huge portion of our life, we are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product. This is where we come in. Star Tech & Engineering Ltd had started as a Tech product shop way back in March 2007</p>
                  <button class="btn btn-slate-800 uppercase text-white font-bold mt-5 ">Get Started</button>
                </div>
              </div>
            </div>
        </div>

        <div className='mt-10 mb-10'>
          <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            products.map(product => <Products
                            key={product._id}
                            product={product}
                            ></Products>)
                        }
           </div>
          </div>
        </div>

       </div>
    );
};

export default Banner;