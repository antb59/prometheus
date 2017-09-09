import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

//define the constant url we would be uploading to.
const URL = 'http://localhost:7780/api/upload';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Define a users property to hold our user data
    users: Array<any>;

    //declare a property called fileuploader and assign it to an instance of a new fileUploader.
    //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
    public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'file'});

    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {

        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(res => this.users = res);

        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are 
        //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("FileUpload:uploaded:", item, status, response);
        };
    }
}
