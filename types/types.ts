export interface LoginType {
    email: string;
    password: string;
}

export interface goalsType {
    _id: string;
    user: string;
    goalName: string;
    goalDesc: string;
    goalLink: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    status: boolean;
    reminder: boolean;
    createdAt: number;
}

export interface addGoals {
    goalName: string,
    goalDesc: string,
    goalLink: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    reminder: boolean;
  }

  export interface addTask {
    taskName: string,
    taskDesc: string,
    taskLink: string,
    taskStatus: string,
    createdAt: string,
    updatedAt: string,
  }

  export interface editGoal {
    id: number
    taskName: string,
    taskDesc: string,
    taskLink: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    reminder: boolean;
  }


  
  export interface taskGraph {
    type: string
    total: number
  }
  
  export interface alltaskGraph {
    graph: Array<taskGraph>
    totalTask: number
  }

  export interface taskDetails {
    taskName: string;
    taskDesc: string;
    status: string;
  }
  