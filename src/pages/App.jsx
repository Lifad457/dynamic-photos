import Card from "../components/Card.jsx"
import { Container, LeftCol, RightCol } from "../styles/app.css"
import {CSSTransition} from 'react-transition-group';
import GlobalStyle from "../styles/global.css"
import photo1 from "../assets/images/1.jpg";
import photo2 from "../assets/images/2.jpg";
import photo3 from "../assets/images/3.jpg";
import photo4 from "../assets/images/4.jpg";
import photo5 from "../assets/images/5.jpg";
import photo6 from "../assets/images/6.jpg";
import drapeau from "../assets/images/drapeau.jpg";

import { useEffect, useRef, useState } from "react";
import description  from "../utils/descriptions.jsx";
import Button from "../components/Button.jsx";

function App() {
  const [photoIndex, setPhotoIndex] = useState(1);
  const [inProp, setInProp] = useState(true);
  const [text, setText] = useState(description(photoIndex));
  const desc = useRef(null);
  const nbPhotos = 6;
  const photo = [photo1, photo2, photo3, photo4, photo5, photo6];

  function handleScroll(e) {
    if (photoIndex >= 1 && photoIndex < nbPhotos) {
      if (e.deltaY > 0) {
        setInProp(true);
        setPhotoIndex(photoIndex + 1);
        setText(description(photoIndex + 1));
      } else if (photoIndex !== 1) {
        setInProp(true);
        setPhotoIndex(photoIndex - 1);
        setText(description(photoIndex - 1));
      } else {
        setInProp(true);
        setPhotoIndex(nbPhotos);
        setText(description(nbPhotos));
      }
    }
    else if (photoIndex === nbPhotos && e.deltaY < 0) {
      setInProp(true);
      setPhotoIndex(photoIndex - 1);
      setText(description(photoIndex - 1));
    }
    else if (photoIndex === nbPhotos && e.deltaY > 0) {
      setInProp(true);
      setPhotoIndex(1);
      setText(description(1));
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setInProp(false);
    } , 1000);
    return () => clearTimeout(timer);
  }, [photoIndex]);

  return (
    <>
      <GlobalStyle $photo={drapeau} $photo2={photo[photoIndex - 1]} />
      <Container onWheel={handleScroll}>
        <LeftCol>
          <Card $photo={photo1} $index={15} 
            $faded={photoIndex <= 1 ? true : false} 
          />
          <Card $photo={photo2} $index={10} 
            $faded={photoIndex <= 2 ? true : false} 
          />
          <Card $photo={photo3} $index={5} 
            $faded={photoIndex <= 3 ? true : false} 
          />
          <Card $photo={photo4} $index={0} 
            $faded={photoIndex <= 4 ? true : false} 
          />
          <Card $photo={photo5} $index={-5} 
            $faded={photoIndex <= 5 ? true : false} 
          />
          <Card $photo={photo6} $index={-10} 
            $faded={photoIndex <= 6 ? true : false} 
          />
        </LeftCol>
        <RightCol>
          <CSSTransition
            nodeRef={desc}
            in={inProp}
            timeout={1000}
            classNames="fade"
          >
            <div ref={desc}>
              { text }
              <Button><span>En Savoir Plus ...</span></Button>
            </div>
          </CSSTransition>
        </RightCol>
      </Container>
    </>
  )
}

export default App
