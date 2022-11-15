import { messageGenerator } from './message-generator';

describe('messageGenerator', () => {
  it('should work', () => {
    expect(messageGenerator()).toEqual('message-generator');
  });
});
