import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ExploreContainerComponent], 
})
export class Tab1Page {
  todos: { id: number, text: string }[] = [];
  newTodo: string = ''; 
  editTodo: string = ''; 
  editTodoId: number | null = null; 

  constructor() {}

  // Método para agregar un nuevo "todo"
  addTodo() {
    if (this.newTodo.trim()) {
      const newId = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
      this.todos.push({ id: newId, text: this.newTodo }); 
      this.newTodo = ''; 
    }
  }

  // Método para eliminar un "todo" por su ID
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id); 
  }

  // Método para preparar el "todo" para editar
  editTodoStart(todo: { id: number, text: string }) {
    this.editTodo = todo.text;
    this.editTodoId = todo.id;
  }

  // Método para actualizar el "todo"
  updateTodo() {
    if (this.editTodo.trim() && this.editTodoId !== null) {
      const todo = this.todos.find(todo => todo.id === this.editTodoId);
      if (todo) {
        todo.text = this.editTodo; 
      }
      this.editTodo = ''; 
      this.editTodoId = null; 
    }
  }
}
