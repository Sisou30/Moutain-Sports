import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  public parcours:Array<Object> = [];

  constructor() { }

  listParcoursInitialize()
  {
    this.parcours = [
      {id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ie4V8KVyiTkwF1C8KR2s_Gr6eWCj3Ls0S09OMWYWX4GkTZMK6A', title: 'Boucle Saint Privat Des Vieux', description:' Un itinéraire sur une alternance de route et de chemin empierré la plupart du temps. Il peut être fait dans les 2 sens, mais le sens conseillé est plus facile pour les montées.',time: 4,distance:20,favorite:true },
      {id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfj_rbDkc2wHORaoztHQHP35hs5nbDrjOx81XxmIF8hLtwDSV8&s', title: 'Boucle le mont ventoux', description:'descr 2',time: 2,distance:30,favorite:false },
      {id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNIuKERpR_GPhDZV_bhrT4-HW8or-8xLl_BlAyK4Jg0ij5U8s&s', title: 'Boucle Vézénobres', description:'desc 3',time: 3,distance:50,favorite:true },
      {id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JV55F8wmA1n6H5JZBgNf1K1arjY2v4OUvBJe0l9QTxoREwHZ&s', title: 'Boucle Le Pradel', description:'desc 4',time: 4,distance:60,favorite:true },
      {id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswVqy1Liviy7TaNMlJ08TF65ddqeOt6PGSfaovVY_MRccTok&s', title: 'Boucle Découverte La Grand-Combe', description:'desc 5',time: 4,distance:60,favorite:false },
      {id: 6, image: 'https://www.trackyourtruck.com/profiles/sndev_install/themes/sndev/img/fleet-tracking-pic1b.jpg', title: 'Boucle Salindre', description:'desc 6',time: 4,distance:60,favorite:false },
    ];
  }


}
