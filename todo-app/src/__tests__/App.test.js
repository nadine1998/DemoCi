// todo-app/src/__tests__/App.test.js

import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders To-Do List title', () => {
    render(<App />);
    const linkElement = screen.getByText(/To-Do List/i);
    expect(linkElement).toBeInTheDocument();
});
