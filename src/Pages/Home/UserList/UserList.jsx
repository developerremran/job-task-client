
// import React, { useEffect, useRef, useState } from 'react';
// // import UseersGet from '../../../API/UseersGet';
// import UserCard from './UserCard';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

// const UserList = () => {
//   const [search, setSearch] = useState('');
//   const [search1, setSearch1] = useState('');
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_lOCAL_Server}/users?search=${search}`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data)
//         setUsers(data)
//       })
//   }, [search]);

//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 21;
//   const searchInput = useRef(null);

//   const searchInput1 = useRef(null);
//   const searchInput2 = useRef(null);
//   const searchInput3 = useRef(null);


//   const totalPages = Math.ceil(users.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = users.slice(startIndex, endIndex);
//   // const filteredData = users.slice(startIndex, endIndex);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   const handleSearch = () => {
//     setSearch(searchInput.current.value);
//   };
//   const handleMultiSearch = () => {
//     const domain = searchInput1.current.value;
//     const gender = searchInput2.current.value;
//     const availability = searchInput3.current.value;

//     // console.log(object);
//     setSearch1({ domain, gender, availability });
//   };

//   // Filter the data based on the search criteria
//   const filteredData = users.filter((user) => {
//     const { domain, gender, availability } = search1;

//     // Perform the filtering based on the search criteria
//     // Return true if the user matches all the criteria, or if no criteria is provided
//     return (
//       (!domain || user.domain.toLowerCase().includes(domain.toLowerCase())) &&
//       (!gender || user.gender.toLowerCase().includes(gender.toLowerCase())) &&
//       (!availability || user.availability.toLowerCase().includes(availability.toLowerCase()))
//     );
//   });

//   return (
//     <div className='mainWidth overflow-hidden'>

//       <div className='py-10 flex gap-5 justify-end'>

//         <input placeholder='Search Now' ref={searchInput} type="text" className='border p-2' />
//         <button onClick={handleSearch} className='btn bg-yellow-700 p-2 text-white rounded-md'>Submit</button>
//       </div>

//       <div className='py-10 flex gap-5'>

//         <div className='flex gap-5'>
//           <input placeholder='Chose your Domain' ref={searchInput1} type="text" className='border-2 p-2' />
//           <input placeholder='Chose your Gender' ref={searchInput2} type="text" className='border-2 p-2' />
//           <input placeholder='Chose your Available' ref={searchInput3} type="text" className='border-2 p-2' />
//         </div>
//         <button onClick={handleMultiSearch} className='btn bg-yellow-700 p-2 text-white rounded-md'>Submit</button>
//       </div>

//       {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//         {currentData.map((user) => (
//           <UserCard key={user._id} user={user}></UserCard>
//         ))}
//       </div> */}

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//         {filteredData.map((user) => (
//           <UserCard key={user._id} user={user}></UserCard>
//         ))}
//       </div>

//       <div className='overflow-x-auto flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
//         <div className='flex flex-1 justify-between sm:hidden'>
//           <a
//             href='#'
//             className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
//           >
//             Previous
//           </a>
//           <a
//             href='#'
//             className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
//           >
//             Next
//           </a>
//         </div>
//         <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
//           <div>
//             <p className='text-sm text-gray-700'>
//               <span className='font-medium'>{startIndex + 1}</span> to{' '}
//               <span className='font-medium'>{Math.min(endIndex, users.length)}</span> of{' '}
//               <span className='font-medium'>{users.length}</span>
//             </p>
//           </div>
//           <div>
//             <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
//               <a
//                 href='#'
//                 className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
//               >
//                 <span className='sr-only'>Previous</span>
//                 <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
//               </a>
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <a
//                   key={index + 1}
//                   href='#'
//                   className={`relative inline-flex items-center ${currentPage === index + 1
//                     ? 'bg-indigo-600 text-white focus:outline-offset-0'
//                     : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
//                     } px-4 py-2 text-sm font-semibold`}
//                   onClick={() => handlePageChange(index + 1)}
//                 >
//                   {index + 1}
//                 </a>
//               ))}
//               <a
//                 href='#'
//                 className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
//               >
//                 <span className='sr-only'>Next</span>
//                 <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;




import React, { useEffect, useRef, useState } from 'react';
import UserCard from './UserCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const UserList = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ domain: '', gender: '', availability: '' });
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const searchInput = useRef(null);

  const itemsPerPage = 21;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_lOCAL_Server}/users?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      });
  }, [search]);

  useEffect(() => {
    const { domain, gender, availability } = filters;

    const filterParams = new URLSearchParams({ domain, gender, availability }).toString();

    fetch(`${import.meta.env.VITE_lOCAL_Server}/users?${filterParams}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      });
  }, [filters]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = users.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className='mainWidth overflow-hidden'>
      <div className='py-10 flex gap-5 justify-end'>
        <input
          placeholder='Search Now'
          ref={searchInput}
          type='text'
          className='border p-2'
        />
        <button
          onClick={handleSearch}
          className='btn bg-yellow-700 p-2 text-white rounded-md'
        >
          Submit
        </button>
      </div>

      <div className='py-10 flex gap-5'>
        <input
          placeholder='Choose your Domain'
          name='domain'
          value={filters.domain}
          onChange={handleFilterChange}
          type='text'
          className='border-2 p-2'
        />
        <input
          placeholder='Choose your Gender'
          name='gender'
          value={filters.gender}
          onChange={handleFilterChange}
          type='text'
          className='border-2 p-2'
        />
        <select
          name='availability'
          value={filters.availability}
          onChange={handleFilterChange}
          className='border-2 p-2'
        >
          <option value=''>Choose your Availability</option>
          <option value='true'>Free</option>
          <option value='false'>Busy</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {currentData.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>

      <div className='overflow-x-auto flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
        <div className='flex flex-1 justify-between sm:hidden'>
          <a
            href='#'
            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Previous
          </a>
          <a
            href='#'
            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              <span className='font-medium'>{startIndex + 1}</span> to{' '}
              <span className='font-medium'>{Math.min(endIndex, users.length)}</span> of{' '}
              <span className='font-medium'>{users.length}</span>
            </p>
          </div>
          <div>
            <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
              <a
                href='#'
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </a>
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  key={index + 1}
                  href='#'
                  className={`relative inline-flex items-center ${currentPage === index + 1
                    ? 'bg-indigo-600 text-white focus:outline-offset-0'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                    } px-4 py-2 text-sm font-semibold`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              ))}
              <a
                href='#'
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;