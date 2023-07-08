 

const UserDelete = (email) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/teamMember/${email}`,{
       method:'DELETE',
    })
    .then(res=> res.json())
};

export default UserDelete;