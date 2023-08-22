import Button from "../../Components/Button/Button";
import PhotoBox from "../../Components/PhotoBox/PhotoBox";
import { photoBoxData } from '../../utils/constants'; // Importa photoBoxData aquí
import "./StartPage.scss";

export default function StartPage() {
  return (
    <div className="project-background">
      <div className="card-container">
        <PhotoBox 
          avatar={photoBoxData.avatar}
          name={photoBoxData.name}
          title={photoBoxData.title}
          description={photoBoxData.description}
          size="medium"
        />
        <Button text="Know more" linkTo="/inner" variant="primary" />
      </div>
    </div>
  );
}
