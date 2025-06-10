import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css";

const initialImages = [
  { src: "https://images.unsplash.com/photo-1745750747234-5df61f67a7bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", caption: "Image1" },
  { src: "https://plus.unsplash.com/premium_photo-1730065016929-6665e81e07a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", caption: "Image2" },
  { src: "https://plus.unsplash.com/premium_photo-1690481525616-454bacd58537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", caption: "Image3" }
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const id = Math.floor(Math.random() * 1000);
    setImages([...images, {
      src: `https://picsum.photos/400/300?random=${id}`,
      caption: `Image ${images.length + 1}`
    }]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>
      <button className="add-btn" onClick={addImage}>Add Image</button>
      <div className="gallery">
        {images.map((img, i) => (
          <BasicFigure key={i} {...img} onRemove={() => removeImage(i)} />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
