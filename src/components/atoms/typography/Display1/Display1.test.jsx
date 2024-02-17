import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, test, vi, expect } from 'vitest';
import Display1 from "./Display1";

describe('Display1', () => {

  test('given a text child, renders a heading to screen', () => {
    render(
      <Display1 color="text-neutral-900">Hi I am Javier</Display1>
    );
    
    expect(screen.getByText(/Hi I am Javier/i)).toBeDefined();
  })

})