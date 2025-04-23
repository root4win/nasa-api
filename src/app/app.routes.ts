import { Routes } from '@angular/router';
import { ApodComponent } from './presentation/components/apod/apod.component';
import { NeoComponent } from './presentation/components/neo/neo.component';
import { PeopleInSpaceComponent } from './presentation/components/people-in-space/people-in-space.component';

export const routes: Routes = [
  {path:'apod', component: ApodComponent},
  {path: 'neo', component: NeoComponent},
  {path: 'people-in-space', component: PeopleInSpaceComponent}
];
