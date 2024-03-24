import { ComponentType, Dispatch, LazyExoticComponent, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Node = 'node',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled?: boolean;
  type?: LoadingProcessType;
  body?: '';
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  node: ReactNode;
}

export interface IAction {
  state:
    | IState
    | TLoadingProcessState
    | string
    | ReactNode
    | LazyExoticComponent<ComponentType<any>>;
  type: ActionType;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}
