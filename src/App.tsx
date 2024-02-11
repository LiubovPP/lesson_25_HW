import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";

function App() {
  return (
    <div >
     <Button buttonName = {"Click!"}/>
     <Header headerText = {"This is a header 1"} />
     <Image url = {"./src/media/image.avif"} />
     <Student firstName="Andrew" secondName="Will" marks={[5,8,2]} />
    </div>

   
  );
}

export default App;
