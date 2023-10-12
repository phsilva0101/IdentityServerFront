import { AuthService } from "../services/auth-service.service";

export function authAppInitializerFactory(authService: AuthService): () => Promise<void> {
  return () => authService.runInitialLoginSequence();
}
