export interface IUserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IFeatureState {
  page: any;
  isLoading: boolean;
  error?: any;
}
