import { Component, signal } from '@angular/core'

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
    formData = signal({ name: '', email: '', message: '' })

    handleChange(field: 'name' | 'email' | 'message', value: Event) {
        const input = value.target as HTMLInputElement
        this.formData.set({ ...this.formData(), [field]: input.value || '' })
    }

    handleSubmit(event: Event) {
        event.preventDefault()
        // Simula envio
        console.log('Form submitted:', this.formData())
        this.formData.set({ name: '', email: '', message: '' })
    }
}
