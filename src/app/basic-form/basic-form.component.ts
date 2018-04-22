import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  user = {
    id: 1,
    email: 'sample@example.com',
    name: '香川真司',
  };

  onSubmit() {
    console.log('メールアドレス: ' + this.user.email);
    console.log('ユーザー名: ' + this.user.name);
  }

  constructor() {}

  ngOnInit() {
  }

}
