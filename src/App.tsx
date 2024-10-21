import './App.css';
import Navigation from './Components/Navigation/Navigation.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import Projects from './Containers/Projects/Projects.tsx';
import About from './Containers/About/About.tsx';
import Contacts from './Containers/Contacts/Contacts.tsx';
import Countries from './Containers/Countries/Countries.tsx';
import Feed from './Containers/Feed/Feed.tsx';
import FastFood from './Containers/FastFood/FastFood.tsx';

const App = () => {
  return <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/countries" element={<Countries/>}/>
      <Route path="feed" element={<Feed/>}/>
      <Route path="/fastfood" element={<FastFood/>}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
  </>;
};

export default App;
