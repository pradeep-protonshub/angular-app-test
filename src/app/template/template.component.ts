import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  title = 'AngularMultipleData';    
  SchoolDetailsForm : FormGroup;  
  count:number=0 
  get_array=[
    {
      "id":0,
      "name":"apple"
    },
    {
      "id":1,
      "name":"banna"
    },
    
    {
      "id":2,
      "name":"red"
    },
    {
      "id":3,
      "name":"green"
    },
    {
      "id":4,
      "name":"black"
    },
    {
      "id":5,
      "name":"voilet"
    },
    {
      "id":6,
      "name":"purple"
    },
    {
      "id":7,
      "name":"blue"
    },
    {
      "id":8,
      "name":"navy"
    },
    {
      "id":9,
      "name":"brown"
    },
    {
      "id":10,
      "name":"2apple"
    },
    {
      "id":11,
      "name":"2banna"
    },
    
    {
      "id":12,
      "name":"2red"
    },
    {
      "id":13,
      "name":"2green"
    },
    {
      "id":14,
      "name":"2black"
    },
    {
      "id":15,
      "name":"2voilet"
    },
    {
      "id":16,
      "name":"2purple"
    },
    {
      "id":17,
      "name":"2blue"
    },
    {
      "id":18,
      "name":"2navy"
    },
    {
      "id":19,
      "name":"2brown"
    },
    {
      "id":20,
      "name":"3apple"
    },
    {
      "id":21,
      "name":"3banna"
    },
    
    {
      "id":22,
      "name":"3red"
    },
    {
      "id":23,
      "name":"3green"
    },
    {
      "id":24,
      "name":"3black"
    },
    {
      "id":25,
      "name":"3voilet"
    },
    {
      "id":26,
      "name":"3purple"
    },
    {
      "id":27,
      "name":"3blue"
    },
    {
      "id":28,
      "name":"3navy"
    },
    {
      "id":29,
      "name":"3brown"
    },
    {
      "id":30,
      "name":"4apple"
    },
    {
      "id":31,
      "name":"4banna"
    },
    
    {
      "id":32,
      "name":"4red"
    },
    {
      "id":33,
      "name":"4green"
    },
    {
      "id":34,
      "name":"4black"
    },
    {
      "id":35,
      "name":"4voilet"
    },
    {
      "id":36,
      "name":"4purple"
    },
    {
      "id":37,
      "name":"4blue"
    },
    {
      "id":38,
      "name":"4navy"
    },
    {
      "id":39,
      "name":"4brown"
    }
  ]
  AllClassData=[    
    {    
    'className':'5th'    
    },  
  //  {    
  //   'className':'8th'    
  //  },    
  //  {    
  //   'className':'10th'    
  //   },    
  //  {    
  //   'className':'12th'    
  //  },    
]    
  constructor(private fb :FormBuilder)    
  {    
        
  }    
  ngOnInit()    
  {    
        // this.SaveData();   
    this.createform(0);    
  }    


  
createform(k)    
{    
  let arr=[];    
  // for(let i=0;i< this.AllClassData.length;i++)    
  // {       
    // arr.push(this.BuildFormDynamic(this.AllClassData[0]))    
       
  // }    
  
  // for(let i=0;i< this.get_array.length; i++)  {
    // console.log(this.count)
    this.SchoolDetailsForm =  this.fb.group({    
      SchoolName : [this.get_array[k].name], 
      CollageName:[this.get_array[k+1].name],  
      ThirdName : [this.get_array[k+2].name], 
      fourthName:[this.get_array[k+3].name], 
      FithName : [this.get_array[k+4].name], 
      sixName:[this.get_array[k+5].name], 
      SevenName:[this.get_array[k+6].name], 
      EeightName:[this.get_array[k+7].name], 
      nineName:[this.get_array[k+8].name], 
      tenName:[this.get_array[k+9].name],
      ClassDetails:this.fb.array(arr)    
    })    
    // this.count+=1
// }  

}
// count=[];
// BuildFormDynamic(product):FormGroup{  
//   // alert(this.get_array.length)
//   // for(let j;j<=this.get_array.length;j++){
//  alert(this.get_array[j].name)
// // this.count.push(this.get_array[i])
//     // for(let j;j<=this.get_array.length;j++){

//     // if(j==0){
//  return this.fb.group({    
//        Class:[product.className],    
//       //  TotalStudent:[this.get_array[0].name],    
//       //  GradeAStudent:[this.get_array[j].name],    
//       //  GradeBStudent :[this.get_array[j].name]    
//   }) 

// // }

// // }
// }   

    
  SaveData()    
  {    
    this.count+=10;
 
console.log(this.SchoolDetailsForm.value);   
this.createform(this.count) 
if(this.SchoolDetailsForm.value.tenName == "4brown"){
  this.count+=0
  alert("sorry data is finished");

}
    //pass this data to service and api node/webapi  
    // alert(this.get_array.indexOf(this.SchoolDetailsForm.value.CollageName))
  }    
}
