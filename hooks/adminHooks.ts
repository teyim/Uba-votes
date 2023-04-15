import { useQuery } from '@tanstack/react-query';
import { getAllCampaigns } from 'helpers/adminHelpers';

export const useAllCampaignsQuery = () =>
  useQuery({ queryKey: ['allCampaigns'], queryFn: () => getAllCampaigns() });