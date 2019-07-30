import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);

    form.reset();
  }
}
