import { Link } from 'wouter';

const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
      <Link to='/'>
        <h1>LATAM ON CHAIN</h1>
      </Link>
      <div className=''>
        <Link to='/cursos' className='mx-6'>CURSOS</Link>
        <Link to='/recursos' className='mx-6'>RECURSOS</Link>
        <Link to='/faqs' className='mx-6'>FAQs</Link>
      </div>
      <div>
        <Link to='/login'>INICIAR SESION</Link>
      </div>
    </div>
  );
};

export default Navbar;
