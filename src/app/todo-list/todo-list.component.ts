import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold cloths',
      completed: true,
    },
    {
      task: 'put cloths in dresser',
      completed: true,
    },
    {
      task: 'relax',
      completed: true,
    },
    {
      task: 'try to pet cat',
      completed: false,
    },
    {
      task: 'pet dog',
      completed: true,
    },
    {
      task: 'be awesome',
      completed: true,
    },
  ];

  deleteTodo = (index: number): void => {
    this.todos.splice(index, 1);
  };

  searchTerm: string = '';

  setSearchTerm = (form: NgForm): void => {
    console.log(form);
    this.searchTerm = form.form.value.term;
  };

  filterContacts = (term: string): Todo[] => {
    return this.todos.filter((item) => {
      let currentItem = item.task;
      return currentItem.includes(term);
    });
  };

  constructor() {}

  ngOnInit(): void {}
}
