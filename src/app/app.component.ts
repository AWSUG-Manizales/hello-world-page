import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from "../environments/environment";
import { FontAwesomeModule, IconDefinition } from "@fortawesome/angular-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMeetup } from "@fortawesome/free-brands-svg-icons";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'User Group';
    deploySource = environment.DEPLOYMENT_SOURCE;


    getSourceIp() {
        return window.location.origin;
    }


    getIcon(icon: string): IconDefinition {
        switch (icon) {
            case 'linkedin':
                return faLinkedin;
            case 'github':
                return faGithub;
            case 'meetup':
                return faMeetup;
            default:
                return faUser;
        }
    }
}
