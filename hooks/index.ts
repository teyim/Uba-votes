import { useQuery } from '@tanstack/react-query';
import { getCampaigns } from 'helpers';

export const useCampaignQuery = () =>
  useQuery({ queryKey: ['campaigns'], queryFn: () => getCampaigns() });
