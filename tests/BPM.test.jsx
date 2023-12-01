import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, describe, vi } from 'vitest';

const mockedSetSelectedBeat = vi.fn(() => "90");

import BPM from '../src/components/BPM';

describe('BPM', () => {
  it('should render BPM beat display', () => {
    
    render(<BPM selectedBeat="90"/>);

    const bpmInput = screen.getByText("90 BPM");

    expect(bpmInput).toBeInTheDocument();

    screen.debug();

  });
  
  it('should render BPM slider', () => {
    
    render(<BPM selectedBeat="90"/>);

    const bpmSlider = screen.getByRole("slider");

    expect(bpmSlider).toBeInTheDocument();

  });

  it('should render BPM slider', async () => {
    
    render(<BPM selectedBeat="90" setSelectedBeat={mockedSetSelectedBeat}/>);

    const bpmSlider = screen.getByRole("slider");
    fireEvent.change(bpmSlider, { target: { value: "120" }});

    expect(mockedSetSelectedBeat).toHaveBeenCalled();
  });

});