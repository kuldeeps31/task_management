import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoderunComponent } from '../coderun/coderun.component';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

taskTitle: string = '';
taskDescription: string = '';
taskPriority: string = '';
taskDueDate: string = '';
taskAssignedTo: string = '';
isEditing: boolean = false;
editingTaskTitle: string = ''; // Store the title of the task being edited

tasks: { title: string; description: string; priority: string; dueDate: string; assignedTo: string }[] = [];

constructor( private router:Router) {}


ngOnInit() {
  this.loadTasks();
}

navigateToDashboard(){
  
  this.router.navigate(['dashboard']);

}

navigatetocoderun(){
  console.log("navigate to run")
  this.router.navigate(['coderun'])
}
addTask() {
  const newTask = {
    title: this.taskTitle,
    description: this.taskDescription,
    priority: this.taskPriority,
    dueDate: this.taskDueDate,
    assignedTo: this.taskAssignedTo
  };
  this.tasks.push(newTask);
  this.saveTasks();
  this.clearForm();
}

editTask(task: any) {
  this.isEditing = true;
  this.editingTaskTitle = task.title; // Save the title for tracking

  // Pre-fill form with selected task details
  this.taskTitle = task.title;
  this.taskDescription = task.description;
  this.taskPriority = task.priority;
  this.taskDueDate = task.dueDate;
  this.taskAssignedTo = task.assignedTo;
}

updateTask() {
  const index = this.tasks.findIndex(task => task.title === this.editingTaskTitle);
  if (index !== -1) {
    this.tasks[index] = {
      title: this.taskTitle,
      description: this.taskDescription,
      priority: this.taskPriority,
      dueDate: this.taskDueDate,
      assignedTo: this.taskAssignedTo
    };
    this.saveTasks();
    this.clearForm();
  }
}

deleteTask(title: string) {
  this.tasks = this.tasks.filter(task => task.title !== title);
  this.saveTasks();
}

saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    this.tasks = JSON.parse(storedTasks);
  }
}

clearForm() {
  console.log('clear form');
  this.taskTitle = '';
  this.taskDescription = '';
  this.taskPriority = '';
  this.taskDueDate = '';
  this.taskAssignedTo = '';
  this.isEditing = false;
  this.editingTaskTitle = '';
}
}

