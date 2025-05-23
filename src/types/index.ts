export interface Transaction {
  amount: number;
  timestamp: string;
}

export interface Statistics {
  count: number;
  sum: number;
  avg: number;
  min: number;
  max: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
}
