<div class="progress-bar-container">
  <div *ngFor="let step of steps; let i = index" class="progress-step">
    <div class="step-icon" [ngClass]="getStatusClass(step.status)">
      <span *ngIf="step.status === 'finished' || step.status === 'in-progress'">&#10003;</span>
      <span *ngIf="step.status === 'waiting'">{{ i + 1 }}</span>
    </div>
    <div class="step-content">
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </div>
    <div *ngIf="i < steps.length - 1" class="step-line" [ngClass]="{ 'active': step.status !== 'waiting' }"></div>
  </div>
</div>

     steps = [
    { title: 'Finished', description: 'Description', status: 'finished' },
    { title: 'In Progress', description: 'Description', status: 'in-progress' },
    { title: 'Waiting', description: 'Description', status: 'waiting' }
  ];

  getStatusClass(status: string): string {
    return {
      finished: 'step-finished',
      'in-progress': 'step-in-progress',
      waiting: 'step-waiting'
    }[status];
  }


.progress-bar-container {
  display: flex;
  align-items: center;
}

.progress-step {
  display: flex;
  align-items: center;
}

.step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.step-finished {
  background-color: #4caf50;
  color: white;
}

.step-in-progress {
  background-color: #2196f3;
  color: white;
}

.step-waiting {
  background-color: #e0e0e0;
  color: #9e9e9e;
}

.step-content {
  margin-left: 10px;
}

.step-line {
  width: 50px;
  height: 4px;
  background-color: #e0e0e0;
  margin: 0 10px;
}

.step-line.active {
  background-color: #2196f3;
}
