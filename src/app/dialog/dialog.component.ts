import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';
import{MatDialogRef} from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
productForm !: FormGroup;
  constructor(private formBuilder : FormBuilder,private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>, private router :Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      groceryName : ['',Validators.required],
      imgUrl :['',Validators.required,],
      quantity :['',Validators.required]
    });
  }
addProduct(){
  if(this.productForm.valid){
    this.api.postProduct(this.productForm.value)
    .subscribe({
      next : (res)=>{
        // alert("product Added sucessfully");
        this.productForm.reset();
        this.dialogRef.close('saved');
        window. location. reload();
        
        this.router.navigateByUrl('/view');
      },
      error:()=>{
        alert("error while adding the product");
        this.router.navigateByUrl('/view');
      }
    })
  }
}

onClose(){
  this.router.navigateByUrl('/view');
}

}
