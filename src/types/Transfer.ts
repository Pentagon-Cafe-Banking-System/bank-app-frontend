export interface Transfer {
    id: number;
    amount: number;
    receiverAccountNumber: string;
    receiverName: string;
    title: string;
    ordered: Date;
    executed: Date;
    reasonFailed?: string;
    isCompleted: boolean;
    isFailed: boolean;
    senderAccountNumber: string;
    senderAccountCurrencyCode: string;
}