import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../app/page";
import { fetchPosts } from "../../services/postsService";
import { useRouter } from "next/router";
import { BlogPost } from "../../models/BlogPost"; // Import the Mongoose type

// Mock fetchPosts and useRouter
jest.mock("../../services/postsService");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockFetchPosts = fetchPosts as jest.MockedFunction<typeof fetchPosts>;
const mockUseRouter = useRouter as jest.Mock;

describe("Home Component", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks();
  });

  test("renders content when there is data", async () => {
    const mockPosts: BlogPost[] = [];

    mockFetchPosts.mockResolvedValueOnce(mockPosts as unknown as BlogPost[]);

    render(<Home />);

    await waitFor(() => {
      expect(
        screen.queryByText("There is no content. Create the first content.")
      ).not.toBeInTheDocument();
      expect(screen.getByText("Test Post")).toBeInTheDocument();
    });
  });

  test("renders no content message when there is no data", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);

    render(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText("There is no content. Create the first content.")
      ).toBeInTheDocument();
    });
  });

  test("renders no content message on fetch error", async () => {
    mockFetchPosts.mockRejectedValueOnce(new Error("Error fetching posts"));

    render(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText("There is no content. Create the first content.")
      ).toBeInTheDocument();
    });
  });
});
