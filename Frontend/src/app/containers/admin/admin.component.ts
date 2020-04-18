import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // uploadedFiles: Array <File>;
  //  formData;
  constructor(private adminServices: UsersService) { }

  ngOnInit(): void {
  }

// upload(){
// let  formData = new formData();
// // tslint:disable-next-line: prefer-for-of
// for (let i = 0; i < this.uploadedFiles.length; i++) {
// formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
// }
// this.adminServices.uploadFile(formData).subscribe((res) => {
// console.log(res);
// });

// }
// filechange(e){
// this.uploadedFiles = e.target.files;
// }

}


// https://www.youtube.com/watch?v=-BVrRGrBhBA