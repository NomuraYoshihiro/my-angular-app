import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  email = new FormControl('sample@example.com', [
    Validators.required,
    Validators.email,
  ]);

  name = new FormControl('香川真司', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(12),
  ]);

  myFormGroup = this.builder.group({
    email: this.email,
    name: this.name,
  });

  // FormBuilderオブジェクト生成
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log('メールアドレス: ' + this.email.value);
    console.log('ユーザー名: ' + this.name.value);
    console.log('=== 全部(FormGroup) ===');
    console.log(this.myFormGroup.value);
  }

}
