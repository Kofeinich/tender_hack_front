export interface sessionsType {
    id: number;
    sessionName: string;
    customerName: string;
    currentPrice: number;
    start: string;
    end: string;
    bet: number;
    location: string;
    lastCustomerBet: string;
    status: string
}

export interface botSession {
    botSettingDto: {
        id: number,
        minPay: number,
        priority: number,
        timeDelay: string,
    },
    bet: number,
    currentPrice: number,
    customerName: string,
    end: string,
    id: number,
    lastCustomerBet: string,
    location: string,
    sessionName: string,
    start: string,
    status: string
}