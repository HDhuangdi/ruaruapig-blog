import { message } from 'antd';

function loadingMessageGenerator(messageKey: string | number) {
  if (!process.browser) return;
  message.loading({
    content: 'Loading...',
    duration: 0,
    key: messageKey,
  });
}

function destroyLoadingMessage(messageKey: string | number) {
  if (!process.browser) return;
  message.destroy(messageKey);
}

function serverErrorMessageGenerator() {
  if (!process.browser) return;
  message.error('啊哦，服务器开了小差~');
}

export {
  loadingMessageGenerator,
  destroyLoadingMessage,
  serverErrorMessageGenerator,
};
