import { Route } from 'wouter';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Resources from './components/resources/Resources';

function App() {
  return (
    <div className='p-0 m-0 bg-white h-full font-cascadia'>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/cursos' component={Courses} />
      <Route path='/recursos' component={Resources}/>
      <Route path='/recursos/:id' component={} />
    </div>
  );
}

export default App;
