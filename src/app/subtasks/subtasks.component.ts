import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

type Subtask = {
  completed: boolean;
  name: string;
};

@Component({
  selector: 'app-subtasks',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IconComponent],
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.scss'],
})
export class SubtasksComponent implements OnInit {
  subtaskForm: FormGroup;
  isAddingSubtask: boolean = false;
  subtasks: Subtask[] = [];
  @Output() subtasksUpdated = new EventEmitter<{
    total: number;
    completed: number;
  }>();

  constructor(private fb: FormBuilder) {
    this.subtaskForm = this.fb.group({
      subtask: [''],
    });
  }

  ngOnInit(): void {
    this.subtasks = [
      { name: 'Send invoice to collections agency', completed: false },
      { name: 'Write an email to them to follow up', completed: false },
      { name: 'Send paper mail to account', completed: false },
    ];
    this.emitSubtaskCounts();
  }

  addSubtask() {
    if (this.subtaskForm.valid) {
      this.subtasks.push({
        name: this.subtaskForm.value.subtask,
        completed: false,
      });
      this.subtaskForm.reset();
      this.isAddingSubtask = false;
      this.emitSubtaskCounts();
    }
  }

  toggleAddingSubtask() {
    this.isAddingSubtask = !this.isAddingSubtask;
  }

  toggleCompletion(subtask: Subtask) {
    subtask.completed = !subtask.completed;
    this.emitSubtaskCounts();
  }

  private emitSubtaskCounts() {
    const total = this.subtasks.length;
    const completed = this.subtasks.filter(
      (subtask) => subtask.completed
    ).length;
    this.subtasksUpdated.emit({ total, completed });
  }
}
