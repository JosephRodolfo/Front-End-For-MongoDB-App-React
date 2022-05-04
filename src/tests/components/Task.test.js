import React from "react";
import Task from "../../components/Task";
import "@testing-library/jest-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import { content } from "../fixtures/content";
import { render, screen, fireEvent } from "@testing-library/react";
let result;
let taskEditParent;
let taskDeleteParent;
beforeEach(() => {
  taskEditParent = jest.fn();
  taskDeleteParent = jest.fn();
  const renderer = new ShallowRenderer();
  renderer.render(<Task content={content} />);
  result = renderer.getRenderOutput();
});

test("should render Task correctly", () => {
  expect(result.type).toBe("div");
  expect(result).toMatchSnapshot();
});

test("should conditionally render form for editing Task correctly when clicking edit button", () => {
  const index = 0;
  render(<Task index={index} content={content} />);

  fireEvent.click(screen.getByText("Edit"));

  expect(screen.getByRole("form")).toBeInTheDocument();
});

test("should handle clicking save correctly after editing task", () => {
  const index = 1;
  render(
    <Task index={index} taskEditParent={taskEditParent} content={content} />
  );

  fireEvent.click(screen.getByText("Edit"));
  fireEvent.click(screen.getByText("Save"));

  expect(taskEditParent).toHaveBeenCalled();
  expect(taskEditParent).toHaveBeenCalledWith(content._id, {
    completed: false,
    description: "",
  });
});

test("should handle clicking delete task correctly", () => {
  const index = 1;
  render(
    <Task
      index={index}
      taskDeleteParent={taskDeleteParent}
      taskEditParent={taskEditParent}
      content={content}
    />
  );

  fireEvent.click(screen.getByText("Delete"));

  expect(taskDeleteParent).toHaveBeenCalled();
  expect(taskDeleteParent).toHaveBeenCalledWith(content._id);
});
