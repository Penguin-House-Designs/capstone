import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newEmail = {
    email: '',
    message: ''
  };
  dialog: "Message sent! We'll get back to you shortly";

  constructor(private http: Http, public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open("Message sent! We'll get back to you shortly", 'Dismiss', {
      duration: 5000
    });
  }

  addNew(usercreds) {
    console.log('inside addnew')
    var headers = new Headers();
    var eObject = {
      email: usercreds.email,
      message: usercreds.message,
      headers: headers
    };
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    console.log('before sendmail')
    return this.http.post('/sendmail', eObject).subscribe((data) => {
      if (data.json().success) {
        console.log('Sent successfully');
        this.openSnackBar();
      }
    })
  }

  addUser() {
    console.log('add user function')
    this.addNew(this.newEmail);
  }



  ngOnInit() {
  }

}
