import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  departments = ['Development', 'Marketing', 'Design'];

  members = [
    { name: 'Ahmed', age: 28, department: 'Development', isAvailable: true },
    { name: 'Esraa', age: 24, department: 'Development', isAvailable: true }
  ];

  selectedDepartment = 'All';
  viewMode = 'card';

  name = '';
  age: number | null = null;
  department = 'Development';
  isAvailable = false;

  errorMessage = '';

  get filteredMembers() {
    if (this.selectedDepartment === 'All') return this.members;
    return this.members.filter(m => m.department === this.selectedDepartment);
  }

  addMember() {
    if (!this.name.trim()) {
      this.errorMessage = 'Please enter a valid member name.';
      return;
    }

    if (!this.age || this.age <= 0) {
      this.errorMessage = 'Please enter a valid age.';
      return;
    }

    this.errorMessage = '';
    this.members.push({
      name: this.name.trim(),
      age: Number(this.age),
      department: this.department,
      isAvailable: this.isAvailable
    });

    this.name = '';
    this.age = null;
    this.isAvailable = false;
  }

  deleteMember(index: number) {
    this.members.splice(index, 1);
  }
}