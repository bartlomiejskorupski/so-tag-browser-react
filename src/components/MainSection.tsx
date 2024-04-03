import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface MainSectionProps extends PropsWithChildren {}

export default function MainSection({ children }: MainSectionProps) {
  return (
    <Container component="main" className="sm:max-w-xl">
      {children}
    </Container>
  );
}
