import '../App.css';
import {Link} from "react-router-dom";
import React from "react";
import Timer from "./Timer";

const syllabes = ["ba", "be", "bé", "bè", "bi", "bo", "bu", "ban", "bin", "boi", "bon", "bou",
    "ca", "ci", "co", "cu", "can", "coi", "con", "cou",
    "da", "de", "dé", "dè", "di", "do", "du", "dan", "din", "doi", "don", "dou",
    "fa", "fe", "fé", "fè", "fi", "fo", "fu", "fan", "fin", "foi", "fon", "fou",
    "ga", "gi", "go", "gu", "gan", "goi", "gon", "gou",
    "ja", "je", "jé", "jè", "ji", "jo", "ju", "jan", "jin", "joi", "jon", "jou",
    "la", "le", "lé", "lè", "li", "lo", "lu", "lan", "lin", "loi", "lon", "lou",
    "ma", "me", "mé", "mè", "mi", "mo", "mu", "man", "min", "moi", "mon", "mou",
    "na", "ne", "né", "nè", "ni", "no", "nu", "nan", "nin", "noi", "non", "nou",
    "pa", "pe", "pé", "pè", "pi", "po", "pu", "pan", "pin", "poi", "pon", "pou",
    "ra", "re", "ré", "rè", "ri", "ro", "ru", "ran", "rin", "roi", "ron", "rou",
    "sa", "se", "sé", "sè", "si", "so", "su", "san", "sin", "soi", "son", "sou",
    "ta", "te", "té", "tè", "ti", "to", "tu", "tan", "tin", "toi", "ton", "tou",
    "va", "ve", "vé", "vè", "vi", "vo", "vu", "van", "vin", "voi", "von", "vou",
    "za", "ze", "zé", "zè", "zi", "zo", "zu", "zan", "zin", "zoi", "zon", "zou",
    "bra", "bre", "bré", "brè", "bri", "bro", "bru", "bran", "brin", "broi", "bron", "brou",
    "cra", "cre", "cré", "crè", "cri", "cro", "cru", "cran", "crin", "croi", "cron", "crou",
    "dra", "dre", "dré", "drè", "dri", "dro", "dru", "dran", "drin", "droi", "dron", "drou",
    "fra", "fre", "fré", "frè", "fri", "fro", "fru", "fran", "frin", "froi", "fron", "frou",
    "gra", "gre", "gré", "grè", "gri", "gro", "gru", "gran", "grin", "groi", "gron", "grou",
    "pra", "pre", "pré", "prè", "pri", "pro", "pru", "pran", "prin", "proi", "pron", "prou",
    "tra", "tre", "tré", "trè", "tri", "tro", "tru", "tran", "trin", "troi", "tron", "trou",
    "vra", "vre", "vré", "vrè", "vri", "vro", "vru", "vran", "vrin", "vroi", "vron", "vrou",
    "bla", "ble", "blé", "blè", "bli", "blo", "blu", "blan", "blin", "bloi", "blon", "blou",
    "cla", "cle", "clé", "clè", "cli", "clo", "clu", "clan", "clin", "cloi", "clon", "clou",
    "fla", "fle", "flé", "flè", "fli", "flo", "flu", "flan", "flin", "floi", "flon", "flou",
    "gla", "gle", "glé", "glè", "gli", "glo", "glu", "glan", "glin", "gloi", "glon", "glou",
    "pla", "ple", "plé", "plè", "pli", "plo", "plu", "plan", "plin", "ploi", "plon", "plou",
    "cha", "che", "ché", "chè", "chi", "cho", "chu", "chan", "chin", "choi", "chon", "chou"];

class Jeu extends React.Component {

    constructor(props) {
        super(props);
        this.availableSyllabes = [...syllabes];
        this.state = {
            syllabe: this.readSyllabe(),
            score: 0,
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <button onClick={this.refreshPage} className="Newgame-button">
                        Nouvelle Partie
                    </button>
                    <Link to="/">
                        <button className="Red-button">
                            Fin de la partie
                        </button>
                    </Link>
                </div>
                <div className="App-body">
                    <h1 className="Syllabe-h1">{this.state.syllabe}</h1>
                    <span>
                        <button onClick={this.updateWord} className="Red-button">Mauvaise réponse !</button>
                        <button onClick={this.upScore} className="Good-button">Bonne réponse !</button>
                    </span>
                    <p className="Score-p">Score : {this.state.score}</p>
                    <Timer />
                </div>
            </div>
        );
    }

    refreshPage() {
        window.location.reload();
    }

    updateWord = () => {
        this.setState({
            syllabe: this.readSyllabe()
        })
    };

    upScore = () => {
        this.setState({
            syllabe: this.readSyllabe(),
            score: this.state.score + 1
        });
    }

    readSyllabe() {
        const index = Math.random() * (this.availableSyllabes.length);
        const sy = this.availableSyllabes.at(index);
        this.availableSyllabes.splice(this.availableSyllabes.indexOf(sy), 1);
        console.log(this.availableSyllabes);
        return sy;
    }
}

export default Jeu;