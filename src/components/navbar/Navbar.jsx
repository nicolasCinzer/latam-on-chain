import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [path] = useLocation();

  return (
    <div className='flex justify-between p-4 bg-white shadow'>
      <Link
        to='/'
        className={`transition-all duration-300 ${
          path === '/'
            ? 'pl-1 border-b-2 border-l-2 border-emerald-400 shadow-md'
            : 'hover:text-emerald-700'
        }`}
      >
        LATAM ON CHAIN
      </Link>
      <div>
        <Link
          to='/cursos'
          className={`mx-6 transition-all duration-300 ${
            path === '/cursos'
              ? 'px-2 py-1 bg-emerald-400/60 rounded-3xl '
              : 'hover:text-emerald-700'
          } `}
        >
          CURSOS
        </Link>
        <Link
          to='/recursos'
          className={`mx-6 transition-all duration-300 ${
            path === '/recursos'
              ? 'px-2 py-1 bg-emerald-400/60 rounded-3xl '
              : 'hover:text-emerald-700'
          } `}
        >
          RECURSOS
        </Link>
        <Link
          to='/faqs'
          className={`mx-6 transition-all duration-300 ${
            path === '/faqs'
              ? 'px-2 py-1 bg-emerald-400/60 rounded-3xl '
              : 'hover:text-emerald-700'
          } `}
        >
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
