import "./App.css";

const myName = "Semen";
const favoriteSite = {
  siteName: "GoITeens",
  url: "https://edu.goiteens.com/uk/learn/17138817/17306528/17306531/homework",
};
const firstNum = 5;
const secondNum = 10;
const colorsArr = ["green", "blue", "black", "white", "purple"];

function App() {
  return (
    <>
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
        src="https://images.pexels.com/photos/19402438/pexels-photo-19402438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Aesthetic-photo"
        width="600"
        height="600"
      />
      <a href={favoriteSite.url}>{favoriteSite.siteName}</a>
      <p>
        Result: <span>{firstNum + secondNum}</span>
      </p>
      <ul>
        {colorsArr.map((color) => (
          <li>
            <p>{color}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
