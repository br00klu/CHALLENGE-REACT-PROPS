import './App.css';

import Description from './Components/DescriptionComponent/DescriptionComponent';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import Projects from './Components/ProjectsComponent/ProjectsComponent';
import Formx from './Components/ContactComponent/ContactComponent';
import Footer from './Components/FooterComponent/FooterComponent';
import avatar from '../src/Assets/John-Doe.jpg';
import img1 from './Assets/proj1.jpg';
import img2 from './Assets/proj2.jpg';
import img3 from './Assets/proj3.jpg';
import img4 from './Assets/proj4.jpg';

function App() {
  const title='Project ';
  const description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.';
  const link= 'github';

  const projs=[ //could be optimized if we pass title and descr and link as seperate props
    {image: img1,
    title,
    description,
    link},

    {image: img2,
    title,
    description,
    link},

    {image: img3,
    title,
    description,
    link},

    {image: img4,
    title,
    description,
    link},
]
  //console.log(projs);
  return (
    <div className="App">
      <NavBar Name='John Doe'/>
      <Description Name='John Doe' Job='make horrible websites' Avatar={avatar}/>
      <Projects Projs={projs}/>
      <Formx/>
      <Footer Name='GoMyCode' Year={2020}/>
    </div>
  );
}

export default App;
