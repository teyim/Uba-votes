import { Vote } from 'helpers/types';
export type CardProps = {
  name: string;
  desc: string;
  school: string;
  department: string;
  level: number;
  id: string;
  disabled: boolean;
  hasVoted: Vote | undefined;
  voteStartTime: string;
  voteEndTime: string;
};
