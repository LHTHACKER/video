import { useMutation } from "@tanstack/react-query";

import { useGetInstagramPost } from "@/features/api/requests/instagram";

export const useGetInstagramPostMutation = () => {
  // const fetch = useGetInstagramPost();

  // Mock fetch for GitHub Pages static export
  const fetch = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a structured error consistent with the app's error handling
    return {
      status: 500, // or 429/404 based on how errors are handled
      data: {
        error: "serverError",
        message: "Backend API is unavailable on GitHub Pages (Static Hosting). Please clone and run locally to download videos.",
      },
      json: async () => ({
        error: "serverError",
        message: "Backend API is unavailable on GitHub Pages (Static Hosting). Please clone and run locally to download videos.",
      })
    } as any;
  };

  const mutation = useMutation({
    mutationFn: fetch,
    mutationKey: ["getInstagramPost"],
    retry: false,
  });

  return mutation;
};
