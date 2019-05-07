import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";

function App() {
  return (
    <UnderConstruction
      background={{
        image:
          "https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg",
        textColor: "#fff",
        overlay: {
          color: "#000",
          opacity: ".5"
        }
      }}
      logo={{
        src: "https://image.ibb.co/b7guP5/Rubbby_without_text.png",
        alt: "alt text"
      }}
      title={{
        text: "Pacifica Software"
      }}
      description={{
        text:
          "Our website is under construction. We'll be here soon, follow us on Twitter to keep notified.",
        style: {
          maxWidth: "440px"
        }
      }}
      links={[
        {
          url: "https://www.twitter.com/PacificaSoftwa1",
          image: "https://image.flaticon.com/icons/svg/145/145812.svg"
        },
        {
          url: "mailto:dmlb2000@gmail.com",
          image: "https://image.flaticon.com/icons/svg/321/321817.svg"
        }
      ]}
    />
  );
}

export default App;
