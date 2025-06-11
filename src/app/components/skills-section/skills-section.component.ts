import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    imports: [CommonModule],
})
export class SkillsSectionComponent {
    skillCategories = [
        {
            title: 'Frontend Mastery',
            skills: ['Angular', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js'],
            icon: 'code',
            color: 'from-cyan-400 to-blue-500',
            borderColor: 'border-cyan-400/30',
        },
        {
            title: 'Backend Engineering',
            skills: ['PHP', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
            icon: 'database',
            color: 'from-magenta-400 to-purple-500',
            borderColor: 'border-magenta-400/30',
        },
        {
            title: 'Cloud & DevOps',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Serverless'],
            icon: 'cloud',
            color: 'from-green-400 to-teal-500',
            borderColor: 'border-green-400/30',
        },
        {
            title: 'AI & Emerging Tech',
            skills: ['TensorFlow', 'PyTorch', 'OpenAI API'],
            icon: 'brain',
            color: 'from-yellow-400 to-orange-500',
            borderColor: 'border-yellow-400/30',
        },
    ]

    additionalExpertise = [
        'Arquitetura de Microsserviços',
        'Design Patterns',
        'Clean Architecture',
        'Test-Driven Development',
        'Performance Optimization',
        'Security Best Practices',
        'Team Leadership',
        'Agile/Scrum',
        'Technical Mentoring',
        'Code Review',
    ]

    performanceMetrics = signal([
        { icon: 'cpu', metric: '99.9%', label: 'Uptime Garantido', color: 'text-cyan-400' },
        { icon: 'shield', metric: '100%', label: 'Código Seguro', color: 'text-green-400' },
        { icon: 'database', metric: '<100ms', label: 'Response Time', color: 'text-magenta-400' },
        { icon: 'cloud', metric: '∞', label: 'Escalabilidade', color: 'text-yellow-400' },
    ])
}
