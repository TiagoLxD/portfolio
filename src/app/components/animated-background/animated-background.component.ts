import { Component, Input, OnInit, Renderer2, ElementRef, OnDestroy, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnimatedBackgroundService, Particle } from './animated-background.service'

@Component({
    selector: 'app-animated-background',
    imports: [CommonModule],
    templateUrl: './animated-background.component.html',
    styleUrls: ['./animated-background.component.scss'],
})
export class AnimatedBackgroundComponent implements OnInit {
    @Input() particleCount = 50
    @Input() colors: string[] = ['#0f172a', '#581c87', '#1e3a8a']
    @Input() speed = 1

    particles: Particle[] = []
    private readonly animatedBackgroundService = inject(AnimatedBackgroundService)

    ngOnInit(): void {
        this.generateParticles()
    }

    private generateParticles(): void {
        this.particles = this.animatedBackgroundService.generateParticles(this.particleCount)
    }

    getParticleStyle(particle: Particle): Record<string, string> {
        return {
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${6 / this.speed}s`,
        }
    }

    getGradientStyle(): Record<string, string> {
        const colorStops = this.colors
            .map((color, index) => {
                const percentage = (index / (this.colors.length - 1)) * 100
                return `${color} ${percentage}%`
            })
            .join(', ')

        return {
            background: `linear-gradient(135deg, ${colorStops})`,
            animationDuration: `${5 / this.speed}s`,
        }
    }
}
