import { Inject, InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  PersonneCacheSize: number;
}

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN', {
  providedIn: 'root',
  factory: () => APP_CONFIG,
});

export const APP_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:9000',
  PersonneCacheSize: 10,
};
