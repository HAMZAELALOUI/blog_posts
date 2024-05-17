import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogPostCard from "../components/BlogPostCard";

const mockPost = {
  title: "Test Post",
  summary: "This is a summary of the test post.",
  slug: "test-post",
  author: "John Doe",
  date: "2024-05-17",
  image: "test-image.jpg",
};

describe("BlogPostCard Component", () => {
  test("renders BlogPostCard with all props", () => {
    render(<BlogPostCard {...mockPost} />);

    // Check if the title is rendered
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();

    // Check if the summary is rendered
    expect(screen.getByText(mockPost.summary)).toBeInTheDocument();

    // Check if the author and date are rendered
    expect(
      screen.getByText(`${mockPost.author} | ${mockPost.date}`)
    ).toBeInTheDocument();

    // Check if the "Read more" link is rendered
    expect(screen.getByText("Read more")).toBeInTheDocument();

    // Check if the image alt text is rendered
    expect(screen.getByAltText(mockPost.title)).toBeInTheDocument();
  });

  test("renders default image when no image is provided", () => {
    const { image, ...mockPostWithoutImage } = mockPost;

    render(<BlogPostCard {...mockPostWithoutImage} image="" />);

    // Check if the default image is rendered
    const imgElement = screen.getByAltText(mockPost.title);
    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining("/assets/default.png")
    );
  });
});
