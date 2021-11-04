import { KeycloakConfig } from "keycloak-js";


export class AppConfig {
    apiServerUrl: string | undefined;
    keycloakConfig: KeycloakConfig | undefined;
    token: string | undefined;
}
