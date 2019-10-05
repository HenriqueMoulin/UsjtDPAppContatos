import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [
    {
      nome: 'Henrique',
      telefone: "123456789r",
      email: "henrique@gmail.com" 
    },
    {
      nome: 'Henrique1',
      telefone: "123456789r",
      email: "henrique1@gmail.com"
    },
    {
      nome: 'Henrique2',
      telefone: "123456789r",
      email: "henrique2@gmail.com"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  onItemClick (contato){
    //console.log ('item-click', contato);
    this.navCtrl.push ('DetailPage', {contatoParam: contato });
   }

}
