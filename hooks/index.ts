import { useQuery } from '@tanstack/react-query';
import { getCampaignResults, getCampaigns } from 'helpers/userHelpers';

export const useCampaignQuery = (userId: string) =>
  useQuery({ queryKey: ['campaigns'], queryFn: () => getCampaigns(userId) });

export const useResultQuery = (campaignId: string) =>
  useQuery({
    queryKey: ['results'],
    queryFn: () => getCampaignResults(campaignId),
  });
