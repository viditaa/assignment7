import { Link, Route, Routes } from 'react-router-dom';
import Design from './Design';
import Development from './Development';

const Services = () => {
  return (
    <div>
      <h2>Our Services at Innomatics Research Labs</h2>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>
      <Routes>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
};

export default Services;