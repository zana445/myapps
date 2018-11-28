import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { TitleCasePipe } from '@angular/common';
import {DetailContactPage} from '../../pages/detail-contact/detail-contact'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public people = [];
  public errorMessage: string;
  public peopleAll = [];
  public page = 0;
  public genderType = "";
  public reloadData = false;

  constructor(public navCtrl: NavController, public service: PeopleProvider, ) {
    this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
          console.log(response);
          this.people = response["results"]
          this.peopleAll = this.people;
        },
        (error) => console.log(error)
      )
  }
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }

  doRefresh(e) {
    this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
          console.log(response);
          this.people = response["results"]
          e.complete()
        },
        (error) => {
          console.log(error)
          e.complete()
        }
      )
  }

  doInfinite(e) {
    this.service.getPeopleFromApi()
      .subscribe(
        data => this.people.push(...data["results"]),
        err => console.log(err),
        () => e.complete()
      )
  }

  pushPerson(user){
    this.navCtrl.push(DetailContactPage,user)
  }

  searchPerson(e){
    console.log(e.target.value)
    this.people = this.peopleAll.filter((person) => {
      return person.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
      person.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    })
    console.log(this.people)
  }
  /*public person=
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "rolf",
        last: "hegdal"
      },
      location: {
        street: "ljan terrasse 346",
        city: "vear",
        state: "rogaland",
        postcode: "3095",
      },
      email: "suzana@utm.my",
      login: {
        username: "suzana",
        password: "password",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      dob: "1978-07-07 08:00:00",
      registered: "1978-07-09 08:00:00",
      phone: "019-7777777",
      cell: "40652479",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      nat: "DE"
    }*/

  /*public people = [
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "rolf",
        last: "hegdal"
      },
      location: {
        street: "ljan terrasse 346",
        city: "vear",
        state: "rogaland",
        postcode: "3095",
      },
      email: "suzana@utm.my",
      login: {
        username: "suzana",
        password: "password",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      dob: "1978-07-07 08:00:00",
      registered: "1978-07-09 08:00:00",
      phone: "019-7777777",
      cell: "40652479",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      nat: "DE"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "xMen",
        last: "hegdal"
      },
      location: {
        street: "ljan terrasse 346",
        city: "vear",
        state: "rogaland",
        postcode: "3095",
      },
      email: "suzana@utm.my",
      login: {
        username: "suzana",
        password: "password",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      dob: "1978-07-07 08:00:00",
      registered: "1978-07-09 08:00:00",
      phone: "019-7734555",
      cell: "40652479",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      nat: "DE"
    }
  ]
  public reloadData = false;
  constructor(public navCtrl: NavController) { }
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }*/
}

