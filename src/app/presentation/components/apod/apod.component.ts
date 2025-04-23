import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../core/services/apod.service';
import { Apod } from '../../../core/models/apod.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-apod',
  imports: [],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit  {
  apod: Apod | null = null;
  isLoading: boolean = true;

  constructor(
    private apodService: ApodService,
  ){}

  ngOnInit(): void {
    this.loadApod();
  }

  loadApod(){
    this.apodService.fetchApod().pipe(
      catchError((err) => {
        console.error(`Error while fetching apo data: <${err}>`);
        this.isLoading = false;
        throw err;
      })
    ).subscribe({
      next: data => {
        this.apod = data;
        this.isLoading = false;
        console.log(`Apod data: <${JSON.stringify(this.apod)}>`)
      }
    })
  }


}
