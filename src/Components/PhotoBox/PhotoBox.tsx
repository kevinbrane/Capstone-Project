import React from "react";
import { photoBoxData } from "../../utils/constants";
import "./PhotoBox.scss";

interface PhotoBoxProps {
  avatar?: string;
  name?: string;
  title?: string;
  description?: string;
  simple?: boolean;
  size?: "small" | "medium" | "large";
}

const PhotoBox: React.FC<PhotoBoxProps> = (props) => {
  const {
    avatar = photoBoxData.avatar,
    name = photoBoxData.name,
    title = photoBoxData.title,
    description = photoBoxData.description,
    simple = false,
    size = "medium",
  } = props;

  return (
    <div className={`photo-box photo-box-${size}`}>
      <img className="photo-box-avatar" src={avatar} alt={`${name}'s Avatar`} />
      <h4 className="photo-box-name">{name}</h4>
      {!simple && title && <h4 className="photo-box-title">{title}</h4>}
      {!simple && description && (
        <p className="photo-box-description">{description}</p>
      )}
    </div>
  );
};

export default PhotoBox;
