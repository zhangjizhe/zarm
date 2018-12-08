import Markdown from '@site/components/Markdown';

export default class Page extends Markdown {
  document = () => {
    return {
      document: require('@/components/keyboard-picker/demo.md'),
      className: 'keyboard-page',
    };
  }
}
