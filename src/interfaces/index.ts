import { NotificationType } from "../types";

export interface NotificationProps {
  open: boolean;
  type: NotificationType;
  message: string;
  onClose: () => void;
}
