import { TestBed } from '@angular/core/testing'
import { AnimatedBackgroundService } from './animated-background.service'

describe('AnimatedBackgroundService', () => {
    let service: AnimatedBackgroundService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(AnimatedBackgroundService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    describe('generateParticles', () => {
        it('should generate the correct number of particles', () => {
            const count = 10
            const particles = service.generateParticles(count)
            expect(particles.length).toBe(count)
        })

        it('should generate particles with valid properties', () => {
            const particles = service.generateParticles(5)

            particles.forEach((particle) => {
                // Check ID is a number
                expect(typeof particle.id).toBe('number')

                // Check size is between 2-6px
                expect(particle.size).toBeGreaterThanOrEqual(2)
                expect(particle.size).toBeLessThanOrEqual(6)

                // Check position is between 0-100%
                expect(particle.left).toBeGreaterThanOrEqual(0)
                expect(particle.left).toBeLessThanOrEqual(100)
                expect(particle.top).toBeGreaterThanOrEqual(0)
                expect(particle.top).toBeLessThanOrEqual(100)

                // Check delay is between 0-6s
                expect(particle.delay).toBeGreaterThanOrEqual(0)
                expect(particle.delay).toBeLessThanOrEqual(6)
            })
        })

        it('should generate unique IDs for each particle', () => {
            const particles = service.generateParticles(20)
            const ids = particles.map((p) => p.id)
            const uniqueIds = new Set(ids)

            expect(uniqueIds.size).toBe(particles.length)
        })
    })
})
