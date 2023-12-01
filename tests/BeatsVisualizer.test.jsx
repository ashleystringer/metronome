import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, describe } from 'vitest';

import BeatsVisualizer from '../src/components/BeatsVisualizer';

describe('BeatsVisualizer', () => {
  it('should render the appropriate amount of buttons', async () => {
    
    render(<BeatsVisualizer noteNumber="4"/>);

    await waitFor(() => {
        const displayedBeats = screen.getAllByTestId("beat");

        console.log(displayedBeats);
    });
    //expect(displayedBeats).toHaveLength(4);

    screen.debug();
  });

  
});