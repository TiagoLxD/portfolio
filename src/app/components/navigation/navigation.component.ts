import { Component, signal } from '@angular/core'

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
})
export class NavigationComponent {
    navOpen = signal(false)
    links = [
        { label: 'Início', href: '#hero' },
        { label: 'Sobre', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' },
    ]
    toggleNav() {
        this.navOpen.update((open) => !open)
    }
    closeNav() {
        this.navOpen.set(false)
    }
}
