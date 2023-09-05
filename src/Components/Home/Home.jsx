import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This is our Home World !</h1>
            <div>
                {
                    users.map(user=> <p className='text-warning text-2xl m-3' key={user._id}> <div className="avatar">
                    <div className="  w-10 m-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                        Name: {user.name} ++ Email: {user.email} <button className="btn btn-outline btn-error btn-circle">X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;