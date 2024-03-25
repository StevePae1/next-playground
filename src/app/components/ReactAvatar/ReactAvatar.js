import React, { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

function ReactAvatar() {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvasScaled = editorRef.current.getImageScaledToCanvas();

      canvasScaled.toBlob((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        console.log("Cropped image URL:", imageUrl);
      });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={250}
            height={250}
            border={50}
            scale={scale}
            rotate={0}
          />
          <br />
          <input
            type="range"
            value={scale}
            min="1"
            max="2"
            step="0.01"
            onChange={handleScaleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
}

export default ReactAvatar;
