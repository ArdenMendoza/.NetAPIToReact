// import { Action } from 'redux';
import { IAction } from '../../redux';


export type ILogInActionPayload = { email: string, password: string };
export interface ILoginAction extends IAction<ILogInActionPayload> { type: 'LOG_IN'; }
export const logIn = (payload: ILogInActionPayload): ILoginAction => ({
    type: 'LOG_IN',
    payload
});