import { Route } from 'wouter';

import Navbar from './components/navbar/Navbar';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className='p-0 m-0 bg-ocean-200 h-full'>
      <Navbar />
      <Route path='/cursos' component={Courses} />
    </div>
  );
}

export default App;
