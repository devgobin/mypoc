<div class="progress-container">
  <div *ngFor="let step of steps; let i = index" class="progress-step">
    <!-- Step Icon -->
    <div class="step-circle" [ngClass]="getStatusClass(step.status)">
      <span *ngIf="step.status === 'finished'">&#10003;</span>
      <span *ngIf="step.status === 'in-progress'">&#10095;</span>
      <span *ngIf="step.status === 'waiting'">{{ i + 1 }}</span>
    </div>

    <!-- Step Title and Description -->
    <div class="step-content">
      <h4 class="step-title">{{ step.title }}</h4>
      <p class="step-description">{{ step.description }}</p>
    </div>

    <!-- Connecting Line -->
    <div
      *ngIf="i < steps.length - 1"
      class="step-line"
      [ngClass]="{ active: steps[i + 1].status !== 'waiting' }"
    ></div>
  </div>
</div>


import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  // Step data array
  steps = [
    {
      title: 'Finished',
      description: 'Description of the step',
      status: 'finished',
    },
    {
      title: 'In Progress',
      description: 'Description of the current step',
      status: 'in-progress',
    },
    {
      title: 'Waiting',
      description: 'Description of the next step',
      status: 'waiting',
    },
  ];

  // Method to return the CSS class for each step
  getStatusClass(status: string): string {
    return {
      finished: 'circle-finished',
      'in-progress': 'circle-in-progress',
      waiting: 'circle-waiting',
    }[status];
  }
}



/* Overall Container */
.progress-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
}

/* Individual Step */
.progress-step {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

/* Circle for Status */
.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  transition: all 0.3s ease;
}

/* Finished Step */
.circle-finished {
  background-color: #4caf50;
  color: white;
}

/* In-Progress Step */
.circle-in-progress {
  background-color: #2196f3;
  color: white;
  border: 2px solid #2196f3;
}

/* Waiting Step */
.circle-waiting {
  background-color: #e0e0e0;
  color: #9e9e9e;
}

/* Title and Description */
.step-content {
  flex-grow: 1;
}

.step-title {
  font-size: 14px;
  margin: 0;
  font-weight: bold;
}

.step-description {
  font-size: 12px;
  color: #757575;
  margin: 0;
}

/* Line Connector */
.step-line {
  height: 4px;
  background-color: #e0e0e0;
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.step-line.active {
  background-color: #2196f3;
}
