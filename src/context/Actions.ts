export enum ActionType {
  toggleSetBlue,
}

export interface ToggleSetBlue {
  type: ActionType.toggleSetBlue;
  payload: boolean;
}

export type AppActions = ToggleSetBlue;
