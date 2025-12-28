import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

type IconComponent = React.ComponentType<LucideProps>;

export function Icon({ name, ...props }: IconProps) {
  const icons = LucideIcons as unknown as Record<string, IconComponent>;
  const LucideIcon = icons[name];
  
  if (!LucideIcon) {
    return <LucideIcons.HelpCircle {...props} />;
  }
  
  return <LucideIcon {...props} />;
}
