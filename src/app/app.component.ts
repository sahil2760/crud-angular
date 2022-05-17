import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud-angular';

  displayedColumns: string[] = ['ID', 'Grocery Name', 'Image Url','Quantity','Action'];
  dataSource!: MatTableDataSource<any>;

  
constructor(private dialog :MatDialog, private api : ApiService,private router: Router){
}
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width :"30%"
    }).afterClosed().subscribe(val =>{
        if(val =='Add To List'){
          this.getAllProducts();
        }
    });
    this.router.navigateByUrl('/add-items');
  }
 getAllProducts(){
  this.api.getProduct()
  .subscribe({
    next :(res)=>{
      this.dataSource=new MatTableDataSource(res);
      console.log(res);
      this.api.getProduct();
      this.router.navigateByUrl('/view');
    },
    error:(err)=>{
      alert("Error while fetching the records.")
    }
  })
 }
 deleteProduct(id : number){
   this.api.deleteProduct(id)
   .subscribe({
     next:(res)=>{
      //  alert("Deleted Successfully");
       this.getAllProducts();
       this.router.navigateByUrl('/view');
     },
     error:()=>{
       alert("error while deleting the product");
     }
   })
 }
preview(){
  this.dialog.open(DialogComponent, {
    width :"30%"
  }).afterClosed().subscribe(val =>{

  });
}
}

