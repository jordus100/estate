import './App.css';
const images = require.context('./static', true);
const imageList = images.keys().map(image => images(image));

function App() {
    return (
        <div className="App">
            <h1 className="display-3 text-center my-4">Mieszkanie na Bysławskiej 12</h1>
            <h3 className="text-center mb-4">Przestronne, dwupoziomowe mieszkanie 127 m<sup>2</sup>, w stanie deweloperskim, zlokalizowane w nowej, kameralnej inwestycji.<br></br></h3>
            <p className="mx-5">
                Wygodny i nieodległy dojazd do Miasteczka Wilanów przez trasę mostu Południowego.
                Dogodna bliskość przystanków komunikacji miejskiej i podstawowej infrastruktury.
            </p>
            <p className="mx-5">
                Osiedle ogrodzone i monitorowane, z troską zarządzane przez Wspólnotę Mieszkaniową.
            </p>
            <p className="mx-5">
                Układ mieszkania obejmuje 2 poziomy:<br/>
                I - pokój z kominkiem i wyjściem na balkon; osobny gabinet, kuchnia z wyjściem na loggię, jadalnia, garderoba, schowek, WC,<br/>
                II - 3 sypialnie, w tym jedna z wyjściem na balkon, dwie pełne łazienki (jedna z oknem)<br/>
                Wejście do mieszkania jest z indywidualnej klatki schodowej.<br/>
            </p>
            <p className="mx-5">
                Duże, panoramiczne, trzyszybowe przeszklenia. Urocze widoki na zabudowę jednorodzinną i tereny zielone.
                Wystawa okien na południe i północ.
            </p>
            <p className="mx-5">
            Do wyłącznego korzystania przez przyszłego właściciela należy przedogródek ok. 36 m<sup>2</sup> oraz 2 wydzielone miejsca postojowe na parkingu zewnętrznym (w cenie).
            </p>
            <p className="mx-5 text-center">
                Pełna własność, KW bez obciążeń.<br/>
                Cena: 1 490 000 zł<br/>
                Oferta bezpośrednia.<br/>
                Tel.: 501 062 472 Teresa
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
