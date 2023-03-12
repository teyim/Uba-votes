import { useQuery } from '@tanstack/react-query';
import { getCampaignResults, getCampaigns } from 'helpers';

export const useCampaignQuery = () =>
  useQuery({ queryKey: ['campaigns'], queryFn: () => getCampaigns() });

export const useResultQuery = (campaignId: string) =>
  useQuery({
    queryKey: ['results'],
    queryFn: () => getCampaignResults(campaignId),
  });
