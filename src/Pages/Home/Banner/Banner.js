import React, { useEffect, useState } from 'react';
import banner from '../../../images/banner.png'
import Products from '../Products';


const Banner = () => {

  const [products,setProducts]=useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/products')
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
                  <h1 class="text-5xl font-bold">Box Office News!</h1>
                  <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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