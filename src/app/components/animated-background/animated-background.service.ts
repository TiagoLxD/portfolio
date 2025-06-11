import { Injectable } from '@angular/core'

export interface Particle {
    id: number
    size: number
    left: number
    top: number
    delay: number
}

@Injectable({
    providedIn: 'root',
})
export class AnimatedBackgroundService {
    generateParticles(count: number): Particle[] {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 6,
        }))
    }
}
