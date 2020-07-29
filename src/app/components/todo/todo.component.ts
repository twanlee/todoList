import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Itodo} from './itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id = 1;
  userInput = new FormControl();
  todos: Array<Itodo> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: Itodo = {
        id: this.id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
