import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='p-5 mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className='shadow-2xl p-4'>
                    <h2 className='font-bold text-1xl mb-6'>How will you improve the performance of a React Application?</h2>
                    <p className=''>When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.</p>
                </div>
                <div className='shadow-2xl p-4'>
                    <h2 className='font-bold text-1xl mb-6'>What are the different ways to manage a state in a React application?</h2>
                    <p className=''>Local state,Global state,Server state,URL state A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                </div>
                <div className='shadow-2xl p-4'>
                    <h2 className='font-bold text-1xl mb-6'>How does prototypical inheritance work?</h2>
                    <p className=''>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
                </div>
                <div className='shadow-2xl p-4'>
                    <h2 className='font-bold text-1xl mb-6'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className=''>We map the product and get this product id and .and fatch this id .when we fatch the id we get every details o this prooduct .and show any where product details.</p>
                </div>
                <div className='shadow-2xl p-4'>
                    <h2 className='font-bold text-1xl mb-6'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className=''>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;