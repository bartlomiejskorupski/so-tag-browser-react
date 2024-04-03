import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface MainSectionProps extends PropsWithChildren {}

export default function MainSection({ children }: MainSectionProps) {
  return (
    <Container component="main">
      <div className="sm:max-w-xl mx-auto">{children}</div>
    </Container>
  );
}
