import { message } from 'antd';

function loadingMessageGenerator(messageKey: string | number) {
  message.loading({
    content: 'Loading...',
    duration: 0,
    key: messageKey,
  });
}

function destroyLoadingMessage(messageKey: string | number) {
  message.destroy(messageKey);
}

function serverErrorMessageGenerator() {
  message.error('啊哦，服务器开了小差~');
}

export {
  loadingMessageGenerator,
  destroyLoadingMessage,
  serverErrorMessageGenerator,
};
