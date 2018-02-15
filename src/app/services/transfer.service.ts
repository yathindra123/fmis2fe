import { Injectable } from '@angular/core';
import {MoveMessage} from '../modals/MoveMessage/MoveMessage';
import {Router} from '@angular/router';
import {MessageService} from './message.service';
import {MaintenanceMessage} from '../modals/maintenanceMessage/MaintenanceMessage';
import {Item} from '../modals/item/Item';
import {ItemService} from './item.service';
import {Room} from '../modals/room/room';
import {RoomService} from './room.service';
import {Employee} from '../modals/employee/Employee';
import {EmployeeService} from './employee.service';

@Injectable()
export class TransferService {

  static employeeName: string;
  static employee= new Employee();
  static move= new MoveMessage();
  static maintenance= new MaintenanceMessage();
  static item= new Item();
  static room= new Room();
  moveMsg: MoveMessage[] = [];

  // Create constructor
  constructor(
    private router: Router, private messageService: MessageService, private itemService: ItemService,
    private roomService: RoomService, private employeeService: EmployeeService
  ) { }

  // Set employee name
  setEmployeeName(name) {
    TransferService.employeeName = name;
  }

  // Set employee
  setEmployee(employee) {
    TransferService.employee = employee;
  }

  // Set move request
  setMove(move) {
    TransferService.move = move;
  }

  // Set maintenance request
  setMaintenance(maintenance) {
    TransferService.maintenance = maintenance;
  }

  // Set item
  setItem(item) {
    TransferService.item = item;
  }

  // Set room
  setRoom(room) {
    TransferService.room = room;
  }

  // Get employee name
  getEmployeeName() {
    const temp = TransferService.employeeName;
    return temp;
  }

  // Get employee
  getEmployee() {
    const temp = TransferService.employee;
    return temp;
  }

  // Get move request
  getMove() {
    const temp = TransferService.move;
    return temp;
  }

  // Get item
  getItem() {
    const temp = TransferService.item;
    return temp;
  }

  // Get maintenance request
  getMaintenance() {
    const temp = TransferService.maintenance;
    return temp;
  }

  // Get room
  getRoom() {
    const temp = TransferService.room;
    return temp;
  }

  // Add cost for the relocation request
  addCost(cost) {
    TransferService.move.price = cost;
    this.messageService.updateMove(TransferService.move);
  }

  // Add cost for the maintenance request
  addMaintainCost(cost) {
    TransferService.maintenance.price = cost;
    this.messageService.updateMaintenance(TransferService.maintenance);
  }

  // Change relocation request
  addMoveContent(message) {
    TransferService.move.message = message;
    this.messageService.updateMove(TransferService.move);
  }

  // Change maintenance request
  addMaintenanceContent(message) {
    TransferService.maintenance.message = message;
    this.messageService.updateMaintenance(TransferService.maintenance);
  }

  // Add new item
  addNewItem(item) {
    TransferService.item = item;
    this.itemService.updateItem(TransferService.item);
  }

  // Edit room details
  editRoom(room) {
    TransferService.room = room;
    this.roomService.updateRoom(TransferService.room);
  }

  // Edit employee details
  editEmployee(employee) {
    TransferService.employee = employee;
    this.employeeService.updateEmployee(TransferService.employee);
  }
}
