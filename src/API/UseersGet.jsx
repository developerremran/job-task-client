import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UseersGet = (search) => {
    const {loading}=useContext(AuthContext)
    const { data: users = [],refetch,isLoading } = useQuery({

        queryKey: ['users',],
        enabled:!loading,
        queryFn: async() => {
            const res = await fetch(`${import.meta.env.VITE_lOCAL_Server}/users?search=${search}`);
            const data = await res.json();
            // console.log(data);
            return data;
        }

    })
    return [users,refetch,isLoading]
};

export default UseersGet;