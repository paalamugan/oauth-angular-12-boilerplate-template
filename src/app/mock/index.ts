import { AuthService, AuthMockService } from '@app/core/services/auth';
import { environment } from '@env/environment';

const providers = [
  {
    provide: AuthService,
    useClass: AuthMockService,
  },
];

export const mockServiceProviders = environment?.isEnableMock ? providers : [];
