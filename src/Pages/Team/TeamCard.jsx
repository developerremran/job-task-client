
/* eslint-disable no-unused-vars */
import React from 'react';
import UserDelete from '../../API/UserDelete';
import UseersGet from '../../API/UseersGet';
import Swal from 'sweetalert2';


const TeamCard = ({ user }) => {
    const [users, refetch, isLoading] = UseersGet()
    const { first_name, last_name, email, gender, avatar, domain, available, _id } = user;

    const deleteHandler = (email) => {
        // console.log(_id);
        Swal.fire({
            title: 'Do you want Delete your Team Member?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                UserDelete(email)
                    .then(data => {
                        Swal.fire(' Deleted success!', '', 'success')
                        console.log(data)
                        refetch()
                        const selectedUsers = JSON.parse(localStorage.getItem('selectedUsers'));
                        const updatedSelectedUsers = selectedUsers.filter((userId) => userId !== email);
                        localStorage.setItem('selectedUsers', JSON.stringify(updatedSelectedUsers));

                    })
            } else if (result.isDenied) {
                Swal.fire('User not Delete', '', 'info')
                console.log('cancel');
            }
        })

    }
    return (
        <div className='shadow-lg m-2 relative'>

            <div className="  p-4">
                <div><h2 onClick={() => deleteHandler(email)} className="text-2xl absolute top-0 btn right-0 cursor-pointer">
                    ❌
                </h2></div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <img src={avatar} alt="content" />

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        Name: {first_name + ' ' + last_name}</h2>

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