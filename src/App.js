import './App.css';
const images = require.context('./static', true);
const imageList = images.keys().map(image => images(image));

function App() {
  return (
    <div className="App">
      <h1 className="display-3 text-center my-4">Dom na sprzedaż w Wawrze</h1>
      <p className="mx-5 text-center">Oferujemy nowy dom na sprzedaż w stanie deweloperskim.
        Jest to nowa inwestycja zlokalizowana w nowym osiedlu Wiślany Klif w Wawrze.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        <br></br><br></br>Oferuje ona następujące udogodnienia:<br></br>
        <ul className="text-center">
          <li>piękny widok na iglaki</li>
          <li>czyste powietrze</li>
          <li>dużo przestrzeni dla dzieci</li>
          <li>dużo schodów (fit)</li>
        </ul>
        <br></br>
        Kontakt: 501 062 xxx Teresa
      </p>
      <div className="mt-5">
        { imageList.map(image => (
            <>
            <img src={image}  alt="" className="mx-auto d-block"/>
            <br></br>
            </>
        ))}
      </div>
    </div>
  );
}

export default App;
