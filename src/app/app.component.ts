import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular16-standalone-fireAuth';

  user$ = this.angularAuth.authState.pipe(
    map(user => ({user}))
  )

  constructor( private angularAuth: AngularFireAuth ){}

  onSignInClick(){
    this.angularAuth.signInWithPopup(new GoogleAuthProvider()).then(()=> {
     console.log(this.user$) 
    }).catch((error)=> console.log(error))
  }

  onSignOutClick(){
    this.angularAuth.signOut();
  } 
}
