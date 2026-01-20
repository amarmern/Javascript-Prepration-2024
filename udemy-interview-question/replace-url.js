const replaceParams = (url, replaceElements) => {
  return replaceElements.reduce((acc, replacement) => {
    return acc.replace(':' + replacement.from, replacement.to);
  }, url);
};

const initialUrl = '/post/:postId/comments/:commentId';

const resultUrl = replaceParams(initialUrl, [
  { from: 'postId', to: '1' },
  { from: 'commentId', to: '5' },
]);

console.log(resultUrl);
