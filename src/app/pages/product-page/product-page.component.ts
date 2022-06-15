import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  productsList = [
    {
      titre: 'Liste des Filmes',
      productsCards: [
        {
          id: 1,
          nom: 'La cité de la peur',
          real: 'Alain Berbérian',
          synopsis:
            "Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film `Red is Dead'. Malheureusement, celui-ci est d'une telle  faiblesse que personne ne souhaite en faire l'écho. Cependant, lorsque les   projectionnistes du long-métrage en question meurent chacun leur tour dans   d'étranges circonstances, `Red is dead' bénéficie d'une incroyable publicité.  Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film.",
          annee: 1994,
          img: 'https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg',
          details: '',
        },
        {
          id: 2,
          nom: 'Le parrain',
          real: 'Francis Ford Coppola',
          synopsis:
            "En 1945, à New York, les Corleone sont une des 5 familles de la   mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un   bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une   association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils,   y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire   tuer Don Vito, mais celui-ci en réchappe.",
          annee: 1972,
          img: 'https://fr.web.img2.acsta.net/pictures/22/01/14/08/39/1848157.jpg',
          details: '',
        },
        {
          id: 3,
          nom: 'Fight Club',
          real: 'David Fincher',
          synopsis:
            "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'énergie négative de chacun.",
          annee: 1999,
          img: 'https://www.new-video.de/co/fightclu.jpg',
          details: '',
        },
      ],
    },
    {
      titre: 'Liste des Albumes',
      productsCards: [
        {
          id: 4,
          nom: 'The Dark Side of the Moon',
          artiste: 'Pink Floyd',
          annee: 1973,
          img: 'https://ipurple.eu/976-large_default/moon-byul-dark-side-of-the-moon.jpg',
          details: '',
        },
        {
          id: 5,
          nom: 'Space Oddity',
          artiste: 'David Bowie',
          annee: 1969,
          img: 'https://images.squarespace-cdn.com/content/v1/5a70fa14e45a7c7dd2fadad0/1584060311354-59WI7EULU6R018LWLGXK/pic_disc_mont_v3_flat_1080sq.jpg',
          details: '',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
