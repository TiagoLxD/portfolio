import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-hero-section',
    imports: [CommonModule],
    templateUrl: './hero-section.html',
})
export class HeroSection {
    techStack = signal([
        {
            name: 'React',
            color: 'from-cyan-400 to-blue-400',
            glow: 'shadow-cyan-400/50',
        },
        {
            name: 'Angular',
            color: 'from-green-400 to-emerald-400',
            glow: 'shadow-green-400/50',
        },
        {
            name: 'TypeScript',
            color: 'from-blue-500 to-indigo-500',
            glow: 'shadow-blue-400/50',
        },
        {
            name: 'PHP',
            color: 'from-purple-400 to-pink-400',
            glow: 'shadow-purple-400/50',
        },
        {
            name: 'Python',
            color: 'from-yellow-400 to-orange-400',
            glow: 'shadow-yellow-400/50',
        },
        {
            name: 'Cloud',
            color: 'from-cyan-500 to-teal-500',
            glow: 'shadow-cyan-400/50',
        },
    ])

    socialLinks = [
        {
            icon: 'github',
            href: '#',
            label: 'GitHub',
            color: 'hover:text-cyan-400',
        },
        {
            icon: 'linkedin',
            href: '#',
            label: 'LinkedIn',
            color: 'hover:text-magenta-400',
        },
        { icon: 'mail', href: '#', label: 'Email', color: 'hover:text-green-400' },
    ]

    scrollToAbout() {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
