import { ICampaign } from 'helpers/types';

export type SelectOption = {
  value: string | number;
  label: string;
};

export type RegisterInput = {
  firstName: string;
  email: string;
  matricule: string;
  level: number;
  school: string;
  department: string;
  password: string;
};

export type userLoginInput = {
  matricule: string;
  password: string;
};

export type adminLoginInput = {
  username: string;
  password: string;
};

export type VoteInput = {
  voterId: string;
  candidates: string[];
  campaignId: string;
};

export type CampaignInput = Omit<ICampaign, '_id' | 'votingPositions'>;

export type CampaignSummary = {
  name: string;
  id: string;
  startTime: string;
  endTime: string;
  numCandidates: number;
  numVotes: number;
};
