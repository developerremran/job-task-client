import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseersGet = () => {
  const { loading } = useContext(AuthContext);
  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["users"], // Include search in the queryKey
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_lOCAL_Server}/teamMember`);
      const data = await res.json();
      return data;
    },
  });

  return [users, refetch, isLoading];
};

export default UseersGet;
