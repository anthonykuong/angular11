import {IUserProfile} from '@frontend-sessions/models';

export enum PROFILE_UPDATE_PAGE {
  BASIC,
  CONTACT,
  COMPLETE
}

export const InitialUserProfile: IUserProfile = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: ''
}
