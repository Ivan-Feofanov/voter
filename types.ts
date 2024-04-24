import BigNumber from "bignumber.js";

export interface VoteInfo {
    open: boolean;
    executed: boolean;
    startDate: number;
    supportRequired: BigNumber;
    minAcceptQuorum: BigNumber;
    yea: BigNumber;
    nay: BigNumber;
    votingPower: BigNumber;
    phase: number;
    url: string;
    total: BigNumber;
    pro: number;
    contra: number;
    passed: boolean;
    quorumDistance: number;
    timeLeft: number;
    resultsStr: string;
    lastReportedTotal?: BigNumber;
    alertLevel?: number;
    noMorePing?: boolean;
}
