import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newsletter!:FormGroup; //si algo no se inicializa, se coloca el signo de ! antes de los 2puntos
  //myField= new FormControl();
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    //this.myField.valueChanges();
    this.newsletter=this.initForm();
    this.onPatchValue();
    this.onSetValue();
  }
  onSubmit():void{
    console.log('form →', this.newsletter.value);
  }
  initForm():FormGroup{
    //regresar propiedades del formulario
    return this.fb.group({
      email:['',[Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }
  onPatchValue():void{
    this.newsletter.patchValue({
      email:'mgamez@gmail.com'
    });
  }
  onSetValue():void{
    this.newsletter.setValue({
      email:'mgamez@gmail.com'
    });
  }

}
