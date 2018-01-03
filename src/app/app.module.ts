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
import {MessageService} from './services/message.service';
import {MaintenanceService} from './services/maintenance.service';
import {MoveMessageService} from './services/move-message.service';
import { CostComponent } from './components/userMessages/user-move/cost/cost.component';
import {ItemService} from './services/item.service';
import {RoomService} from './services/room.service';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {OnlyLoggedInUsersGuardService} from './services/only-logged-in-users-guard.service';
import {AccordionModule, ButtonModule} from 'primeng/primeng';
// import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule, Message} from 'primeng/primeng';
import { FileViewComponent } from './components/file-view/file-view.component';
import {FileUploadService} from './services/file-upload.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';


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
    CostComponent,
    // FileUploadComponent,
    FileViewComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    GrowlModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user', component: UserPanelComponent, canActivate: [AuthService, OnlyLoggedInUsersGuardService] },
      { path: 'admin', component: AdminPanelComponent },
      { path: 'admin/maintenance', component: UserMaintenanceComponent},
      { path: 'admin/move', component: UserMoveComponent },
      { path: 'mytickets/maintenance', component: MaintenanceComponent, canActivate: [AuthService, OnlyLoggedInUsersGuardService] },
      { path: 'mytickets/move', component: MoveComponent, canActivate: [AuthService, OnlyLoggedInUsersGuardService] },
      { path: 'admin/employees', component: ViewEmployeesComponent },
      { path: 'admin/items', component: ViewItemsComponent },
      { path: 'admin/rooms', component: ViewRoomsComponent },
      { path: 'admin/employees/add', component: EmployeesAdderComponent },
      { path: 'admin/items/add', component: ItemsAdderComponent },
      { path: 'admin/rooms/add', component: RoomsAdderComponent },
      // { path: 'admin/rooms/add', component: RoomsAdderComponent, canActivate: [AuthService, OnlyLoggedInUsersGuardService] },
    ])
  ],
  providers: [LoginService, EmployeeService, FmisService, MessageService, MaintenanceService,
    MoveMessageService, ItemService, RoomService, AuthService, UserService, OnlyLoggedInUsersGuardService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
