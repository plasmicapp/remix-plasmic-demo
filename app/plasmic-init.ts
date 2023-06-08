import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wwsjSJCbZokqZ1rAyrhQBX",  // ID of a project you are using
      token: "E4sjGMlhwlOmJMo8kN2u8RstYZCRset0nYWqw8nfOWQTGeglNTpqUfyr99DQ6zXL7q0LM9lFS8yx7egCtbAw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: false,
})