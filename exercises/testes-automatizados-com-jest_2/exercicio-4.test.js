const { getRepos } = require('./exercicio-4');
const { describe, expect, it } = require('@jest/globals');


it('teste o resultado da função', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  expect.assertions(2);
  const data = await getRepos(url);
  expect(data).toContain('sd-01-week4-5-project-todo-list');
  expect(data).toContain('sd-01-week4-5-project-meme-generator');
})