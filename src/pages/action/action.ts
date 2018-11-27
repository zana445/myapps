import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Platform, ActionSheetController } from 'ionic-angular'; //action

import { AlertController } from 'ionic-angular'; //alert





@Component({
    selector: 'page-action',
  templateUrl: 'action.html'

})

export class ActionPage {

    testRadioOpen: boolean;

    testRadioResult;

  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) { }



  openMenu() {

    let actionSheet = this.actionsheetCtrl.create({

      title: 'Albums',

      cssClass: 'action-sheets-basic-page',

      buttons: [

        {

          text: 'Delete',

          role: 'destructive',

          icon: !this.platform.is('ios') ? 'trash' : null,

          handler: () => {

            console.log('Delete clicked');

          }

        },

        {

          text: 'Share',

          icon: !this.platform.is('ios') ? 'share' : null,

          handler: () => {

            console.log('Share clicked');

          }

        },

        {

          text: 'Play',

          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,

          handler: () => {

            console.log('Play clicked');

          }

        },

        {

          text: 'Favorite',

          icon: !this.platform.is('ios') ? 'heart-outline' : null,

          handler: () => {

            console.log('Favorite clicked');

          }

        },

        {

          text: 'Cancel',

          role: 'cancel', // will always sort to be on the bottom

          icon: !this.platform.is('ios') ? 'close' : null,

          handler: () => {

            console.log('Cancel clicked');

          }

        }

      ]

    });

    actionSheet.present();

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  doRadio() {

    let alert = this.alertCtrl.create();

    alert.setTitle('Lightsaber color');



    alert.addInput({

      type: 'radio',

      label: 'Blue',

      value: 'blue',

      checked: true

    });



    alert.addInput({

      type: 'radio',

      label: 'Green',

      value: 'green'

    });



    alert.addInput({

      type: 'radio',

      label: 'Red',

      value: 'red'

    });



    alert.addInput({

      type: 'radio',

      label: 'Yellow',

      value: 'yellow'

    });



    alert.addInput({

      type: 'radio',

      label: 'Purple',

      value: 'purple'

    });



    alert.addInput({

      type: 'radio',

      label: 'White',

      value: 'white'

    });



    alert.addInput({

      type: 'radio',

      label: 'Black',

      value: 'black'

    });



    alert.addButton('Cancel');

    alert.addButton({

      text: 'Ok',

      handler: data => {

        console.log('Radio data:', data);

        this.testRadioOpen = false;

        this.testRadioResult = data;

      }

    });



    alert.present().then(() => {

      this.testRadioOpen = true;

    });

  }
}