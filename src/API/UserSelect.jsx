/* eslint-disable no-unused-vars */


const UserSelect = (user) => {
    const { first_name, last_name, email, gender, avatar, domain, available}=user;
    const userInfo={ first_name, last_name, email, gender, avatar, domain, available}
    
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/teamMember?email=${user.email}`,{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(userInfo)
    }).then(res => res.json())
};

export default UserSelect;