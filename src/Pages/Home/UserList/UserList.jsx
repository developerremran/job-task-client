
import React, { useEffect, useRef, useState } from 'react';
import UserCard from './UserCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Loader from '../../../ShearSection/Loader/Loader';

const UserList = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ domain: '', gender: '', availability: '' });
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const searchInput = useRef(null);

  const itemsPerPage = 21;



  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_lOCAL_Server}/users?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      });
  }, [search]);

  useEffect(() => {
  
    const { domain, gender, availability } = filters;

    const filterParams = new URLSearchParams({ domain, gender, availability }).toString();

    fetch(`${import.meta.env.VITE_lOCAL_Server}/users?${filterParams}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
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


  if (isLoading) {
    return <div>
      <Loader></Loader>
    </div>
  }

  return (
    <div className='mainWidth overflow-hidden'>
      <div className='py-10 flex gap-5 justify-start md:justify-center lg:justify-end '>
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

      <div className='py-10   gap-5 md:flex lg:flex'>
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

      <div className='grid grid-cols-1  gap-3 md:grid-cols-1  lg:grid-cols-3'>
        {currentData.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>

      <div className='lg:overflow-x-auto md:overflow-x-auto overflow-hidden w-[500px] md:w-full lg:w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
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

