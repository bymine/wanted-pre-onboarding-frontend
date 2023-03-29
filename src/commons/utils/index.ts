import { INPUT_TYPE } from '../../auth/constants';

export function passwordIcon(type: string): string {
  return `bx ${type === INPUT_TYPE.TEXT ? 'bx-show' : 'bx-hide'} `;
}
