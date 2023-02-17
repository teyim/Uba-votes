type Vote = {
  candidateId: string;
  campaignId: string;
  _id: string;
};

export interface IUser {
  _id: string;
  fullName: string;
  matricule: string;
  email: string;
  level: number;
  school: string;
  department: string;
  votes: Vote[];
  __v: number;
  token: string;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  user: IUser;
}
