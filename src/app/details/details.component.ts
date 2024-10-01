import { Component, ViewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { SubtasksComponent } from '../subtasks/subtasks.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [IconComponent, SubtasksComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  totalSubtasks: number = 0;
  completedCount: number = 0;
  detailsForm: FormGroup;
  editingField: string | null = null;

  constructor(private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      assignee: ['Brian Griffin'],
      coowner: ['Peter Griffin'],
      importance: ['Very urgent'],
      customerName: ['Enter name'],
      invoiceId: ['19823190'],
    });
  }

  enableEdit(field: string) {
    this.editingField = field;
  }

  saveChanges() {
    this.editingField = null;
    console.log(this.detailsForm.value);
  }

  cancelEdit() {
    this.editingField = null;
  }

  updateCounts(counts: { total: number; completed: number }) {
    this.totalSubtasks = counts.total;
    this.completedCount = counts.completed;
  }

  get progress() {
    return this.totalSubtasks > 0
      ? (this.completedCount / this.totalSubtasks) * 100
      : 0;
  }
}
