// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainlitApp title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainlitApp/i);
    expect(titleElement).toBeInTheDocument();
});
