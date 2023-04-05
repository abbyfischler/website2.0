import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2xivTvVc9MkGADdnVfMAFY",  // ID of a project you are using
      token: "4CsUyFJP6jlYAIve1vtegIGMJVBtAcpayP7dW2XzhZdo1BXBW3XoAJ8S7NEuolU4iAQhLixj1LJmvR6MecPQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})