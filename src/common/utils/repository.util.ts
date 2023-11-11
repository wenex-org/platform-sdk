import { toDate } from './transform.util';
import { State, Status } from '../enums';

export const isAvailable = ({
  deleted_at,
  restored_at,
}: {
  deleted_at?: Date | string;
  restored_at?: Date | string;
}): boolean => {
  if (!deleted_at) return true;
  if (deleted_at && !restored_at) return false;

  if (typeof deleted_at === 'string') deleted_at = toDate(deleted_at);
  if (typeof restored_at === 'string') restored_at = toDate(restored_at);

  if (restored_at && deleted_at >= restored_at) return false;
  else return true;
};

export const isApplicable = ({
  state,
  status,
}: {
  state?: State;
  status?: Status;
}): boolean => {
  if (!state && !status) return true;

  let cond = true;

  if (status && status !== Status.Active) cond &&= false;
  if (state && ![State.Approved, State.Verified].includes(state)) cond &&= false;

  return cond;
};
