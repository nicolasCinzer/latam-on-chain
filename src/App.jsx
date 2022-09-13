import { Route } from 'wouter';

import Navbar from './components/navbar/Navbar';
import Content from './components/resources/content';
import Roadmap from './components/roadmaps'

/* Pages */
import Home from './pages/Home';
import Courses from './pages/Courses';
import Resources from './pages/Resources';

function App() {
  return (
    <div className='p-0 m-0 bg-white h-full font-cascadia'>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/cursos' component={Courses} />
      <Route path='/recursos' component={Resources} />
      <Route path='/recursos/:id' component={Content} />
      <Route path='/roadmaps/:title' component={Roadmap} />
    </div>
  );
}

export default App;
