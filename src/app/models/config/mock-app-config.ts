import { AppConfig } from './app-config.model';

export const MOCK_APP_CONFIG: AppConfig = {
  apiServerUrl: "http://localhost:8080",
  token: "dfdsfdsfdsf",
  keycloakConfig : {
    url: "http://localhost:8080/auth",
    realm: "klesia-geo-realm",
    clientId: "geo-front-app"
  }
};
