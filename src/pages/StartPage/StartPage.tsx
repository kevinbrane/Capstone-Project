import Button from "../../Components/Button/Button";
import "./StartPage.css";


export default function StartPage() {
  return (
    <div className="project-background">
      <div className="card-container">
        <img
          className="profile-photo"
          src="../src/assets/StartPage/profile-photo.png"
          alt="profile-foto"
        />
        <h1 className="name-title">Kevin Bran</h1>
        <h4>Software Engineer. Creative. Innovator</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        </p>
        <Button text="Know more" linkTo="/inner" variant="primary" />
      </div>
    </div>
  );
}
