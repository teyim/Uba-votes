type Vote = {
  candidateId: string;
  campaignId: string;
  _id: string;
};

export type Candidate = {
  _id: string;
  fullName: string;
  bio: string;
  matricule: string;
  age: number;
  sex: string;
  image: string;
  votes: number;
};

export type VotingPosition = {
  _id: string;
  abbrv: string;
  name: string;
  candidates: Candidate[];
};

export interface ICampaign {
  _id: string;
  name: string;
  desc: string;
  startTime: string;
  endTime: string;
  allowedDepartment: string;
  allowedSchool: string;
  allowedLevel: number;
  votingPositions: VotingPosition[];
}

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
