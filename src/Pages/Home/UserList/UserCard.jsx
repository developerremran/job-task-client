/* eslint-disable react/prop-types */
 

const UserCard = ({ user }) => {


    const { first_name, last_name, email, gender, avatar, domain, available } = user;
    // console.log(user);
    if (!user) {
        return <div className='w-full h-screen flex items-center justify-center '>Loading...</div>;
      }

    return (
        <div className='mainWidth '>
            <div className='py-10'>
                <div className='flex p-2  gap-[50px] items-center w-[450px] h-[250px] shadow-lg'>
                    <div>
                        <img className='w-[100px]  h-[100px] rounded-full ' src={avatar} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl italic '>Name: <span className="font-semibold" >{first_name +' '+last_name}</span> </h2>

                        <h2 className='text-xl italic '>Gender: <span className="font-semibold" >{gender}</span></h2>
                        <h2 className='text-xl italic '>Email: <span className="font-semibold" >{email}</span></h2>
                        <h2 className='text-xl italic '>Domain: <span className="font-semibold" >{domain} </span></h2>
                        {/* <h2 className='text-xl italic'>Available: <span className="font-semibold" >{available} </span></h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;