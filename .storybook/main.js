/**
 * 스토리북 설정
 * https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project
 *
 * Storybook + Next.js
 * https://storybook.js.org/recipes/next/
 */

module.exports = {
  // 스토리북 파일 위치
  // https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // 추가 기능
  // https://storybook.js.org/integrations
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  // 연동 프레임워크 (프론트개발에서 사용하는 라이브러리 또는 프레임워크)
  // https://storybook.js.org/docs/react/configure/frameworks
  // 예: react-webpack5, vue3-vite
  framework: "@storybook/react",
  // https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/#manual-configuration
  webpackFinal: async (config) => {
    return config;
  },
};
