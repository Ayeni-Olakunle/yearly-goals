export interface LoginType {
    email: string;
    password: string;
}

export interface goalsType {
    _id: string;
    user: string;
    taskName: string;
    taskDesc: string;
    taskLink: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    status: boolean;
    reminder: boolean;
    createdAt: number;
}

export interface addGoals {
    taskName: string,
    taskDesc: string,
    taskLink: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    reminder: boolean;
  }