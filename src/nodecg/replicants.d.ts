import { Assets } from "./asset";
import { SetupComment } from './generated/setup-comment';

type ReplicantMap = {
  'assets:background': Assets,
  'setup-comment': SetupComment
};

export {
  Assets,
  SetupComment,
  ReplicantMap
};
