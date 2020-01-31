import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from './service/test.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;

}
@Component({
  selector: 'app-rooot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public searchString: string;
  title = 'pagination';
  get_data:any;
  searchText;
i:number
config: any;
collection = {  data: [] };
  constructor(private test:TestService,public dialog: MatDialog) { }



  ngOnInit(){
  
    this.test.GetMethod().subscribe(data =>{
      
      // this.get_data.push(data)
      
      this.get_data=data["hits"]
    //  alert(this.get_data.length)
    console.log(this.get_data)

    for (var i = 0; i < this.get_data.length; i++) {
      this.collection.data.push(
        {
          title:  this.get_data[i].title,
          url:  this.get_data[i].url,
          created_at:  this.get_data[i].created_at,
          author:  this.get_data[i].author,


        }
      );
    }
 
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.get_data.length
    };
  })

  setTimeout (() => {
   window.location.reload()
 }, 10000);
 
}





pageChanged(event){
  this.config.currentPage = event;
}

// api_data(){
//   alert(JSON.stringify(this.get_data))
// }




// pagination url:https://www.freakyjolly.com/angular-7-6-pagination-implement-local-or-server-pagination-in-3-steps/

api_data(v): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '500px',
    data: v
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'new_dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    // get_data(){
    //   alert(data)
    // }
  onNoClick(): void {
    this.dialogRef.close();
  }

}


