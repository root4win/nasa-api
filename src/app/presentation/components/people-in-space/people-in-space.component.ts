import { Component, OnInit } from '@angular/core';
import { PeopleInSpaceService } from '../../../core/services/people-in-space.service';
import { PeopleInSpace } from '../../../core/models/people.model';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-people-in-space',
  imports: [],
  templateUrl: './people-in-space.component.html',
  styleUrl: './people-in-space.component.scss'
})
export class PeopleInSpaceComponent implements OnInit {
  peopleInSpace: PeopleInSpace | null = null;
  isLoading: boolean = true;

  constructor(
    private peopleInSpaceService: PeopleInSpaceService
  ){}

  ngOnInit(): void {
    this.loadPeopleInSpace();
  }


  loadPeopleInSpace(){
    this.peopleInSpaceService.fetchPeopleInSpace().pipe(
      catchError(err => {
        console.error(`Error while fetching people in space: <${err}>`);
        this.isLoading = false;
        throw err;
      })
    ).subscribe({
      next: data => {
        this.peopleInSpace = data;
        this.isLoading = false;
        console.log(`People in space: ${JSON.stringify(data)} `)
      }
    })
  }
}
