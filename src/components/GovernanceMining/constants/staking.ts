import { getSelectedNetwork } from 'src/stores/extensions';
import { useAppSelector } from 'src/stores/hooks';

export const useStakingConstants = () => {
  const selectedNetwork = useAppSelector(getSelectedNetwork);
  const environment = selectedNetwork.networkId;
  return stakingConfiguration[environment] || stakingConfiguration.mainnet;
};

type StakingEnvConfiguration = {
  rewardsPenaltyDaysToWait: number;
  rewardsPenaltyHoursToWait: number;
  rewardsClaimHoursToWait: number;
  percentagePenaltyHours: number;
  percentagePenalty: number,
  dynamicPenaltyDays: number;
  maxPowerVoting: number;
  withdrawDaysToWaitFromLastClaim: number;
};

type StakingConfiguration = Record<string, StakingEnvConfiguration>;

const stakingConfiguration: StakingConfiguration = {
  stage: {
    rewardsPenaltyDaysToWait: 0,
    rewardsPenaltyHoursToWait: 6,
    rewardsClaimHoursToWait: 2,
    percentagePenaltyHours: 1,
    percentagePenalty: 3,
    dynamicPenaltyDays: 0,
    maxPowerVoting: 2.5,
    withdrawDaysToWaitFromLastClaim: 7,
  },
  development: {
    rewardsPenaltyDaysToWait: 0,
    rewardsPenaltyHoursToWait: 6,
    rewardsClaimHoursToWait: 2,
    percentagePenaltyHours: 1,
    percentagePenalty: 3,
    dynamicPenaltyDays: 0,
    maxPowerVoting: 2.5,
    withdrawDaysToWaitFromLastClaim: 7,
  },
  mainnet: {
    rewardsPenaltyDaysToWait: 60,
    rewardsPenaltyHoursToWait: 1440,
    rewardsClaimHoursToWait: 168,
    percentagePenaltyHours: 72,
    percentagePenalty: 3,
    dynamicPenaltyDays: 60,
    maxPowerVoting: 2.5,
    withdrawDaysToWaitFromLastClaim: 7,
  },
};
