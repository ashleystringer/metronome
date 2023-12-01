import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe } from 'vitest';

import TimeSignature from '../src/components/TimeSignature';

describe('TimeSignature', () => {
  it('should render the appropriate amount of buttons', () => {
    
    render(<TimeSignature noteValue="4" noteNumber="4"/>);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(11);

   //const element = screen.getByTestId("btn");
    
    //const { container } =  render(<TimeSignature noteValue="4" noteNumber="4"/>);

    //expect(screen.getByText('4')));

    //How do I test clicking of buttons?


    //fireEvent.click(screen.getByText('9'))

    //expect(setNoteValue).toBe(4);

    //fireEvent.change(screen);

    screen.debug();
  });

  
});