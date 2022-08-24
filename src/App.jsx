import { Route } from 'wouter';

import Navbar from './components/navbar/Navbar';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className='p-0 m-0 bg-gradient-to-r from-cyan-600 to-cyan-900 h-full font-jetbrains text-cyan-200'>
      <Navbar />
      <Route path='/cursos' component={Courses} />
    </div>
  );
}

export default App;
