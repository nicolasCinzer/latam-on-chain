import { Link } from 'wouter';

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-white shadow'>
      <Link to='/' className=''>
        LATAM ON CHAIN
      </Link>
      <div className=''>
        <Link to='/cursos' className='mx-6 hover:text-emerald-700'>
          CURSOS
        </Link>
        <Link to='/recursos' className='mx-6 hover:text-emerald-700'>
          RECURSOS
        </Link>
        <Link to='/faqs' className='mx-6 hover:text-emerald-700'>
          FAQs
        </Link>
      </div>
      <div>
        <Link to='/login' className='mx-6 hover:text-emerald-700'>
          INICIAR SESION
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
