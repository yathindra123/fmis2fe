import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdminNavBarComponent } from './components/navbar/adminNavBar/admin-nav-bar.component';
import { UserNavBarComponent } from './components/navbar/userNavBar/user-nav-bar.component';
import { MaintenanceReqSenderComponent } from './components/RequestSender/maintenance-req-sender/maintenance-req-sender.component';
import { MoveReqSenderComponent } from './components/RequestSender/move-req-sender/move-req-sender.component';
import { UserMoveComponent } from './components/userMessages/user-move/user-move.component';
import { UserMaintenanceComponent } from './components/userMessages/user-maintenance/user-maintenance.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import {LoginService} from './services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaintenanceComponent } from './components/my-tickets/maintenance/maintenance.component';
import { MoveComponent } from './components/my-tickets/move/move.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AddItemsComponent } from './components/items/add-items/add-items.component';
import { ViewItemsComponent } from './components/items/view-items/view-items.component';
import { AddRoomsComponent } from './components/rooms/add-rooms/add-rooms.component';
import { ViewRoomsComponent } from './components/rooms/view-rooms/view-rooms.component';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { ViewEmployeesComponent } from './components/employees/view-employees/view-employees.component';
import { EmployeesAdderComponent } from './components/admin-panel/employeesAdder/employees-adder.component';
import { ItemsAdderComponent } from './components/admin-panel/items-adder/items-adder.component';
import { RoomsAdderComponent } from './components/admin-panel/rooms-adder/rooms-adder.component';
import {EmployeeService} from './services/employee.service';
import {FmisService} from './services/fmis.service';
import { SearchComponent } from './components/searchEmployee/searchEmployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavBarComponent,
    UserNavBarComponent,
    MaintenanceReqSenderComponent,
    MoveReqSenderComponent,
    UserMoveComponent,
    UserMaintenanceComponent,
    LoginComponent,
    UserPanelComponent,
    MaintenanceComponent,
    MoveComponent,
    AdminPanelComponent,
    AddItemsComponent,
    ViewItemsComponent,
    AddRoomsComponent,
    ViewRoomsComponent,
    AddEmployeesComponent,
    ViewEmployeesComponent,
    EmployeesAdderComponent,
    ItemsAdderComponent,
    RoomsAdderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user', component: UserPanelComponent },
      { path: 'admin', component: AdminPanelComponent },
      { path: 'admin/maintenance', component: UserMaintenanceComponent },
      { path: 'admin/move', component: UserMoveComponent },
      { path: 'mytickets/maintenance', component: MaintenanceComponent },
      { path: 'mytickets/move', component: MoveComponent },
      { path: 'admin/employees', component: ViewEmployeesComponent },
      { path: 'admin/items', component: ViewItemsComponent },
      { path: 'admin/rooms', component: ViewRoomsComponent },
      { path: 'admin/employees/add', component: EmployeesAdderComponent },
      { path: 'admin/items/add', component: ItemsAdderComponent },
      { path: 'admin/rooms/add', component: RoomsAdderComponent }
    ])
  ],
  providers: [LoginService, EmployeeService, FmisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
