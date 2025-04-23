import { Component, OnInit } from '@angular/core';
import { NeoService } from '../../../core/services/neo.service';
import { catchError } from 'rxjs';
import { Neo, ProcessedNeoData } from '../../../core/models/neo.model';

@Component({
  selector: 'app-neo',
  imports: [],
  templateUrl: './neo.component.html',
  styleUrl: './neo.component.scss'
})
export class NeoComponent implements OnInit {
  neo: Neo | null = null;
  isLoading: boolean = true;
  processedData:ProcessedNeoData[] = [];

  constructor(
    private neoService: NeoService
  ){}

  ngOnInit(): void {
    this.loadNeoData();
  }


  loadNeoData(){
    this.neoService.fetchNeoData().pipe(
      catchError(err => {
        console.error(`Error while loading neo data: <${err}>`);
        this.isLoading = false;
        throw err;
      })
    ).subscribe({
      next: data => {
        this.neo = data;
        this.processNeoData(data);
        this.isLoading = false;
        console.log(data)

      }
    })
  }


  processNeoData(data: Neo) {
    this.processedData = [];

    for (const date of Object.keys(data.near_earth_objects)) {
      const asteroids = data.near_earth_objects[date];

      const processedItem: ProcessedNeoData = {
        date,
        count: asteroids.length,
        asteroids: []
      };

      for (const asteroid of asteroids) {
        processedItem.asteroids.push({
          id: asteroid.id,
          name: asteroid.name,
          diameter: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
          isHazardous: asteroid.is_potentially_hazardous_asteroid,
          velocity: asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour || 'N/A',
          distance: asteroid.close_approach_data[0]?.miss_distance.kilometers || 'N/A'
        });
      }

      this.processedData.push(processedItem);
    }

    this.processedData.sort((a, b) => a.date.localeCompare(b.date));
  }

}
