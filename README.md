# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Components

### AnimatedBackground

The `AnimatedBackgroundComponent` creates a visually appealing animated background with gradient colors, floating particles, and geometric shapes.

#### Usage

```html
<app-animated-background 
  [particleCount]="50" 
  [colors]="['#0f172a', '#581c87', '#1e3a8a']" 
  [speed]="1">
</app-animated-background>
```

#### Inputs

- `particleCount` (number): Number of particles to display in the background. Default: 50
- `colors` (string[]): Array of colors for the gradient background. Default: ['#0f172a', '#581c87', '#1e3a8a']
- `speed` (number): Animation speed multiplier. Higher values make animations faster, lower values make them slower. Default: 1

#### Setup

To use this component in your Angular application:

1. Import the component in your module or component:

```typescript
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';

@Component({
  // ...
  imports: [AnimatedBackgroundComponent],
  // ...
})
```

2. Add the component to your template:

```html
<app-animated-background></app-animated-background>
```

The component is designed to be placed as a full-screen background element, typically at the root of your application.