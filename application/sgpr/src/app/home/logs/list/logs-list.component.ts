import { Component } from '@angular/core';

import { Log, LogAction } from '../logs.model';

@Component({
  selector: 'logs-list',
  templateUrl: './logs-list.component.html'
})
export class LogsListComponent {

  logsList: Log[] = [
    { 
      rowid: '1',
      username: 'admin', 
      date: '10/08/2023', 
      action: LogAction.CREATE_USER 
    },
    { 
      rowid: '2', 
      username: 'controller', 
      date: '12/08/2023', 
      action: LogAction.CREATE_ANIMAL 
    },
    { 
      rowid: '3', 
      username: 'controller', 
      date: '14/08/2023', 
      action: LogAction.CREATE_CATTLE_PADDOCKS 
    }
  ];

}
