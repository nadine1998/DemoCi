// todo-app/src/__tests__/App.test.js

import { render, screen } from '@testing-library/react'
import App from '../App';
test("Example 1 renders successfully", () => {
    render(<App />);

    const element = screen.getByText(/To-Do List/i);

    expect(element).toBeInTheDocument();
})