import '../App.css';
import {Link} from "react-router-dom";
import React from "react";
import Timer from "./Timer";

const words = ["être", "avoir", "faire", "plus", "dire", "comme", "nous", "mais", "pouvoir", "avec", "tout", "aller",
    "voir", "bien", "sans", "homme", "leur", "deux", "mari", "vouloir",
    "femme", "venir", "quand", "grand", "celui", "notre", "devoir", "prendre", "jour", "même", "votre", "rien",
    "petit", "encore", "aussi", "quelque", "trouver", "mer", "donner", "temps", "falloir", "parler", "alors", "main",
    "chose", "mettre", "vie", "savoir", "yeux", "passer", "autre", "après",
    "regarder", "toujours", "jamais", "puis", "cela", "aimer", "heure", "croire", "cent", "monde", "donc", "enfant",
    "fois", "seul", "entre", "vers", "chez", "jeune", "jusque", "très", "moment", "rester", "répondre", "tête",
    "père", "fille", "mille", "premier", "entendre", "trois", "coeur", "ainsi", "quatre", "terre", "contre", "dieu",
    "monsieur", "voix", "penser", "quel", "arriver", "maison", "devant", "coup", "beau", "connaître", "devenir", "air",
    "mot", "nuit", "sentir", "eau", "vieux", "sembler", "moins", "tenir", "ici", "comprendre", "rendre", "oui",
    "vingt", "depuis", "attendre", "sortir", "ami", "trop", "porte", "lequel", "chaque", "amour", "pendant", "déjà",
    "pied", "tant", "gens", "parce que", "nom", "vivre", "reprendre", "entrer", "porter", "pays", "ciel", "avant",
    "frère", "regard", "chercher", "âme", "côté", "mort", "revenir", "noir", "maintenant", "nouveau", "ville", "rue",
    "enfin", "appeler", "soir", "chambre", "mourir", "pas", "partir", "cinq", "esprit", "soleil", "dernier", "jeter",
    "dix", "roi", "état", "corps", "beaucoup", "suivre", "bras", "écrire", "blanc", "montrer", "tomber", "place",
    "ouvrir", "parti", "assez", "cher", "voilà", "année", "loin", "point", "visage", "bruit", "lettre", "franc",
    "fond", "force", "arrêter", "perdre", "commencer", "paraître", "aucun", "marcher", "milieu", "saint", "idée", "presque",
    "ailleurs", "travail", "lumière", "long", "seulement", "mois", "fils", "neuf", "tel", "lever", "raison", "effet",
    "gouvernement", "permettre", "pauvre", "asseoir", "point", "plein", "personne", "vrai", "peuple", "fait", "parole", "guerre",
    "toute", "écouter", "pensée", "affaire", "quoi", "matin", "pierre", "monter", "bas", "vent", "doute", "front",
    "ombre", "part", "maître", "aujourd'hui", "besoin", "question", "apercevoir", "recevoir", "mieux", "peine", "tour", "servir",
    "autour", "près", "finir", "famille", "pourquoi", "souvent", "rire", "dessus", "madame", "sorte", "figure", "droit",
    "peur", "bout", "lieu", "silence", "gros", "chef", "six", "bois", "histoire", "crier", "jouer", "feu",
    "tourner", "doux", "longtemps", "fort", "heureux", "garder", "partie", "face", "mouvement", "reconnaître", "fin", "quitter",
    "personne", "comment", "route", "dès", "manger", "livre", "arbre", "courir", "cas", "huit", "lorsque", "mur",
    "ordre", "continuer", "bonheur", "oublier", "descendre", "haut", "intérêt", "cacher", "chacun", "profond", "argent", "cause",
    "poser", "autant", "est", "travers", "instant", "façon", "d'abord", "oeil", "tirer", "forme", "présenter", "ajouter",
    "agir", "retrouver", "chemin", "cheveu", "offrir", "surtout", "certain", "plaisir", "suite", "apprendre", "malgré", "tuer",
    "rouge", "sang", "retourner", "rencontrer", "sentiment", "fleur", "cependant", "service", "plusieurs", "table", "vite", "paix"];

class JeuMots extends React.Component {

    constructor(props) {
        super(props);
        this.availableWords = [...words];
        this.state = {
            word: this.readWord(),
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
                    <h1 className="Syllabe-h1">{this.state.word}</h1>
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
            word: this.readWord()
        })
    };

    upScore = () => {
        this.setState({
            word: this.readWord(),
            score: this.state.score + 1
        });
    }

    readWord() {
        const index = Math.random() * (this.availableWords.length);
        const sy = this.availableWords.at(index);
        this.availableWords.splice(this.availableWords.indexOf(sy), 1);
        console.log(this.availableWords);
        return sy;
    }
}

export default JeuMots;