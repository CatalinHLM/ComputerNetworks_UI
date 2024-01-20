import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environment/environment";
import { Subscription } from 'rxjs';

export interface ResponseData {
  farLeft: number;
  left: number;
  center: number;
  right: number;
  farRight: number;
  lineLeft: number;
  lineRight: number;
  leftWheelSpeed: number;
  rightWheelSpeed: number;
  message: string;
}
@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnDestroy {

    private httpSubscription: Subscription | undefined;

    //state: ResponseData[]=[];

    body: { [key: string]: number } = {
        "speed": 50,
        "right": 0,
        "front": 0,
        "left": 1,
        "back": 0
    };



    constructor(private httpClient: HttpClient) {}

    // Function to be executed on button press
    onButtonPress(buttonName: string): void {
        this.updateSwitch(buttonName);

        this.httpSubscription = this.httpClient.post(environment.apiUrl + "/iot/move", this.body)
            .subscribe({
                next: (response:any) => {
                    console.log('HTTP Request Successful', response);
                    // Add your additional logic here if needed
                    //ng generate servicethis.state = response;
                    //console.log(this.state);
                    //this.dataTableDataSource.initializeData(this.state);
                },
                error: (error) => {
                    console.error('HTTP Request Failed', error);
                    // Handle errors as needed
                }
            });

        // Debugging statement to check if this block is executed
        console.log('After HTTP Request onButtonPress');
    }

    // Function to be executed on button release
    onButtonRelease(buttonName: string): void {
        this.setZero();
        this.httpSubscription = this.httpClient.post(environment.apiUrl + "/iot/move", this.body)
            .subscribe({
                next: (response) => {
                    console.log('HTTP Request Successful', response);
                    // Add your additional logic here if needed
                },
                error: (error) => {
                    console.error('HTTP Request Failed', error);
                    // Handle errors as needed
                }
            });

        // Debugging statement to check if this block is executed
        console.log('After HTTP Request onButtonRelease');
    }

    ngOnDestroy(): void {
        // Unsubscribe from any remaining subscriptions to avoid memory leaks
        if (this.httpSubscription) {
            this.httpSubscription.unsubscribe();
        }
    }

    updateSwitch(direction: string): void {

        for (const key in this.body) {
            if (this.body.hasOwnProperty(key) && key !== "speed") {
                this.body[key] = 0;
            }
        }
        // Set the selected value to 1
        this.body[direction] = 1;
    }

    setZero(): void {
        for (const key in this.body)
            if (key !== "speed") {
                this.body[key] = 0;
            }
    }
}
