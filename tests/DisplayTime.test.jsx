import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe } from 'vitest';

import DisplayTime from '../src/components/DisplayTime';

describe('DisplayTime', () => {
  it('should render the time signature', () => {
    
    render(<DisplayTime noteValue="4" noteNumber="4"/>);

    const display = screen.getByText("4 / 4");

    expect(display).toBeInTheDocument();
    
    screen.debug();
  });

  
});