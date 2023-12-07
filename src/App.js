import './App.css';
const images = require.context('./static', true);
const imageList = images.keys().map(image => images(image));

function App() {
    return (
        <div className="App">
            <h1 className="display-3 text-center my-4">Mieszkanie do wykończenia na Bysławskiej 12</h1>
            <p className="mx-5">
                Przestronne, dwupoziomowe mieszkanie zlokalizowane w kameralnej inwestycji wśród zieleni.<br></br>
                Wygodny i nieodległy dojazd do Miasteczka przez trasę mostu Południowego.<br></br>
                Dodatkowo, dogodna bliskość przystangów komunikacji miejskiej.<br></br>
                Osiedle ogrodzone i monitorowane, z troską zarządzane przez Wspólnotę Mieszkaniową.
                Do wyłącznego korzystania przez przyszłego właściciela należy przedogródek ok. 36 m<sup>2</sup> oraz 2 wydzielone miejsca postojowe na parkingu zewnętrznym (w cenie).<br></br>
                Wystawa północno-południowa.
            </p>
            <p className="mx-5">
                Układ mieszkania obejmuje 3 poziomy:<br/>
                0 - wewnętrzne schody wejściowe na I p., wnęka na garderobę.<br/>
                I - pokój z kominkiem i wyjściem na balkon; osobny gabinet, kuchnia z wyjściem na loggię, jadalnia, garderoba, schowek, WC,<br/>
                II - 3 sypialnie, w tym jedna z wyjściem na balkon, dwie pełne łazienki (w tym jedna z oknem), pełna wysokość skosu w najmniejszym pokoju.<br/>
                Duże, panoramiczne, trzyszybowe przeszklania.
            </p>
            <p className="mx-5 text-center">
                Pełna własność, KW bez obciążeń.<br/>
                Cena: 11,5 tys./m<sup>2</sup><br/>
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
