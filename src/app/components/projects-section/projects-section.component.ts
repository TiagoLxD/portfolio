import { Component, signal, computed } from '@angular/core'
import { GithubIconComponent } from '../icons/github-icon.component'
import { ExternalLinkIconComponent } from '../icons/external-link-icon.component'

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    imports: [GithubIconComponent, ExternalLinkIconComponent],
})
export class ProjectsSectionComponent {
    projects = signal([
        {
            title: 'Em breve',
            description: 'Em breve.',
            image: '/placeholder.svg',
            technologies: [' ', ' ', ' ', ' ', ' '],
            githubUrl: '#',
            liveUrl: '#',
            featured: true,
        },
        {
            title: 'Em breve',
            description: 'Em breve.',
            image: '/placeholder.svg',
            technologies: [' ', ' ', ' ', ' '],
            githubUrl: '#',
            liveUrl: '#',
            featured: true,
        },
        {
            title: 'Em breve',
            description: 'Em breve.',
            image: '/placeholder.svg',
            technologies: [' ', ' ', ' ', ' '],
            githubUrl: '#',
            liveUrl: '#',
            featured: false,
        },
        {
            title: 'Em breve',
            description: 'Em breve.',
            image: '/placeholder.svg',
            technologies: [' ', ' ', ' ', ' '],
            githubUrl: '#',
            liveUrl: '#',
            featured: false,
        },
    ])

    featuredProjects = computed(() => this.projects().filter((p) => p.featured))
    otherProjects = computed(() => this.projects().filter((p) => !p.featured))
}
