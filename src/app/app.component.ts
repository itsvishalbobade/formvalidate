import { Component } from '@angular/core';
import{ FormControl,FormGroup,FormControlName,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromvalidate';
  signin= new FormGroup ({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.required,]),
    number:new FormControl('',[Validators.required,Validators.minLength(10)]),
    file:new FormControl ('', [Validators.required,]),
  })
  user(){
    console.log(this.signin.value)
  }
  get name(){
    return this.signin.get('name')

  }
  get password(){
    return this.signin.get('password')
  }
  get email(){
    return this.signin.get('email')
  }
  get number(){
    return this.signin.get('number')
  }
  get file(){
    return this.signin.get('file')
  }
}
