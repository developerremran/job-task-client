import UseersGet from "../../API/UseersGet";
import TeamCard from "./TeamCard";

const Team = () => {
  const [users, refetch, isLoading] = UseersGet();
  console.log(users);

  return (
    <div className="my-10">
      <div className="mainWidth">
        <div className="max-w-full h-[100px] shadow-2xl border flex justify-center items-center text-3xl font-semibold my-16">
          <h2>Here Is My Team Members</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <TeamCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

