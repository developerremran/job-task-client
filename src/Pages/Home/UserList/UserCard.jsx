/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import UserSelect from "../../../API/UserSelect";
import { toast } from "react-hot-toast";

const UserCard = ({ user }) => {
  const [show, setShow] = useState(true);
  const userId = user._id;

  useEffect(() => {
    const selectedUsers = localStorage.getItem("selectedUsers");
    const selectedUserIds = selectedUsers ? JSON.parse(selectedUsers) : [];
    setShow(!selectedUserIds.includes(userId));
  }, [userId]);

  const teamAddMember = () => {
    const selectedUsers = localStorage.getItem("selectedUsers");
    let selectedUserIds = selectedUsers ? JSON.parse(selectedUsers) : [];

    if (!selectedUserIds.includes(userId)) {
      UserSelect(user)
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            selectedUserIds.push(userId);
            localStorage.setItem("selectedUsers", JSON.stringify(selectedUserIds));
            setShow(false);
            toast.success("Successfully added Team Member");
          }
        })
        .catch((error) => {
          console.log(error);
          setShow(false);
          toast.error("Error adding Team Member");
        });
    } else {
      toast.error("User already added as Team Member");
    }
  };

  const { first_name, last_name, email, gender, avatar, domain, available } = user;

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        Loading...
      </div>
    );
  }

  const availabilityText = available ? "Free" : "Busy";

  return (
    <div className="mainWidth">
      <div className="py-10 relative">
        <div>
          {show ? (
            <h2
              onClick={teamAddMember}
              className="text-3xl absolute top-0 btn cursor-pointer"
            >
              ✅
            </h2>
          ) : null}
        </div>
        <div className="flex p-2 gap-[50px] items-center w-[450px] h-[250px] shadow-lg">
          <div>
            <img
              className="w-[100px]  h-[100px] rounded-full"
              src={avatar}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl italic">
              Name:{" "}
              <span className="font-semibold">
                {first_name + " " + last_name}
              </span>{" "}
            </h2>

            <h2 className="text-xl italic">
              Gender: <span className="font-semibold">{gender}</span>
            </h2>
            <h2 className="text-xl italic">
              Email: <span className="font-semibold">{email}</span>
            </h2>

            <h2 className="text-xl italic">
              Domain: <span className="font-semibold">{domain}</span>{" "}
            </h2>

            <h2 className="text-xl italic">
              Available:{" "}
              <span className="font-semibold">{availabilityText}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;



/* eslint-disable react/prop-types */

// import { useState, useEffect } from "react";
// import UserSelect from "../../../API/UserSelect";
// import { toast } from "react-hot-toast";

// const UserCard = ({ user }) => {
//   const [show, setShow] = useState(true);
//   const userId = user._id;

//   useEffect(() => {
//     const selectedUserId = localStorage.getItem("selectedUserId");
//     setShow(selectedUserId !== userId);
//   }, [userId]);

//   const teamAddMember = () => {
//     UserSelect(user)
//     .then((data) => {
//       console.log(data);
//       if (data.insertedId) {
//         localStorage.setItem("selectedUserId", userId);
//         setShow(false);
//         toast.success("Successfully added Team Member");
//       }
//     });
//   };

//   const { first_name, last_name, email, gender, avatar, domain, available } = user;

//   if (!user) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center ">
//         Loading...
//       </div>
//     );
//   }

//   const availabilityText = available ? "Free" : "Busy";

//   return (
//     <div className="mainWidth ">
//       <div className="py-10 relative ">
//         <div>
//           {show ? (
//             <h2
//               onClick={teamAddMember}
//               className="text-3xl absolute top-0 btn cursor-pointer"
//             >
//               {" "}
//               ✅
//             </h2>
//           ) : null}
//         </div>
//         <div className="flex p-2  gap-[50px] items-center w-[450px] h-[250px] shadow-lg">
//           <div>
//             <img
//               className="w-[100px]  h-[100px] rounded-full "
//               src={avatar}
//               alt=""
//             />
//           </div>
//           <div>
//             <h2 className="text-xl italic ">
//               Name:{" "}
//               <span className="font-semibold">
//                 {first_name + " " + last_name}
//               </span>{" "}
//             </h2>

//             <h2 className="text-xl italic ">
//               Gender: <span className="font-semibold">{gender}</span>
//             </h2>
//             <h2 className="text-xl italic ">
//               Email: <span className="font-semibold">{email}</span>
//             </h2>

//             <h2 className="text-xl italic ">
//               Domain: <span className="font-semibold">{domain} </span>
//             </h2>

//             <h2 className="text-xl italic">
//               Available:{" "}
//               <span className="font-semibold">{availabilityText} </span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

