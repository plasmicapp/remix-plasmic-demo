/** @format */

import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rBchQqgY2tAbnWaSRCwjcQ", // ID of a project you are using
      token:
        "BajmUfSZQk7iU7P57qmntl4ONl64J6xDjGI9tSGIhoRusC4Wwox6TnYsvQ8pwO8foYXq417GyOVVLwFTgCjQ", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
