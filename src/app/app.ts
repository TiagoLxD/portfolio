import { Component } from '@angular/core'
import { HeroSection } from './pages/hero-section/hero-section'
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component'
import { AboutSectionComponent } from './components/about-section/about-section.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component'
import { ContactSectionComponent } from './components/contact-section'
import { FooterComponent } from './components/footer/footer.component'
import { SkillsSectionComponent } from './components/skills-section/skills-section.component'

@Component({
    selector: 'app-root',
    imports: [
        HeroSection,
        AnimatedBackgroundComponent,
        AboutSectionComponent,
        SkillsSectionComponent,
        NavigationComponent,
        ProjectsSectionComponent,
        ContactSectionComponent,
        FooterComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected title = 'myportfolio'
}
