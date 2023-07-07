
/* eslint-disable no-unused-vars */
import React from 'react';

const TeamCard = ({ user }) => {
    const { first_name, last_name, email, gender, avatar, domain, available } = user;
    return (
        <div className='shadow-lg m-2'>
             <div className="  p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <img src={avatar} alt="content" />
                    
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> 
                    Name: {first_name +' '+ last_name}</h2>

                    <p className="leading-relaxed text-base">
                   Gender {gender}
                    </p>
                    <p className="leading-relaxed text-base">
                    Email {email}
                    </p>
                    <p className="leading-relaxed text-base">
                    Domain:  {domain}
                    </p>
                    <p className="leading-relaxed text-base">
                    {available}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;