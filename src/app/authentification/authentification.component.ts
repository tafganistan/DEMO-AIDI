import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

    constructor (private router: Router ) {}

    ngOnInit(): void {
      $(document).ready(function () {
        /* AFFICHER LE FORMULAIRE D'INSCRIPTION */
        $(".btn-inscription").click(function(){
          $(".btn-inscription").hide()
          $(".btn-connexion").show()
          $(".rw-bloc-auth_left").css("top", "10.7vh")
          $(".form-connexion").hide();
          $(".form-inscription").fadeIn(600)
        });

        /* AFFICHER LE FORMULAIRE DE CONNEXION */
        $(".btn-connexion").click(function(){
          $(".btn-connexion").hide()
          $(".btn-inscription").show()
          $(".rw-bloc-auth_left").css("top", "")
          $(".form-inscription").hide();
          $(".form-connexion").fadeIn(600)
        });
      })
    }

}
