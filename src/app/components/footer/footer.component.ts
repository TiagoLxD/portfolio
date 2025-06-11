import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear = signal(new Date().getFullYear())
}
