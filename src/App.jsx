import { Route } from 'wouter';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className='p-0 m-0 bg-white h-full font-cascadia'>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/cursos' component={Courses} />
    </div>
  );
}

export default App;
