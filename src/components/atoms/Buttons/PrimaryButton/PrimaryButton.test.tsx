import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import PrimaryButton from "./PrimaryButton";

describe('PrimmaryButton', () => {

  test('given clicked button, invokes handleClick function', () => {
    const handleClick = vi.fn();
    const label = 'Contact';

    render(
      <PrimaryButton label={label} handleClick={handleClick} />
    );

    const button = screen.getByRole('button', { name: /contact/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  })

})