 
import { Link } from 'react-router-dom';
 

const Header = () => {
    return (
        <div className=' mt-5 '>
            <div className='md:mainWidth lg:mainWidth w-[80%] mx-auto shadow-lg border p-4 flex gap-5 justify-center items-center'>
                <Link to='/' className='text-xl font-semibold'>Home</Link>
                <Link to='/team' className='text-xl font-semibold'>Team</Link>
               
            </div>
        </div>
    );
};

export default Header;