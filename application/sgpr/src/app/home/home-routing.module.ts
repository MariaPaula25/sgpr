import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalsListComponent } from './animals/list/animals-list.component';
import { AnimalsModule } from './animals/animals.module';
import { HomeComponent } from './home.component';
import { UsersListComponent } from './users/list/users-list.component';
import { UsersModule } from './users/users.module';
import { AnimalsFormComponent } from './animals/form/animals-form.component';
import { UsersFormComponent } from './users/form/users-form.component';
import { CattlePaddocksListComponent } from './cattle-paddocks/list/cattle-paddocks-list.component';
import { CattlePaddocksFormComponent } from './cattle-paddocks/form/cattle-paddocks-form.component';
import { InputsListComponent } from './inputs/list/inputs-list.component';
import { InputsFormComponent } from './inputs/form/inputs-form.component';
import { LogsListComponent } from './logs/list/logs-list.component';
import { VaccinateListComponent } from './vaccinate/list/vaccinate-list.component';
import { VaccinateFormComponent } from './vaccinate/form/vaccinate-form.component';
import { InputsModule } from './inputs/inputs.module';
import { CattlePaddocksModule } from './cattle-paddocks/cattle-paddocks.module';
import { LogsModule } from './logs/logs.module';
import { SalesModule } from './sales/sales.module';
import { VaccinateModule } from './vaccinate/vaccinate.module';
import { SalesListComponent } from './sales/list/sales-list.component';
import { SalesFormComponent } from './sales/form/sales-form.component';
import { animalResolver } from './animals/animal.resolver';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      { 
        path: 'animals', 
        component: AnimalsListComponent
      },
      { 
        path: 'animals/form', 
        component: AnimalsFormComponent,
        resolve: {
          animal: animalResolver
        }
      },
      { 
        path: 'cattle-paddocks', 
        component: CattlePaddocksListComponent 
      },
      { 
        path: 'cattle-paddocks/form', 
        component: CattlePaddocksFormComponent,
      },
      { 
        path: 'inputs', 
        component: InputsListComponent 
      },
      { 
        path: 'inputs/form', 
        component: InputsFormComponent,
      },
      { 
        path: 'logs', 
        component: LogsListComponent 
      },
      { 
        path: 'sales', 
        component: SalesListComponent 
      },
      { 
        path: 'sales/form', 
        component: SalesFormComponent,
      },
      { 
        path: 'users', 
        component: UsersListComponent 
      },
      { 
        path: 'users/form', 
        component: UsersFormComponent,
      },
      { 
        path: 'vaccinate', 
        component: VaccinateListComponent 
      },
      { 
        path: 'vaccinate/form', 
        component: VaccinateFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    AnimalsModule,
    CattlePaddocksModule,
    InputsModule,
    LogsModule,
    SalesModule,
    UsersModule,
    VaccinateModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
