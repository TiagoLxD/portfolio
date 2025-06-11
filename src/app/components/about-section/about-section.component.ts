import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    imports: [CommonModule],
})
export class AboutSectionComponent {
    expertiseAreas = [
        {
            icon: 'brain',
            title: 'AI & Machine Learning',
            description: 'Desenvolvendo soluções inteligentes com TensorFlow, PyTorch e modelos de deep learning',
            color: 'from-purple-400 to-pink-500',
        },
        {
            icon: 'cpu',
            title: 'Arquitetura de Sistemas',
            description: 'Projetando microserviços escaláveis e sistemas distribuídos de alta performance',
            color: 'from-cyan-400 to-blue-500',
        },
        {
            icon: 'cloud',
            title: 'Cloud Native',
            description: 'Especialista em AWS, Kubernetes, Docker e infraestrutura como código',
            color: 'from-green-400 to-teal-500',
        },
        {
            icon: 'shield',
            title: 'Security & DevSecOps',
            description: 'Implementando práticas de segurança em todas as camadas do desenvolvimento',
            color: 'from-orange-400 to-red-500',
        },
    ]

    stats = signal([
        { value: '8+', label: 'Anos Codando', color: 'text-cyan-400' },
        { value: '100+', label: 'Projetos Shipped', color: 'text-magenta-400' },
        { value: '50+', label: 'Clientes Satisfeitos', color: 'text-green-400' },
    ])
}
