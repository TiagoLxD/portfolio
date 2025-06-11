import { Component, input } from '@angular/core'

@Component({
    selector: 'app-external-link-icon',
    template: `
        <svg [attr.width]="size()" [attr.height]="size()" fill="none" viewBox="0 0 24 24" class="text-white">
            <path
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
            <polyline
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="15 3 21 3 21 9"
            />
            <line
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                x1="10"
                y1="14"
                x2="21"
                y2="3"
            />
        </svg>
    `,
})
export class ExternalLinkIconComponent {
    size = input(20)
}
