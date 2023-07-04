/**
 * 스토리북 미리보기 방식 구성
 * https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
// https://storybook.js.org/docs/react/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
