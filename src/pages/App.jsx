import Card from "../components/Card.jsx"
import { Container, LeftCol, RightCol } from "../styles/app.css"
import GlobalStyle from "../styles/global.css"
import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg";
import photo3 from "../assets/images/3.jpg";
import photo4 from "../assets/images/4.jpg";
import photo5 from "../assets/images/5.jpg";
import photo6 from "../assets/images/6.jpg";
import { useState } from "react";
import description  from "../utils/descriptions.jsx";
import Button from "../components/Button.jsx";

function App() {
  const [photoIndex, setPhotoIndex] = useState(1);
  const nbPhotos = 6;

  function handleScroll(e) {
    if (photoIndex >= 1 && photoIndex < nbPhotos) {
      if (e.deltaY > 0) {
        setPhotoIndex(photoIndex + 1);
      } else if (photoIndex !== 1) {
        setPhotoIndex(photoIndex - 1);
      }
    }
    else if (photoIndex === nbPhotos && e.deltaY < 0) {
      setPhotoIndex(photoIndex - 1);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container onWheel={handleScroll}>
        <LeftCol>
          <Card $photo={photo1} $index={20} 
            $faded={photoIndex <= 1 ? true : false} 
          />
          <Card $photo={photo2} $index={10} 
            $faded={photoIndex <= 2 ? true : false} 
          />
          <Card $photo={photo3} $index={0} 
            $faded={photoIndex <= 3 ? true : false} 
          />
          <Card $photo={photo4} $index={-10} 
            $faded={photoIndex <= 4 ? true : false} 
          />
          <Card $photo={photo5} $index={-20} 
            $faded={photoIndex <= 5 ? true : false} 
          />
          <Card $photo={photo6} $index={-30} 
            $faded={photoIndex <= 6 ? true : false} 
          />
        </LeftCol>
        <RightCol>
          { description(photoIndex) }
          <Button><span>En Savoir Plus ...</span></Button>
        </RightCol>
      </Container>
    </>
  )
}

export default App
